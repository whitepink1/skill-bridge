'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAppDispatch } from '@repo/web/store/hooks';
import { setCredentials } from '@repo/web/store/features/auth/authSlice';

const AuthCallbackPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = searchParams.get('token');

        if(!token) {
            router.push('/auth/sign-in?error=oauth_failed');
            return;
        };

        const finishLogin = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                cache: 'no-store',
            });

            if(!res.ok) {
                router.push('/auth/sign-in?error=oauth_failed')
            };
            const result = await res.json();
            console.log(result)

            localStorage.setItem('token', token);
            dispatch(setCredentials({user: result.user, token}));

            router.push('/');
        };
        
        finishLogin();
    }, [searchParams, dispatch, router]);

    return (
        <div>Signing you in...</div>
    )
}

export default AuthCallbackPage;