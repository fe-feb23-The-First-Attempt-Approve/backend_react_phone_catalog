import express from 'express';
import { getAll, getByIds, getHot } from '../controllers/products';

export const router = express.Router();

router.get('/', getAll);
router.get('/ids', getByIds);
router.get('/hot', getHot);
