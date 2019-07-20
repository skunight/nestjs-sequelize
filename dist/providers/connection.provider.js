"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_constants_1 = require("../database.constants");
const sequelize_typescript_1 = require("sequelize-typescript");
function createConnection() {
    return {
        provide: database_constants_1.CONNECTION_PROVIDER,
        useFactory: (options) => {
            if (!options) {
                options = {
                    database: 'test',
                    dialect: 'sqlite',
                    username: 'root',
                    password: '',
                    storage: ':memory:',
                };
            }
            return new sequelize_typescript_1.Sequelize(options);
        },
        inject: [database_constants_1.DATABASE_MODULE_OPTIONS]
    };
}
exports.createConnection = createConnection;
exports.createAsyncConnection = (options) => {
    return {
        provide: database_constants_1.DATABASE_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject,
    };
};
