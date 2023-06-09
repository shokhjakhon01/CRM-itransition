import { Router } from 'express';

import userController from '../controller/user.controller.js';
import checkToken from '../middlewares/check-token.js';

const router = Router();

router.get('/', checkToken, userController.getUsers);

router.post('/user/:id' ,  userController.postStatus)

export default router;
