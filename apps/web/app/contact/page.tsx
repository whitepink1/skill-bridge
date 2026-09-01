'use client'
import React from 'react'
import PageTitle from '@repo/web/components/Shared/PageTitle'
import { contactInfoData, footerSocialData } from '@repo/web/lib/data'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import {ContactFormValues, ContactInputSchema} from '@repo/validation/contact-validation';
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@repo/web/components/Shared/Button'
import { useAppDispatch, useAppSelector } from '@repo/web/store/hooks'
import { sendContactMessage } from '@repo/web/store/features/contact/contactSlice'
import toast from 'react-hot-toast'

const Contact = () => {
    const dispatch = useAppDispatch();
    const {status} = useAppSelector((state) => state.contact);
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ContactFormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(ContactInputSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        }
    });

    const onSubmit = async (data: ContactFormValues) => {
        const result = await dispatch(sendContactMessage(data));
        if (sendContactMessage.fulfilled.match(result)) {
            toast.success('Message sent! We\'ll get back to you soon.', {duration: 5000});
            reset();
        } else if (sendContactMessage.rejected.match(result)) {
            toast.error((result.payload as string) || 'Something went wrong. Please try again.', {duration: 6000});
        }
    };

    return (
        <div className='lg:mt-7.5 2xl:mt-13.5'>
            <PageTitle title='Contact Us'>
                Welcome to SkillBridge&apos;s Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
            </PageTitle>
            <div className='grid mt-12.5 lg:mt-20 lg:grid-cols-3 2xl:mt-25'>
                <form className='grid gap-5 bg-white p-7.5 lg:gap-6 lg:grid-cols-2 lg:col-span-2 max-lg:rounded-t-lg lg:rounded-l-lg lg:p-15 2xl:p-20' onSubmit={handleSubmit(onSubmit)}>
                    {/* First name */}
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='firstName' className='small-p-md text-grey-15'>First Name</label>
                        <input 
                            {...register('firstName')}
                            defaultValue=''
                            placeholder='Enter First Name'
                            id='firstName'
                            className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
                        {errors.firstName && <p className='small-p-error'>{errors.firstName.message}</p>}
                    </div>
                    {/* Last name */}
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='lastName' className='small-p-md text-grey-15'>Last Name</label>
                        <input 
                            {...register('lastName')}
                            defaultValue=''
                            placeholder='Enter Last Name'
                            id='lastName'
                            className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
                        {errors.lastName && <p className='small-p-error'>{errors.lastName.message}</p>}
                    </div> 
                    {/* Email */}
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='email' className='small-p-md text-grey-15'>Email</label>
                        <input 
                            {...register('email')}
                            defaultValue=''
                            placeholder='Enter your Email'
                            type='email'
                            id='email'
                            className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
                        {errors.email && <p className='small-p-error'>{errors.email.message}</p>}
                    </div> 
                    {/* Phone */}
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='phone' className='small-p-md text-grey-15'>Phone</label>
                        <input 
                            {...register('phone')}
                            defaultValue=''
                            placeholder='Enter Phone Number'
                            type='phone'
                            id='phone'
                            className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
                        {errors.phone && <p className='small-p-error'>{errors.phone.message}</p>}
                    </div> 
                    {/* Subject */}
                    <div className='flex flex-col gap-3 lg:col-span-2'>
                        <label htmlFor='subject' className='small-p-md text-grey-15'>Subject</label>
                        <input 
                            {...register('subject')}
                            defaultValue=''
                            placeholder='Enter your Subject'
                            id='subject'
                            className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 2xl:p-6' />
                        {errors.subject && <p className='small-p-error'>{errors.subject.message}</p>}
                    </div> 
                    {/* Message */}
                    <div className='flex flex-col gap-3 lg:col-span-2'>
                        <label htmlFor='message' className='small-p-md text-grey-15'>Message</label>
                        <textarea 
                            {...register('message')}
                            defaultValue=''
                            placeholder='Enter your Message here...'
                            id='message'
                            className='w-full small-p p-5 bg-white-99 rounded-lg border border-white-95 placeholder:text-grey-40 lg:min-h-35 2xl:p-6' />
                        {errors.message && <p className='small-p-error'>{errors.message.message}</p>}
                    </div> 
                    <Button type='submit' status={status === 'loading'} style='orange' addClass='mt-2.5 h-fit lg:col-span-2 lg:w-fit lg:mx-auto'>
                        {status === 'loading' ? 'Sending...' : 'Send Your Message'}
                    </Button>
                </form>
                <div className='flex flex-col gap-5 p-7.5 bg-white border-white-95 max-lg:border-t max-lg:rounded-b-lg lg:p-15 lg:rounded-r-lg lg:border-l 2xl:p-20'>
                    {contactInfoData.map((item, id) => (
                        <div key={item.text} className='flex flex-col items-center gap-3.5 p-7.5 rounded-md bg-white-99 border border-white-95'>
                            <div className='p-3 bg-white-97 border border-white-95 rounded-md'>
                                <Image
                                    src={item.img}
                                    width={20}
                                    height={20}
                                    alt={`Contact info #${id+1}`}
                                    className=''/>
                            </div>
                            <p className='small-p text-grey-30'>{item.text}</p>
                        </div>
                    ))}
                    <div className='flex flex-col items-center gap-3.5 p-7.5 rounded-md bg-white-99 border border-white-95'>
                        <div className='flex justify-center items-center gap-2.5 2xl:gap-3.5'>
                            {footerSocialData.map((item) => (
                                <div key={item.name} className='p-3 rounded-md bg-white-97 border border-white-95 2xl:rounded-lg 2xl:p-3.5'>
                                    <Image
                                        src={item.img}
                                        width={20}
                                        height={20}
                                        alt={item.name}
                                        className='2xl:w-6 2xl:h-6'/>
                                </div>
                            ))}
                        </div>
                        <p className='small-p text-grey-30'>Social Profiles</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact
