import express from 'express';
import { activate, login, register } from '../controllers/auth';
import { catchError } from '../utils/catchError';

export const router = express.Router();

router.post('/registration', catchError(register));
router.get(`/activation/:activationToken`, catchError(activate));
router.post('/login', catchError(login));
