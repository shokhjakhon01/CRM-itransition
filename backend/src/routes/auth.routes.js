import { Router } from 'express';

import authController from '../controller/auth.controller.js';
import validate from '../middlewares/validate.js';

const router = Router();

router.post('/register', validate, authController.signUp);

router.post('/login', validate, authController.login);

export default router;
