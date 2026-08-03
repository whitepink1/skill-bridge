import React from 'react';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async () => {
        console.log('Sign in');
    };

    return (
        <div>
            <div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue='' {...register('')} />
                <input defaultValue='' {...register('')} />
                <input defaultValue='' {...register('')} />
                <input type='check' />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignIn;