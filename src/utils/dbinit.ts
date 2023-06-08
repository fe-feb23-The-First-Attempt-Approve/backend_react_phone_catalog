/* eslint-disable max-len */
import { Sequelize } from 'sequelize-typescript';

const URI = process.env.DATABASE_URL;

export const dbinit = () =>
  new Sequelize(URI, {
    dialectOptions: {
      ssl: true,
    },
  });
