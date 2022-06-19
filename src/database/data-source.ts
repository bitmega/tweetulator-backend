import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Environment } from '../config/enviroment'

Environment.setup();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "test",
  password: process.env.DB_PASSWORD || "test",
  database: process.env.DB_DATABASE || "test",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
})
