import Image from 'next/image';
import React from 'react';

interface CardProps {
    title: string;
        text:string;
        img: string;
}

interface SectionCardsProps {
    data: CardProps[];
}

const SectionCards = ({data}: SectionCardsProps) => {
    return (
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:gap-7.5'>
            {data.map((item: CardProps) => (
                <div key={item.title} className='flex flex-col bg-white p-7.5 gap-1.5 rounded-[10px] lg:p-10 lg:gap-2.5 2xl:gap-3.5'>
                    <div className='h-fit w-fit flex items-center justify-center p-3.5 bg-orange-97 border border-orange-90 rounded-md mb-4.5 lg:mb-3.5 2xl:mb-4'>
                        <Image
                            src={item.img}
                            width={28}
                            height={28}
                            alt={item.title}
                            className='2xl:w-8.5 2xl:h-8.5'/>
                    </div>
                    <h4 className='h4 text-grey-15'>{item.title}</h4>
                    <p className='small-p text-grey-35'>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default SectionCards