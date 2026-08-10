import React from 'react'
import Button from '../Shared/Button'

const AuthenticationNav = () => {
    //   const { status } = useAppSelector((state) => state.auth);

    //   if (status === 'idle' || status === 'loading') {
    //     return <div>Loading...</div>;
    //   }
    return (
        <div className='flex items-center gap-2 ml-auto'>
            <Button type='link' href='/auth/sign-up' style='transparent'>Sign Up</Button>
            <Button type='link' href='/auth/sign-in' style='orange'>Login</Button>
        </div>
    )
}

export default AuthenticationNav