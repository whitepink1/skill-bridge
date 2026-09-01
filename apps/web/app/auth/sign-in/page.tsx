'use client'
import React, { useState } from 'react';
import Button from '@repo/web/components/Shared/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { SignInFormValues, SignInInputSchema } from '@repo/validation/user-validation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from '@repo/web/store/features/auth/authSlice';

const SignIn = () => {
    const dispatch = useAppDispatch();
    const {status, error} = useAppSelector((state) => state.auth);
    const router = useRouter();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm<SignInFormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        resolver: zodResolver(SignInInputSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        }
    });

    const onSubmit = async (data: SignInFormValues) => {
      const result = await dispatch(signIn(data));
      if (signIn.fulfilled.match(result)) {
        router.push('/');
      }else if (signIn.rejected.match(result)) {
        console.error('Sign-in failed', result.payload)
      };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-5 lg:gap-6'>
          <div id='email' className='w-full flex flex-col items-start gap-2.5 2xl:gap-3.5'>
            <label className='small-p-md text-grey-15'>Email</label>
            <input 
              {...register('email')}
              defaultValue=''
              placeholder='Enter your Email'
              className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
            {errors.email && <p className='small-p-error'>{errors.email.message}</p>}
          </div>
          <div id='password' className='w-full flex flex-col items-start gap-2.5 2xl:gap-3.5'>
            <label className='small-p-md text-grey-15'>Password</label>
            <div className='w-full relative'>
              <input 
                {...register('password')}
                defaultValue=''
                placeholder='Enter your Password'
                type={`${isVisible ? 'text' : 'password'}`}
                className='w-full small-p p-5 pr-12 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
              <button type='button' className='w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3' onClick={() => setIsVisible(!isVisible)}>
                <Image 
                  src={isVisible ? '/icon/eye-closed.svg' : '/icon/eye-open.svg'}
                  width={20}
                  height={20}
                  alt='Eye icon'
                  className='lg:w-6 lg:h-6'/>
              </button>
            </div>
            {errors.password && <p className='small-p-error'>{errors.password.message}</p>}
          </div>
          <div className='w-full flex flex-col gap-2'>
            <div className='flex justify-start items-center gap-2 ml-0'>
              <div className="relative flex items-center justify-center">
                <input 
                  type='checkbox'
                  {...register('rememberMe')}
                  className='w-6 h-6 shadow-lg peer appearance-none bg-white-97 border border-white-95 rounded-sm checked:bg-grey-40 checked:border-grey-70'/>
                <svg 
                  className="absolute h-3.5 w-3.5 text-white pointer-events-none hidden peer-checked:block" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className='small-p text-grey-40 ml-2'>Remember me</p>
              </div>
            </div>
          </div>
          <Button status={status === 'loading'} type='submit' style='orange' addClass='w-full'>{status === 'loading' ? 'Signing in...' : 'Login'}</Button>
          {error && <p className='small-p-error'>{error}</p>}
        </form>
    )
};

export default SignIn;