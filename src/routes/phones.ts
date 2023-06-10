import express from 'express';
import { Phone } from '../models/Phone';
import { ProductDetail } from '../models/ProductDetail';

export const router = express.Router();

router.get('/', async(req, res) => {
  const phones = await Phone.findAll();

  res.send(phones);
});

router.get('/:phoneId', async(req, res) => {
  const { phoneId } = req.params;
  const foundPhone = await ProductDetail.findByPk(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  res.send(foundPhone);
});
