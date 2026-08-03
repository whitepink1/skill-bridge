'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Shared/Button';

const SignUp = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = async () => {
    console.log('Sign in');
  };
  return (
    <div>
      <div>

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-7.5 bg-white p-7.5 rounded-[10px] max-w-135 mx-auto lg:gap-10 2xl:gap-12.5 2xl:max-w-165'>
        <div className='flex flex-col items-center gap-2 2xl:gap-3'>
          <h1 className='h1-title'>Sign Up</h1>
          <p className='small-p text-grey-30 text-center'>Create an account to unlock exclusive features.</p>
        </div>
        <div className='flex flex-col items-center gap-5 lg:gap-6'>
          <div id='name' className='w-full flex flex-col items-start gap-2.5 2xl:gap-3.5'>
            <label className='small-p-md text-grey-15'>Full Name</label>
            <input 
              {...register('fullName')}
              defaultValue=''
              placeholder='Enter your Name'
              className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>
          <div id='email' className='w-full flex flex-col items-start gap-2.5 2xl:gap-3.5'>
            <label className='small-p-md text-grey-15'>Email</label>
            <input 
              {...register('email')}
              defaultValue=''
              placeholder='Enter your Email'
              className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
            {errors.fullName && <p>{errors.fullName.message}</p>}
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
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>
          <div className='flex justify-start items-center gap-2'>
            <input type='check' className='w-6 h-6'/>
            <p>I agree with <span>Terms of Use</span> and <span>Privacy Policy</span></p>
          </div>
          <Button type='submit' style='orange' addClass='w-full'>Sign Up</Button>
        </div>
        
        
      </form>
    </div>
  )
}

export default SignUp