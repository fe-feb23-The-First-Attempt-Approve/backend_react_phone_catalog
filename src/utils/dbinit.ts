import { Sequelize } from 'sequelize-typescript';
import { models } from '../models';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const URI = process.env.DATABASE_URL || '';

export const dbinit = () =>
  new Sequelize(URI, {
    models,
    dialectOptions: {
      ssl: true,
    },
  });
