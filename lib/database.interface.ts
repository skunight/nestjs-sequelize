import { ModuleMetadata } from '@nestjs/common/interfaces'
import { ISequelizeConfig } from 'sequelize-typescript/lib/interfaces/ISequelizeConfig'

// tslint:disable-next-line:no-empty-interface
export interface DatabaseModuleOptions extends ISequelizeConfig {
}

export interface DatabaseModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) =>
    | ISequelizeConfig
    | Promise<ISequelizeConfig>
  inject?: any[]
}
