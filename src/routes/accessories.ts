import express from 'express';
import { Accessory } from '../models/Accessory';

export const router = express.Router();

router.get('/', async(req, res) => {
  const accessories = await Accessory.findAll();

  res.send(accessories);
});
