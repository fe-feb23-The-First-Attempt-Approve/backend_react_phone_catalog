/* eslint-disable max-len */
import { Sequelize } from 'sequelize-typescript';

const URI
  = 'postgresql://PashaMalyshkin:uZTy9nvE3YjH@ep-throbbing-sunset-123571.eu-central-1.aws.neon.tech/neondb';

export const dbinit = () =>
  new Sequelize(URI, {
    dialectOptions: {
      ssl: true,
    },
  });
