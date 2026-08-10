'use client'

import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { restoreSession } from './features/auth/authSlice';

export default function AuthInitializer({children}: {children: React.ReactNode}) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(restoreSession());
    }, [dispatch]);

    return <>{children}</>
};
