import { Sequelize } from 'sequelize-typescript';
import { models } from '../models';

const URI = process.env.DATABASE_URL || '';

export const dbinit = () =>
  new Sequelize(
    URI,
    {
      models,
      dialectOptions: {
        ssl: true,
      },
    },
  );
