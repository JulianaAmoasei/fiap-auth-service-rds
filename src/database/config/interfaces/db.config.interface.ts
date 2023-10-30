import { Sequelize } from "sequelize";

export interface DataBaseConfigInterface {
  database: string | any;
  host: string | any;
  userName: string | any;
  password: string | any;
  port: number | any;

  getInstance: () => Sequelize;
  authenticate: () => Promise<void>;
}

export type DataBaseConfigConstructorInterface = Pick<
  DataBaseConfigInterface,
  "database" | "host" | "userName" | "password" | "port"
>;
