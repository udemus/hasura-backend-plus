import { spawn } from 'child_process'
import fetch from 'node-fetch'
import { writeFileSync } from 'fs'
import { copy, remove, pathExists, emptyDir } from 'fs-extra'
import url from 'url'
import TMP from 'temp-dir'
import { APPLICATION } from '@shared/config'

const LOG_LEVEL = process.env.NODE_ENV === 'production' ? 'ERROR' : 'INFO'
const TEMP_MIGRATION_DIR = `${TMP}/hasura-backend-plus-temp-migrations`

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

const waitFor = async (path: string, attempts = 240): Promise<void> => {
  if(LOG_LEVEL === 'INFO')
    console.log(`Waiting for ${path}`)
  if (attempts > 0) {
    try {
      if ((await fetch(path)).status !== 200) {
        await sleep(1000)
        await waitFor(path, attempts--)
      }
    } catch (error) {
      await sleep(1000)
      await waitFor(path, attempts--)
    }
  } else throw Error(`Unable to reach ${path}`)
}

const hasuraConsole = async (action: string): Promise<void> => {
  try {
    const child = spawn('./node_modules/.bin/hasura', [
      ...action.split(' '),
      '--log-level',
      LOG_LEVEL,
      '--skip-update-check',
      '--project',
      TEMP_MIGRATION_DIR
    ])
    for await (const data of child.stdout) {
      process.stdout.write(data.toString())
    }
  } catch (error) {
    console.log('Error in starting hasura cli')
    console.log(error)
  }
}

type Migration = {
  migrations?: string
  metadata?: string
}

export default async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { migrations, metadata }: Migration = { migrations: './migrations', metadata: './metadata' }
): Promise<void> => {
  console.log('Checking migrations and metadata...')

  const { protocol, host } = url.parse(APPLICATION.HASURA_ENDPOINT)
  const hasuraURL = `${protocol}//${host}`
  // const hasuraURL = `http://0.0.0.0:8080`

  // * Wait for GraphQL Engine to be ready
  await waitFor(`${hasuraURL}/healthz`)

  // * Empty or create the temporary directory
  await emptyDir(TEMP_MIGRATION_DIR)
  // * Set the Hasura CLI config.yaml file
  writeFileSync(
    `${TEMP_MIGRATION_DIR}/config.yaml`,
    // * HBP uses config v1 so far
    // `version: 2\nendpoint: ${hasuraURL}\nadmin_secret: ${HASURA_GRAPHQL_ADMIN_SECRET}\nmetadata_directory: metadata\nenable_telemetry: false`,
    [
      `version: 1`,
      `endpoint: ${hasuraURL}`,
      `admin_secret: ${APPLICATION.HASURA_GRAPHQL_ADMIN_SECRET}`,
      `metadata_directory: metadata`,
      `enable_telemetry: false`
    ].join('\n'),
    { encoding: 'utf8' }
  )
  if (migrations && (await pathExists(migrations))) {
    // * Apply migrations
    console.log(`Applying migrations '${migrations}'...`)
    await copy(migrations, `${TEMP_MIGRATION_DIR}/migrations`)
    await hasuraConsole('migrate apply')
  }
  // * Metadata is used in config v2. HBP uses config v1 so far
  // if (metadata && (await pathExists(metadata))) {
  //   // * Apply metadata
  //   console.log(`Applying metadata '${metadata}'...`)
  //   await copy(metadata, `${TEMP_MIGRATION_DIR}/metadata`)
  //   await hasuraConsole('metadata apply')
  // } else if (migrations && (await pathExists(migrations))) {
  console.log('Reloading metadata...')
  await hasuraConsole('metadata reload')
  // }
  await remove(TEMP_MIGRATION_DIR)
}
