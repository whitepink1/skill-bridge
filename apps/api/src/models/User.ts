import mongoose, {Schema, model} from 'mongoose';

const UserMongooseSchema = new Schema({
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

export const User = mongoose.models.User || model('User', UserMongooseSchema);