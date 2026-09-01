import {Request, Response, NextFunction} from 'express';
import { Contact } from '../models/Contact.js';
import {ContactInputSchema} from '@repo/validation/contact-validation';

export const contactMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsedResult = ContactInputSchema.safeParse(req.body);
        if (!parsedResult.success) {
            return res.status(400).json({
                message: 'Invalid input',
                errors: parsedResult.error.flatten().fieldErrors,
            })
        };

        const contact = new Contact(parsedResult.data);
        await contact.save();

        return res.status(201).json({
            message: 'Message was successfully sent.'
        });
    } catch(err) {
        return next(err);
    }
};