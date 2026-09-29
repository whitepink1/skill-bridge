import express from 'express';
import * as userController from '../controllers/user';
import { requireAuth } from '../middleware/auth';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/sign-up', userController.signUpUser);
router.post('/sign-in', userController.signInUser);
router.get('/me', requireAuth, userController.getCurrentUser);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get('/google/callback', passport.authenticate('google', {session: false, failureRedirect: `${process.env.FRONTEND_URL}/auth/sign-in?error=oauth_failed`}),
    (req, res) => {
        const user = req.user as any;
        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET as string,
            {expiresIn: '2h'}
        );
        res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`)
    }
);

export default router;

