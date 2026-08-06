'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthenticationNav from './AuthenticationNav'
import HamburgerMenu from './HamburgerMenu'
import { headerNav } from '../../lib/data'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <section className='w-full flex flex-col mt-5 border-b border-white-95 mb-12.5'>
            <p className='flex justify-between text-sm text-white font-normal bg-orange-50 rounded-md px-4 py-2.5 md:justify-center'>
                Free Courses 🌟 Sale Ends Soon, Get It Now
                <Link href='/' className='md:ml-3'>
                    <Image
                        src='/icon/arrow-right-white.png'
                        width={20}
                        height={20}
                        alt="Link to free courses"/>
                </Link>
            </p>
            <div className='w-full flex justify-between items-center my-3.5 max-w-400 mx-auto'>
                <div className='relative h-10 w-10'>
                    <Image
                    src="/icon/logo_lg.png"
                    fill
                    alt="Skill bridge"/>
                </div>
                <div className='hidden ml-12.5 gap-2.5 lg:flex'>
                    {headerNav.map((item) => (
                        <Link 
                            href={item.url} 
                            key={item.name}
                            className={`px-5 rounded-md py-3 text-sm font-normal text-grey-15 2xl:px-6 2xl:py-2.5 2xl:text-lg ${item.url === pathname ? 'bg-white-95' : ''}`}>
                                {item.name}
                        </Link>
                    ))}
                </div>
                <AuthenticationNav/>
                <HamburgerMenu />
            </div>
        </section>
    )
}

export default Header