"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_constants_1 = require("../database.constants");
const database_utils_1 = require("../commons/database.utils");
exports.createDatebaseProviders = (entities, sync = false) => {
    const provider = {
        provide: database_constants_1.SEQUELIZE_PROVIDER,
        useFactory: (sequelize) => __awaiter(this, void 0, void 0, function* () {
            sequelize.addModels(entities);
            if (sync) {
                sequelize.sync();
            }
            return sequelize;
        }),
        inject: [database_constants_1.CONNECTION_PROVIDER],
    };
    return provider;
};
exports.createModelProviders = (entities) => {
    const providers = [];
    for (const e of entities) {
        providers.push({
            provide: database_utils_1.getRepositoryToken(e),
            useValue: e,
        });
    }
    return providers;
};
