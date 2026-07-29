import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import { AchievementsData } from '../../lib/data'
import Image from 'next/image'

const Achievements = () => {
  return (
    <div className='flex flex-col gap-12.5 mt-12.5 lg:gap-15 2xl:gap-20 lg:mt-20 2xl:mt-25'>
        <SectionTitle title='Achievements'>
            Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements
        </SectionTitle>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:gap-7.5'>
            {AchievementsData.map((item) => (
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
    </div>
  )
}

export default Achievements