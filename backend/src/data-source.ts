import dotenv from 'dotenv'
import { DataSource } from 'typeorm'

const dataSourceOptions: any = {
    "type": "mysql",
    "host": "db",
    "port": 3306,
    "username": "root",
    "password": "password",
    "database": "bookdb",
    "synchronize": true,
    "logging": true,
    "entities": ["src/entities/**/*.ts"],
    "migrations": ["src/migration/**/*.ts"],
    "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/migration"
    }
}

export const appDataSource = new DataSource(dataSourceOptions)
