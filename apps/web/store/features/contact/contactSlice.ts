import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type { ContactFormValues } from '@repo/validation/contact-validation';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const sendContactMessage = createAsyncThunk('contact/message', async (data: ContactFormValues, {rejectWithValue}) => {
    try {
        const res = await fetch(`${API_URL}/contact/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        
        if (!res.ok) {
            return rejectWithValue(result.message || 'Sending message - Failed')
        };

        return result;
    } catch(err) {
        return rejectWithValue('Network error');
    };
});

export interface ContactState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ContactState = {
    status: 'idle',
    error: null,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState, //Do I need it?
    reducers: {
        resetContactStatus: (state) => {
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendContactMessage.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(sendContactMessage.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(sendContactMessage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    }
});

export const { resetContactStatus } = contactSlice.actions;
export default contactSlice.reducer;