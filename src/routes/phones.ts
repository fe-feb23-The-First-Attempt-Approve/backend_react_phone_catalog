import express from 'express';
import { getOne, getRange } from '../controllers/phones';

export const router = express.Router();

// router.get('/', getAll);
router.get('/', getRange);
router.get('/:phoneId', getOne);
