import express from 'express';
import { getRange, getMinMaxPrices, getOne } from '../controllers/tablets';

export const router = express.Router();

router.get('/', getRange);
router.get('/:itemId', getOne);
router.get('/prices', getMinMaxPrices);
