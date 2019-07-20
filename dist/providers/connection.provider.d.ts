import { Sequelize } from 'sequelize-typescript';
import { DatabaseModuleAsyncOptions, DatabaseModuleOptions } from '../database.interface';
export declare function createConnection(): {
    provide: string;
    useFactory: (options: DatabaseModuleOptions) => Sequelize;
    inject: string[];
};
export declare const createAsyncConnection: (options: DatabaseModuleAsyncOptions) => {
    provide: string;
    useFactory: (...args: any[]) => import("../../node_modules/sequelize-typescript/lib/interfaces/ISequelizeConfig").ISequelizeConfig | Promise<import("../../node_modules/sequelize-typescript/lib/interfaces/ISequelizeConfig").ISequelizeConfig>;
    inject: any[];
};
