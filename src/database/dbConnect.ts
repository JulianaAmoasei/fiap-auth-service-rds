import dotenv from 'dotenv';
import { DataBaseConfig } from './config/db.config';
import UserModel from '../models/User';

dotenv.config();

const database = new DataBaseConfig({
  database: process.env.RDS_DB_DATABASE,
  host: process.env.RDS_DB_HOST,
  userName: process.env.RDS_DB_USER,
  password: process.env.RDS_DB_PASSWORD,
  port: 3306,
});

export default async function init() {
  await database.authenticate();
  await database.synchronizeModels([UserModel]);
}
