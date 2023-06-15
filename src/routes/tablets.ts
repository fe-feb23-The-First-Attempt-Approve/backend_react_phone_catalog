import express from 'express';
import {
  getOne, getRange, getMinMaxPrices, getHot,
} from '../controllers/tablets';

export const router = express.Router();

router.get('/', getRange);
router.get('/prices', getMinMaxPrices);
router.get('/hot', getHot);
router.get('/:tabletId', getOne);
