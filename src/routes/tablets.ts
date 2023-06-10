import express from 'express';
import { getAll } from '../controllers/tablets';

export const router = express.Router();

router.get('/', getAll);
