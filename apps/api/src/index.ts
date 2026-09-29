import './config/env';
import type { Request, Response, NextFunction } from 'express';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';
import userRoutes from './routes/user';
import contactRoutes from './routes/contact';
import './config/passport';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());

//routes
app.use('/api/auth', userRoutes);
app.use('/contact', contactRoutes);

app.use((error: any, req: Request, res: Response, _next: NextFunction) => {
    console.error(error);

    const status = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    const data = error.data;

    res.status(status).json({message, data});
});

const start = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('MongoDB connected');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch(error) {
        console.error('Launch error: ', error);
    }
};  

start();