import { CONNECTION_PROVIDER, DATABASE_MODULE_OPTIONS } from '../database.constants'
import { Sequelize } from 'sequelize-typescript'
import { DatabaseModuleAsyncOptions, DatabaseModuleOptions } from '../database.interface';

export function createConnection() {
  return {
    provide: CONNECTION_PROVIDER,
    useFactory: (options: DatabaseModuleOptions): Sequelize => {
      if (!options) {
        options = {
          database: 'test',
          dialect: 'sqlite',
          username: 'root',
          password: '',
          storage: ':memory:',
        }
      }
      return new Sequelize(options)
    },
    inject: [DATABASE_MODULE_OPTIONS]
  }
}

export const createAsyncConnection = (options: DatabaseModuleAsyncOptions) => {
  return {
    provide: DATABASE_MODULE_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject,
  }
}
