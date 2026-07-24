import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white mt-12.5 lg:mt-25 2xl:mt-35'>
            <div className='flex flex-col items-start max-w-400 mx-auto px-basic pt-12.5 pb-5 border-b border-white-95 lg:pt-15 2xl:pt-25 2xl:pb-12.5'>
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
                <div>
                    
                </div>
            </div>
            <p className='text-grey-40 mx-auto pt-5 2xl:pt-12.5'>© 2023 Skillbridge. All rights reserved.</p>
        </div>
    )
}

export default Footer