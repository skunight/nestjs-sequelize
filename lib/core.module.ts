import { Module, DynamicModule, Global } from '@nestjs/common'
import { DatabaseModuleOptions, DatabaseModuleAsyncOptions } from './database.interface'
import { DatabaseModule } from '.'
import { DATABASE_MODULE_OPTIONS } from './database.constants'
import { createConnection, createAsyncConnection } from './providers'

@Global()
@Module({})
export class DatabaseCoreModule {
  static forRoot(options: DatabaseModuleOptions): DynamicModule {
    const connectionProvider = createConnection()
    return {
      module: DatabaseCoreModule,
      providers: [
        { provide: DATABASE_MODULE_OPTIONS, useValue: options },
        createConnection(),
      ],
      exports: [connectionProvider],
    }
  }

  static forRootAsync(options: DatabaseModuleAsyncOptions): DynamicModule {
    const connectionProvider = createConnection()
    return {
      module: DatabaseCoreModule,
      imports: options.imports,
      providers: [
        createAsyncConnection(options),
        connectionProvider,
      ],
      exports: [connectionProvider],
    }
  }
}
