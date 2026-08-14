import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type { SignUpFormValues } from '@repo/validation/user-validation';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface User {
    id: string;
    email: string;
    fullName: string;
    image?: string;
};

export interface AuthState {
    user: User | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: AuthState = {
    user: null,
    token: null,
    status: 'idle',
    error: null
};

export const signUp = createAsyncThunk('auth/signUp', async (data: SignUpFormValues, {rejectWithValue}) => {
    try {
        const res = await fetch(`${API_URL}/api/auth/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        
        if (!res.ok) {
            return rejectWithValue(result.message || 'Sign Up - Failed')
        };

        return result;
    } catch(err) {
        return rejectWithValue('Network error');
    };
});

export const signIn = createAsyncThunk('auth/signIn', async (data: {email: string; password: string}, {rejectWithValue}) => {
    try {
        const res = await fetch(`${API_URL}/api/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (!res.ok) {
            return rejectWithValue(result.message || 'Sign In - Failed');
        }

        return result;
    } catch(err) {
        return rejectWithValue('Network error');
    }
});

export const logout = createAsyncThunk('auth/logout', async() => {
    localStorage.removeItem('token');
});

export const restoreSession = createAsyncThunk('auth/restoreSession', async (_, {rejectWithValue}) => {
    const token = localStorage.getItem('token');
    if (!token) return rejectWithValue('No token');

    const res = await fetch(`${API_URL}/api/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        localStorage.removeItem('token');
        return rejectWithValue('Invalid session')
    };
    const user = await res.json();
    return {user, token};
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(signIn.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.status = 'idle';
                state.error = null;
            });
    },
});

export const {setCredentials} = authSlice.actions;
export default authSlice.reducer;
