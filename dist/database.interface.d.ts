import { ModuleMetadata } from '@nestjs/common/interfaces';
import { ISequelizeConfig } from 'sequelize-typescript/lib/interfaces/ISequelizeConfig';
export interface DatabaseModuleOptions extends ISequelizeConfig {
}
export interface DatabaseModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory?: (...args: any[]) => ISequelizeConfig | Promise<ISequelizeConfig>;
    inject?: any[];
}
