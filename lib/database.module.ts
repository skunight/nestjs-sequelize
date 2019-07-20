import { Module, DynamicModule } from '@nestjs/common'
import { DatabaseCoreModule } from './core.module'
import { DatabaseModuleOptions, DatabaseModuleAsyncOptions } from './database.interface'
import { createDatebaseProviders, createModelProviders } from './providers'

@Module({})
export class DatabaseModule {
  static forRoot(options: DatabaseModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [DatabaseCoreModule.forRoot(options)],
    }
  }

  static forRootAsync(options: DatabaseModuleAsyncOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [DatabaseCoreModule.forRootAsync(options)],
    }
  }

  static forFeature(entities: any, sync?: boolean): DynamicModule {
    const databaseProvider = createDatebaseProviders(entities, sync)
    const modelProviders = createModelProviders(entities)
    return {
      module: DatabaseModule,
      providers: [
        databaseProvider,
        ...modelProviders,
      ],
      exports: [databaseProvider, ...modelProviders],
    }
  }
}
