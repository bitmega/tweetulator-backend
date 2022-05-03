import { Environment } from './config/enviroment';
import api from './api';
// import { logger } from './helpers/logger'

Environment.setup();

import { Application } from 'express';
import { config } from './config/config';
import database from './database';

async function startDatabase() {
  await database.setup();
}

async function startApiServer() {
  const app: Application = await api.server();
  app.listen(config.SERVER_PORT, () => {
    console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
    // logger.info(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
  });
}

startDatabase();
startApiServer();

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});
