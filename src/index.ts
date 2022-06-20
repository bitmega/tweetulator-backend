import { Environment } from './config/enviroment';
import api from './server';

Environment.setup();

import { Application } from 'express';
import { config } from './config/config';
import database from './database';

async function startApiServer(): Promise<Application> {
  await database.setup();
  const app: Application = await api.server();
  app.listen(config.SERVER_PORT, () => {
    console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
  });

  return app;
}

export default startApiServer();
