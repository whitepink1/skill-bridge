import {z} from 'zod';

export const SignUpInputSchema = z.object({
    email: z.string().trim().toLowerCase().email(),
    password: z.string().min(8),
    fullName: z.string().min(2),
});

export const UserSchema = z.object({
    _id: z.string().optional(),
    email: z.string().trim().email(),
    password: z.string().optional(),
    fullName: z.string().min(8),
    image: z.string().url().optional(),
    provider: z.enum(['credentials', 'google']).default('credentials'),
    emailVerified: z.date().optional(),   //for Auth.js
    subscription: z.object({
        subtype: z.enum(['free', 'premium']),
        startDate: z.date(),
        endDate: z.date(),
    }).optional(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
});

export type User = z.infer<typeof UserSchema>;
export type SignUpInput = z.infer<typeof SignUpInputSchema>;