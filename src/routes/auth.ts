import express from 'express';
import { activate, login, register } from '../controllers/auth';
import { catchError } from '../utils/catchError';
import 'dotenv/config';

export const router = express.Router();

router.post('/registration', catchError(register));
router.get(`https://the-first-attempt-approve.onrender.com/activation/:activationToken`, catchError(activate));
router.post('/login', catchError(login));
