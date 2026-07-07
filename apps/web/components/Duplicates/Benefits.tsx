import React from 'react'
import { benefitData } from '../../lib/data'
import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '../Shared/SectionTitle'

const Benefits = () => {
    return (
        <div className='flex flex-col mt-7.5 lg:mt-20 2xl:mt-25'>
            <div>
                Image
            </div>
            <SectionTitle title='Benefits' link='/'>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </SectionTitle>
            <div className='grid grid-cols-1 gap-5 mt-10 lg:mt-15 2xl:mt-20 md:grid-cols-2 2xl:grid-cols-3'>
                {benefitData.map((item, index) => (
                    <div key={item.name} className={`flex flex-col gap-7.5 bg-white rounded-[10px] p-7.5 lg:p-10 2xl:p-12.5 lg:gap-10 2xl:gap-12.5 ${index > 3 ? 'hidden lg:block' : ''}`}>
                        <p className='text-5xl font-bold text-end lg:text-6xl 2xl:text-[80px]'>0{index + 1}</p>
                        <div className='flex flex-col gap-2.5 lg:gap-3.5'>
                            <p className='base-p'>{item.name}</p>
                            <p className='small-p'>{item.description}</p>
                        </div>
                        <Link href={item.link} className='self-end p-3.5 border border-white-95 bg-white-99 rounded-md 2xl:p-5'>
                            <Image 
                                src={'/icon/arrow-top-right.png'}
                                width={13}
                                height={13}
                                alt={`#${index + 1} Benefit`}
                                className='lg:w-3.75 lg:h-3.75 2xl:w-4.5 2xl:h-4.5'/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits