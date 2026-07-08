'use client'
import React, {useState} from 'react'
import Button from '../Shared/Button';
import { pricingData } from '../../lib/data';
import Link from 'next/link';
import Image from 'next/image';

const Pricing = () => {
    const [type, setType] = useState('monthly');
    return (
        <div>
            <div className='flex flex-col gap-5 mt-12.5 lg:mt-25 2xl:mt-37.5 lg:flex-row lg:justify-between'>
                <div className='lg:max-w-[70%]'>
                    <h1 className='h1-title'>Our Pricing</h1>
                    <p className='small-p text-grey-35'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div className='h-fit bg-white rounded-lg p-3 self-center lg:self-end'>
                    <Button type='button' style={type === 'monthly' ? 'orange' : 'transparent'} addClass='transition-colors duration-300 ease-in-out' onHandler={() => setType('monthly')}>Monthly</Button>
                    <Button type='button' style={type === 'yearly' ? 'orange' : 'transparent'} addClass='transition-colors duration-300 ease-in-out' onHandler={() => setType('yearly')}>Yearly</Button>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-7.5 bg-white rounded-xl p-5 mt-10 lg:mt-15 2xl:mt-20 lg:grid-cols-2 lg:p-12.5 2xl:p-20'>
                {pricingData.map((item) => (
                    <div key={item.name} className='flex flex-col gap-7.5 bg-white-99 border border-white-95 py-7.5 px-5 rounded-xl lg:gap-12.5'>
                        <p className='small-p-med text-grey-15 text-center bg-orange-97 border border-orange-90 py-2 rounded-sm'>{item.name}</p>
                        <p className='text-[50px] font-semibold text-grey-15 text-center lg:text-6xl 2xl:text-[80px]'>${type === 'monthly' ? item.mPrice : item.yPrice} 
                            <span className='small-p-med text-grey-30'>/ {type.slice(0, -2)}</span>
                        </p>
                        <div className='flex flex-col items-start gap-5 bg-white border border-white-95 rounded-xl'>
                            <p className='text-lg font-mediun leading-normal mx-auto 2xl:text-xl mt-5 lg:mt-7.5 2xl:mt-10'>Available features</p>
                            <div className='flex flex-col gap-3 w-full px-5 lg:px-7.5 2xl:px-10'>
                                {item.features.map((feature) => (
                                    <div key={feature.name} className='flex items-start gap-2 border border-white-95 rounded-md p-3'>
                                        <div className={`w-6 h-6 aspect-square flex items-center justify-center ${feature.state ? 'bg-orange-95' : 'border border-white-95'} rounded-sm 2xl:w-8 2xl:h-8`}>
                                            <Image
                                                src={feature.state ? '/icon/mark.svg' : '/icon/x-mark.svg'}
                                                width={10}
                                                height={10}
                                                alt='Feature state' />
                                        </div>
                                        <p className='text-sm font-normal text-grey-30 2xl:text-lg'>{feature.name}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href='/' className='w-full text-sm font-semibold text-white text-center bg-orange-50 p-4.5 rounded-bl-xl rounded-br-xl 2xl:py-5 2xl:text-lg'>Get Started</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing