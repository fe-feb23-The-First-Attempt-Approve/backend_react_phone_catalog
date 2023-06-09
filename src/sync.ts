import fs from 'fs';
import path from 'path';
import { Phone } from './models/Phone';
import { dbinit } from './utils/dbinit';

const filePath = path.resolve('api', 'phones.json');

function read() {
  const data = fs.readFileSync(filePath, 'utf8');

  return JSON.parse(data);
}

const seedInitialData = async() => {
  await Phone.bulkCreate(read());
};

const sync = async() => {
  dbinit();

  await Phone.sync({ alter: true });

  await seedInitialData();
};

sync();
