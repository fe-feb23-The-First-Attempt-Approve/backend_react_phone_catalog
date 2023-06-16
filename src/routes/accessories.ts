import express from 'express';
import { getRange, getMinMaxPrices, getOne } from '../controllers/accessories';

export const router = express.Router();

router.get('/', getRange);
router.get('/prices', getMinMaxPrices);
router.get('/:itemId', getOne);
