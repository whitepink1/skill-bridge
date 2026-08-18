import Image from 'next/image'
import React from 'react'
import Button from './Button'

interface TestimonialProps {
    img: string;
    name: string;
    text: string;
}

const TestimonialCard = ({img, name, text}: TestimonialProps) => {
    return (
        <div key={img} className='flex flex-col bg-white rounded-[10px] border border-white-95'>
            <p className='small-p grow text-grey-30 p-7.5 border-b border-white-95 lg:p-10 2xl:p-12.5'>{text}</p>
            <div className='flex justify-between bg-white-99 py-5 px-7.5 lg:py-6 lg:px-10 2xl:px-12.5 2xl:py-7.5'>
                <p className='flex items-center gap-2.5 small-p-sb'>
                <Image
                    src={img}
                    height={50}
                    width={50}
                    alt={name}
                    className='2xl:w-15 2xl:h-15'/>
                    {name}
                </p>
                <Button type='link' style='grey' href='/'>Read Full Story</Button>
            </div>
        </div>
    )
}

export default TestimonialCard