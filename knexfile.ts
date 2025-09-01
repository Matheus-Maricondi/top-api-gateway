import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "db-top-gateway",
      port: 5432,
      user: "top-api-gateway",
      password: "123456",
      database: "top_api_gateway",
    },
    migrations: {
      directory: "./database/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./database/seeds",
      extension: "ts",
    },
  },
};

export default config;
