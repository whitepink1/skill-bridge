import {z} from 'zod';

export const SignUpInputSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    fullName: z.string().min(2, 'Full name is required'),
    agreeToTerms: z.literal(true, {message: 'You must agree to the terms',}),
});

export const SignInInputSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    agreeToTerms: z.literal(true, {message: 'You must agree to the terms',}),
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
export type SignUpFormValues = z.infer<typeof SignUpInputSchema>;
export type SignInFormValues = z.infer<typeof SignInInputSchema>;