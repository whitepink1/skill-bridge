import {Schema, model, models} from 'mongoose';

const UserMongooseSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    fullName: {
        type: String,
    },
    image: {
        type: String,
    },
    provider: {
        type: String,
    },
    emailVerified: {
        type: String,
    },
    subscription: {
        subtype: {
            type: String,
        },
        startDate: {
            type: String,
        },
        endDate: {
            type: String,
        }
    }
}, {timestamps: true});

export const User = models.User || model('User', UserMongooseSchema);