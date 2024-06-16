import 'reflect-metadata'

import { app } from './app'
const start = async () => {
  app.listen(3000, async () => {
    console.debug('Listening on Port ' + 3000)
  })
}

start()
  .then(() => {
   console.info('Successfully started server ...')
  })
  .catch((error) => {
    console.error('error starting server', error)
  })
