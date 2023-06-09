import { Sequelize } from 'sequelize-typescript';
import { models } from '../models';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line max-len
const URI = 'postgresql://PashaMalyshkin:uZTy9nvE3YjH@ep-throbbing-sunset-123571.eu-central-1.aws.neon.tech/neondb';

export const dbinit = () =>
  new Sequelize(URI, {
    models,
    dialectOptions: {
      ssl: true,
    },
  });
