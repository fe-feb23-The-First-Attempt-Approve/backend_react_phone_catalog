import { Accessory } from '../models/Accessory';
import { Phone } from '../models/Phone';
import { Tablet } from '../models/Tablet';

export type Gadget = Phone | Tablet | Accessory;
