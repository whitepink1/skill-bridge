import {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import {SignInInputSchema, SignUpInputSchema} from '@repo/validation/user-validation';

export interface AuthRequest extends Request {
    userId?: string;
}

export const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsedResult = SignUpInputSchema.safeParse(req.body);
        if (!parsedResult.success) {
            return res.status(400).json({
                message: 'Invalid input',
                errors: parsedResult.error.flatten().fieldErrors,
            })
        }

        const {email, password, fullName} = parsedResult.data;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: 'User with this email already exists.'
            })
        };

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({email, password: hashedPassword, fullName});
        await user.save();

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET as string,
            { expiresIn: '2h'}
        );

        return res.status(201).json({
            user: {
                id: user._id,
                email: user.email,
                fullName: user.fullName,
                image: user.image,
            },
            token,
        });
    } catch(err) {
        return next(err);
    }
};

export const signInUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsedResult = SignInInputSchema.safeParse(req.body);
        if (!parsedResult.success) {
            return res.status(400).json({
                message: 'Invalid input',
                errors: parsedResult.error.flatten().fieldErrors,
            })
        }

        const {email, password} = parsedResult.data;
        const existingUser = await User.findOne({ email }).select('+password');;

        if (!existingUser || !existingUser.password) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        };

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({message: 'Invalid email or password'});
        };

        const token = jwt.sign(
            {userId: existingUser._id},
            process.env.JWT_SECRET as string,
            { expiresIn: '2h'}
        );

        return res.status(200).json({
            user: {
                id: existingUser._id,
                email: existingUser.email,
                fullName: existingUser.fullName,
                image: existingUser.image,
            },
            token,
        });
    } catch(err) {
        return next(err);
    }
};

export const getCurrentUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.userId);
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }

        return res.status(200).json({
            user: {
                id: user._id,
                email: user.email,
                fullName: user.fullName,
                image: user.image,
            }
        });
    } catch(err) {
        return next(err);
    }
};