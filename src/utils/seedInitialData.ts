import { readData } from './readData';
import { Phone } from '../models/Phone';

export const seedInitialData = async() => {
  await Phone.bulkCreate(readData());
};
