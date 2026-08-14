import {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import {SignUpInputSchema} from '@repo/validation/user-validation';

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
            { expiresIn: '7d'}
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