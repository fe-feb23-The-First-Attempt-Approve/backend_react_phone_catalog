import express from 'express';
import { getAll } from '../controllers/accessories';

export const router = express.Router();

router.get('/', getAll);
