import Image from 'next/image'
import React from 'react'
import Button from '../Shared/Button'

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
                <span className='text-orange-50'>Unlock&nbsp;</span>
                <span>Your Creative Potential</span>
                <Image
                    src='/abstract_line.png'
                    width={40}
                    height={42}
                    alt='Abstract lines'
                    className='absolute -left-3 -top-4'/>
            </div>
            <h3 className='h3 mt-4 max-w-215 text-center lg:mt-5'>with Online Design and Development Courses.</h3>
            <p className='mt-2.5 small-p text-center'>Learn from Industry Experts and Enhance Your Skills.</p>
            <div className='flex justify-center gap-3 mt-15'>
                <Button type='link' style='orange' href='/courses'>Expore Courses</Button>
                <Button type='link' style='white' href='/pricing'>View Pricing</Button>
            </div>
        </div>
    )
}

export default HeroSection