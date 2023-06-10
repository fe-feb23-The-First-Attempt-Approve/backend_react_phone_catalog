import { Accessory } from '../models/Accessory';
import { Phone } from '../models/Phone';
import { ProductDetail } from '../models/ProductDetail';
import { Tablet } from '../models/Tablet';
import { readData } from './readData';

export const seedInitialData = async() => {
  await Phone.bulkCreate(readData('api', 'phones.json'));
  await ProductDetail.bulkCreate(readData('api', 'details.json'));
  await Tablet.bulkCreate([]);
  await Accessory.bulkCreate([]);
};
