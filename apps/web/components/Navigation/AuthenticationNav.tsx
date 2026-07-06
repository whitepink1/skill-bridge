import React from 'react'
import Button from '../Shared/Button'

const AuthenticationNav = () => {
    return (
        <div className='flex items-center gap-2 ml-auto'>
            <Button type='link' href='/' style='transparent'>Sign Up</Button>
            <Button type='link' href='/' style='orange'>Login</Button>
        </div>
    )
}

export default AuthenticationNav