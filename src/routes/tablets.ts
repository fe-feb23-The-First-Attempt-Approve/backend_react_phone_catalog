import express from 'express';
import { Tablet } from '../models/Tablet';

export const router = express.Router();

router.get('/', async(req, res) => {
  const tablets = await Tablet.findAll();

  res.send(tablets);
});
