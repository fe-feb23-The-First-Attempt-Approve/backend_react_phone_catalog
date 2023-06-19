// import { PhoneDetail } from './models/PhoneDetail';
// import { TabletDetail } from './models/TabletDetail';
// import { AccessoryDetails } from './models/AccessoryDetail';
// import { Product } from './models/Product';
import { User } from './models/User';

import { dbinit } from './utils/dbinit';
import { seedInitialData } from './utils/seedInitialData';

const sync = async() => {
  dbinit();
  // { force: true }
  await User.sync({ force: true });
  // await PhoneDetail.sync();
  // await TabletDetail.sync();
  // await AccessoryDetails.sync();
  // await Product.sync();
  await seedInitialData();
};

sync();
