import { Sequelize } from 'sequelize-typescript';
export declare const createDatebaseProviders: (entities: any, sync?: boolean) => {
    provide: string;
    useFactory: (sequelize: Sequelize) => Promise<Sequelize>;
    inject: string[];
};
export declare const createModelProviders: (entities: any) => any[];
