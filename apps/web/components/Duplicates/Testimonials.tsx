import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import { testemonialsData } from '../../lib/data'
import Image from 'next/image'
import Button from '../Shared/Button'

const Testimonials = () => {
    return (
        <div>
            <SectionTitle title='Our Testimonials' link='/'>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </SectionTitle>
            <div className='grid grid-cols-1 gap-5 mt-10 lg:grid-cols-2 2xl:gap-7.5'>
                {testemonialsData.map((item) => (
                    <div key={item.img} className='flex flex-col bg-white rounded-[10px] border border-white-95'>
                        <p className='small-p text-grey-30 p-7.5 border-b border-white-95 lg:p-10 2xl:p-12.5'>{item.text}</p>
                        <div className='flex justify-between bg-white-99 py-5 px-7.5 lg:py-6 lg:px-10 2xl:px-12.5 2xl:py-7.5'>
                            <p className='flex items-center gap-2.5 small-p-sb'>
                                <Image
                                    src={item.img}
                                    height={50}
                                    width={50}
                                    alt={item.name}
                                    className='2xl:w-15 2xl:h-15'/>
                                {item.name}
                            </p>
                            <Button type='link' style='grey' href='/'>Read Full Story</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials