import express from 'express';
import * as userController from '../controllers/user';
//import Auth
const router = express.Router();

router.post('/sign-up', userController.signUpUser);
router.post('/sign-in', userController.signInUser);

export default router;

