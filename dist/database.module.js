"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseModule_1;
const common_1 = require("@nestjs/common");
const core_module_1 = require("./core.module");
const providers_1 = require("./providers");
let DatabaseModule = DatabaseModule_1 = class DatabaseModule {
    static forRoot(options) {
        return {
            module: DatabaseModule_1,
            imports: [core_module_1.DatabaseCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: DatabaseModule_1,
            imports: [core_module_1.DatabaseCoreModule.forRootAsync(options)],
        };
    }
    static forFeature(entities, sync) {
        const databaseProvider = providers_1.createDatebaseProviders(entities, sync);
        const modelProviders = providers_1.createModelProviders(entities);
        return {
            module: DatabaseModule_1,
            providers: [
                databaseProvider,
                ...modelProviders,
            ],
            exports: [databaseProvider, ...modelProviders],
        };
    }
};
DatabaseModule = DatabaseModule_1 = __decorate([
    common_1.Module({})
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
