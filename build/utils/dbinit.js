"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbinit = void 0;
/* eslint-disable max-len */
const sequelize_typescript_1 = require("sequelize-typescript");
const URI = 'postgresql://PashaMalyshkin:uZTy9nvE3YjH@ep-throbbing-sunset-123571.eu-central-1.aws.neon.tech/neondb';
const dbinit = () => new sequelize_typescript_1.Sequelize(URI, {
    dialectOptions: {
        ssl: true,
    },
});
exports.dbinit = dbinit;
