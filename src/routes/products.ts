import express from 'express';
import { getAll, getByIds, getByQuery, getHot } from '../controllers/products';

export const router = express.Router();

router.get('/', getAll);
router.get('/ids', getByIds);
router.get('/hot', getHot);
router.get('/search', getByQuery);
