"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbinit = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line max-len
const URI = 'postgresql://PashaMalyshkin:uZTy9nvE3YjH@ep-throbbing-sunset-123571.eu-central-1.aws.neon.tech/neondb';
const dbinit = () => new sequelize_typescript_1.Sequelize(URI, {
    models: models_1.models,
    dialectOptions: {
        ssl: true,
    },
});
exports.dbinit = dbinit;
