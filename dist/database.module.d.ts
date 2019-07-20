import { DynamicModule } from '@nestjs/common';
import { DatabaseModuleOptions, DatabaseModuleAsyncOptions } from './database.interface';
export declare class DatabaseModule {
    static forRoot(options: DatabaseModuleOptions): DynamicModule;
    static forRootAsync(options: DatabaseModuleAsyncOptions): DynamicModule;
    static forFeature(entities: any, sync?: boolean): DynamicModule;
}
