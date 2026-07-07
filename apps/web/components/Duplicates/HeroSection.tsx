import Image from 'next/image'
import React from 'react'
import Button from '../Shared/Button'
import { companiesData } from '../../lib/data'

const CompanyLogo = ({ name, img, hiddenOnMobile }: { name: string; img: string; hiddenOnMobile: boolean }) => (
    <div className={`w-full relative justify-self-center my-auto ${hiddenOnMobile ? 'hidden lg:block' : ''} border-white-95 not-last:border-r`}>
        <Image 
            className='object-contain w-20 h-auto 2xl:w-24 mx-auto'
            src={img}
            width={100}
            height={56}
            alt={name} />
    </div>
)

const HeroSection = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='relative w-full flex items-center justify-center max-w-215 bg-white text-h1 rounded-lg p-3.5 sm:w-fit'>
                <div className='h-[3em] bg-orange-95 rounded-lg aspect-square mr-2'>
                    <div className='relative h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square'>
                        <Image
                        src='/icon/lightning.svg'
                        fill
                        alt='Lightning icon'
                        className='object-center'/>
                    </div>
                </div>
                <span className='text-orange-50 h1'>Unlock&nbsp;</span>
                <span className='h1'>Your Creative Potential</span>
                <Image
                    src='/abstract_line.png'
                    width={40}
                    height={42}
                    alt='Abstract lines'
                    className='absolute -left-3 -top-4'/>
            </div>
            <h3 className='h3 mt-4 max-w-215 text-center lg:mt-5'>with Online Design and Development Courses.</h3>
            <p className='mt-2.5 small-p text-center'>Learn from Industry Experts and Enhance Your Skills.</p>
            <div className='flex justify-center gap-3 mt-12.5 2xl:mt-15'>
                <Button type='link' style='orange' href='/courses'>Expore Courses</Button>
                <Button type='link' style='white' href='/pricing'>View Pricing</Button>
            </div>
            <div className='w-full h-16 grid grid-cols-3 bg-white-99 border border-white-95 rounded-lg mt-7.5 p-2.5 lg:mt-25 lg:p-4 lg:h-17 2xl:h-40 lg:grid-cols-7'>
                {companiesData.map((item, index) => (
                    <CompanyLogo key={item.name} {...item} hiddenOnMobile={index > 2} />
                ))}
            </div>
        </div>
    )
}

export default HeroSection