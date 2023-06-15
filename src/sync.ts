// import { Accessory } from './models/Accessory';
// import { Phone } from './models/Phone';
// import { PhoneDetail } from './models/PhoneDetail';
// import { TabletDetail } from './models/TabletDetail';
// import { Tablet } from './models/Tablet';
// import { AccessoryDetails } from './models/AccessoryDetail';
import { dbinit } from './utils/dbinit';
import { seedInitialData } from './utils/seedInitialData';

const sync = async() => {
  dbinit();

  // { force: true }

  // await Phone.sync();
  // await Tablet.sync();
  // await Accessory.sync();
  // await PhoneDetail.sync();
  // await TabletDetail.sync();
  // await AccessoryDetails.sync();

  await seedInitialData();
};

sync();
