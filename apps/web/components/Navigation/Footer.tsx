import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white mt-12.5 lg:mt-25 2xl:mt-35'>
            <div className='flex flex-col max-w-400 mx-auto px-basic'>
                <div className='flex flex-col items-start'>
                    <Image
                        src='/icon/logo_lg.png'
                        width={44}
                        height={44}
                        alt="Logo"
                        className=''/>
                </div>
            </div>
        </div>
    )
}

export default Footer