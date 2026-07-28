import Image from 'next/image'
import React from 'react'
import { footerNavData, footerSocialData } from '../../lib/data'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-white mt-12.5 lg:mt-25 2xl:mt-35'>
            <div className='flex flex-col items-start max-w-400 mx-auto px-basic pt-12.5 pb-5 border-b border-white-95 lg:pt-15 2xl:pt-25 2xl:pb-12.5 lg:flex-row lg:justify-between'>
                <div className='flex flex-col items-start gap-3 lg:gap-4 2xl:gap-5'>
                    <Image
                        src='/icon/logo_lg.png'
                        width={44}
                        height={44}
                        alt="Logo"
                        className='mb-4.5 2xl:mb-5'/>
                    <p className='flex gap-2 text-grey-15 text-base 2xl:text-lg leading-normal'>
                        <Image
                            src="/icon/email.png"
                            width={24}
                            height={24}
                            alt='Email adress'
                            className=''/>
                        hello@skillbridge.com
                    </p>
                    <p className='flex gap-2 text-grey-15 text-base 2xl:text-lg leading-normal'>
                        <Image
                            src="/icon/phone.png"
                            width={24}
                            height={24}
                            alt='Email adress'
                            className=''/>
                        +91 91813 23 2309
                    </p>
                    <p className='flex gap-2 text-grey-15 text-base 2xl:text-lg leading-normal'>
                        <Image
                            src="/icon/location.png"
                            width={24}
                            height={24}
                            alt='Email adress'
                            className=''/>
                        Somewhere in the World
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-10 2xl:gap-20'>
                    <div className='flex gap-7.5 mt-6 lg:mt-0 lg:gap-10 2xl:gap-20'>
                        {footerNavData.map((item) => (
                            <div className='flex flex-col gap-2.5' key={item.name}>
                                <p className='text-lg font-semibold text-grey-15 2xl:text-xl'>{item.name}</p>
                                <div className='flex flex-col gap-1'>
                                    {item.links.map((link) => (
                                        <Link href={link.url} className='small-p text-grey-35' key={link.title}>{link.title}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2.5 mt-6 lg:mt-0 lg:gap-3.5'>
                        <p className='text-lg font-semibold text-grey-15 2xl:text-xl'>Social Profiles</p>
                        <div className='flex items-center gap-3.5'>
                            {footerSocialData.map((social) => (
                                <Link href={social.url} className='p-3 bg-white-97 border border-white-95 rounded-md 2xl:p-3.5' key={social.name}>
                                    <Image
                                        src={social.img}
                                        width={20}
                                        height={20}
                                        alt={social.name}
                                        className='2xl:w-6 2xl:h-6'/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-grey-40 text-center mx-auto mb-6 pt-5 2xl:pt-12.5'>© 2023 Skillbridge. All rights reserved.</p>
        </div>
    )
}

export default Footer