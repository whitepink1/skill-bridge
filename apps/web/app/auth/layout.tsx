'use client';
import Image from 'next/image';
import {ReactNode} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TestimonialCard from '@repo/web/components/Shared/TestimonialCard';
import { testemonialsData } from '@repo/web/lib/data';

export default function AuthLayout({children}: {children: ReactNode}) {
    const pathname = usePathname();
    const isSignIn = pathname.includes('sign-in');
    const sarahData = testemonialsData[0] || {img: '', name: '', text: ''};
    return(
        <div className='flex flex-col-reverse gap-12.5 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex flex-col gap-10 lg:max-w-165 2xl:max-w-205'>
                <div className='flex flex-col gap-1 2xl:gap-1.5'>
                    <h2 className='h2-title text-grey-15'>Students Testimonials</h2>
                    <p className='small-p text-grey-30'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <TestimonialCard img={sarahData.img} name={sarahData.name} text={sarahData.text} />
                    <div className='flex gap-2.5 lg:self-end'>
                        <button className='bg-white rounded-md border border-white-95 p-3'>
                        <Image
                            src='/icon/arrow-left-grey.svg'
                            width={30}
                            height={30}
                            alt='arrow left'
                            className=''/>
                        </button>
                        <button className='bg-white rounded-md border border-white-95 p-3'>
                        <Image
                            src='/icon/arrow-right-grey.svg'
                            width={30}
                            height={30}
                            alt='arrow left'
                            className=''/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col not-last:gap-7.5 bg-white p-7.5 rounded-[10px] max-w-135 mx-auto not-last:lg:gap-10 not-last:2xl:gap-12.5 2xl:max-w-165'>
                <div className='flex flex-col items-center mb-7.5 gap-2 lg:mb-10 2xl:mb-12.5 2xl:gap-3'>
                    <h1 className='h1-title'>{isSignIn ? 'Login' : 'Sign Up'}</h1>
                    <p className='small-p text-grey-30 text-center'>
                        {isSignIn ? 
                            'Welcome back! Please log in to access your account.' 
                                : 
                            'Create an account to unlock exclusive features.'
                        }
                    </p>
                </div>
                {/* Sign-up / Sign-in Form */}
                {children} 
                <div className='flex flex-col items-center'>
                    <div className='w-full h-fit flex items-center my-6 gap-3 2xl:my-7.5'>
                        <div className='h-1/2 grow border-b border-white-90'/>
                        <p className='small-p text-grey-60'>OR</p>
                        <div className='h-1/2 grow border-b border-white-90'/>
                    </div>
                    <button className='bg-grey-35 p-3 text-white'>Sign Up with Google</button>
                    <p className='flex gap-2 small-p text-grey-15 mt-6'>{isSignIn ? 'Don’t have an account?' : 'Already have an account?'} 
                    <Link href={isSignIn ? '/auth/sign-up' : '/auth/sign-in'} className='flex font-medium underline'>
                        {isSignIn ? 'Sign Up' : 'Login'} 
                        <Image
                        src="/icon/arrow-top-right-grey-15.svg"
                        width={20}
                        height={20}
                        alt='link arrow'
                        className='' />
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    )
};