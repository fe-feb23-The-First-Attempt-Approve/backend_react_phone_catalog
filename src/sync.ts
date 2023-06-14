// import { Accessory } from './models/Accessory';
// import { Phone } from './models/Phone';
// import { ProductDetail } from './models/ProductDetail';
import { Tablet } from './models/Tablet';
import { dbinit } from './utils/dbinit';
import { seedInitialData } from './utils/seedInitialData';

const sync = async() => {
  dbinit();

  // await Phone.sync();
  await Tablet.sync({ force: true });
  // await Accessory.sync();
  // await ProductDetail.sync();

  await seedInitialData();
};

sync();
