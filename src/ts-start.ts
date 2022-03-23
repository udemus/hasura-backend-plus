import { APPLICATION } from '@shared/config'
import axios from 'axios'

import { app } from './server'
import { applyMigrations } from './shared/migrations'
import { applyMetadata } from './shared/metadata'

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const isHasuraReady = async () => {
  try {
    await axios.get(`${APPLICATION.HASURA_ENDPOINT.replace('/v1/graphql', '/healthz')}`)
  } catch (err) {
    console.log(`Couldn't find an hasura instance running on ${APPLICATION.HASURA_ENDPOINT}`)
    console.log('wait 10 seconds')
    await delay(10000)
    console.log('exit 1')
    process.exit(1)
    console.log('exit 1 completed')
  }
}

const start = async (): Promise<void> => {
  await isHasuraReady()
  await applyMigrations()
  await applyMetadata()

  app.listen(APPLICATION.PORT, APPLICATION.HOST, () => {
    if (APPLICATION.HOST) {
      console.info(`Running on http://${APPLICATION.HOST}:${APPLICATION.PORT}`)
    } else {
      console.info(`Running on port ${APPLICATION.PORT}`)
    }
  })
}

start()
