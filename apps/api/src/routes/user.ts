import express from 'express';
import * as userController from '../controllers/user';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.post('/sign-up', userController.signUpUser);
router.post('/sign-in', userController.signInUser);
router.get('/me', requireAuth, userController.getCurrentUser);

export default router;

