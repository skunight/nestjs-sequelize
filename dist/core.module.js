"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseCoreModule_1;
const common_1 = require("@nestjs/common");
const database_constants_1 = require("./database.constants");
const providers_1 = require("./providers");
let DatabaseCoreModule = DatabaseCoreModule_1 = class DatabaseCoreModule {
    static forRoot(options) {
        const connectionProvider = providers_1.createConnection();
        return {
            module: DatabaseCoreModule_1,
            providers: [
                { provide: database_constants_1.DATABASE_MODULE_OPTIONS, useValue: options },
                providers_1.createConnection(),
            ],
            exports: [connectionProvider],
        };
    }
    static forRootAsync(options) {
        const connectionProvider = providers_1.createConnection();
        return {
            module: DatabaseCoreModule_1,
            imports: options.imports,
            providers: [
                providers_1.createAsyncConnection(options),
                connectionProvider,
            ],
            exports: [connectionProvider],
        };
    }
};
DatabaseCoreModule = DatabaseCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], DatabaseCoreModule);
exports.DatabaseCoreModule = DatabaseCoreModule;
