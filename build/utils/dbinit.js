"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbinit = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const URI = process.env.DATABASE_URL || "";
const dbinit = () =>
  new sequelize_typescript_1.Sequelize(URI, {
    models: models_1.models,
    dialectOptions: {
      ssl: true,
    },
  });
exports.dbinit = dbinit;
