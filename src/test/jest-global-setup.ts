require('tsconfig-paths/register')
import migrate from '../migrate'

// import * as compose from 'docker-compose';
// import path from 'path';

// import onDeath = require('death')

export default async (): Promise<void> => {
  // const cwd = path.join(__dirname, '..', '..');

  // await compose.buildAll({
  //   cwd,
  //   config: ['docker-compose.yaml', 'docker-compose.test.yaml'],
  //   log: true,
  //   composeOptions: ['-p "hbp_test"']
  // });

  // await compose.upAll({
  //   cwd,
  //   config: ['docker-compose.yaml', 'docker-compose.test.yaml'],
  //   log: true,
  //   composeOptions: ['-p "hbp_test"']
  // });

  // onDeath(async () => {
  //   try {
  //     await compose.down({
  //       cwd,
  //       config: ['docker-compose.yaml', 'docker-compose.test.yaml'],
  //       log: true,
  //       composeOptions: ['-p "hbp_test"'],
  //       commandOptions: ['--remove-orphans']
  //     });
  //   } catch(err) {
  //     console.log('Error on docker-compose down', err?.message)
  //   }
  //   process.exit(0)
  // })

  await migrate()
  await migrate({ migrations: './test-mocks/migrations' })
}
