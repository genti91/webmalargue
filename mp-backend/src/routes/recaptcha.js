import express from 'express';
import { validateRecaptcha } from '../controllers/recaptchaController.js';

const router = express.Router();

router.post('/validate', validateRecaptcha);

export default router;