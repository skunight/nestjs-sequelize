"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_utils_1 = require("./database.utils");
const __1 = require("../");
exports.InjectRepository = (entity) => {
    return common_1.Inject(database_utils_1.getRepositoryToken(entity));
};
exports.InjectSequelize = () => {
    return common_1.Inject(__1.SEQUELIZE_PROVIDER);
};
