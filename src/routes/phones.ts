import express from 'express';
import { getAll, getOne } from '../controllers/phones';

export const router = express.Router();

router.get('/', getAll);
router.get('/:phoneId', getOne);
