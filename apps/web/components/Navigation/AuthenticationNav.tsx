import React from 'react'
import Button from '../Shared/Button'
import { useAppDispatch, useAppSelector } from '@repo/web/store/hooks';
import { logout } from '@repo/web/store/features/auth/authSlice';

const AuthenticationNav = () => {
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    console.log('User: ' + user)

    return user ?
        (<div>
            <Button type='button' onHandler={() => dispatch(logout())} style='orange'>Logout</Button>
        </div>)
        :
        (<div className='flex items-center gap-2 ml-auto'>
            <Button type='link' href='/auth/sign-up' style='transparent'>Sign Up</Button>
            <Button type='link' href='/auth/sign-in' style='orange'>Login</Button>
        </div>)
}

export default AuthenticationNav;