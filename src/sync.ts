import { Phone } from './models/Phone';
import { dbinit } from './utils/dbinit';
import { seedInitialData } from './utils/seedInitialData';

const sync = async() => {
  dbinit();

  await Phone.sync();

  await seedInitialData();
};

sync();
