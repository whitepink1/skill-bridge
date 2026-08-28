import {z} from 'zod';

export const ContactInputSchema = z.object({
    firstName: z.string().trim().min(3, 'First name is required.'),
    lastName: z.string().trim().min(3, 'First name is required.'),
    email: z.string().trim().toLowerCase().email('Invalid email address.'),
    phone: z.string().trim().min(6, 'Phone number is required.'),
    subject: z.string().min(15, 'Subject is required.'),
    message: z.string().min(40, 'Message is required.')
});

export type ContactFormValues = z.input<typeof ContactInputSchema>;