import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import SectionCards from '../Shared/SectionCards'
import { OurGoalsData } from '../../lib/data'
import Button from '../Shared/Button'
import Image from 'next/image'

const OurGoals = () => {
  return (
    <div className='flex flex-col gap-12.5 mt-12.5 lg:gap-15 lg:mt-25 2xl:mt-44 2xl:gap-20'>
        <SectionTitle title='Our Goals'>
            At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to
        </SectionTitle>
        <SectionCards data={OurGoalsData}/>
        <div className='relative flex flex-col gap-10 bg-white p-7.5 rounded-[10px] lg:p-15 2xl:p-20 lg:flex-row lg:items-center lg:justify-between'>
            <div className='w-full flex flex-col gap-2.5 z-10 lg:max-w-4/5'>
                <h1 className='h1-title text-grey-15 lg:max-w-2/3 2xl:max-w-3/4'>
                    <span className='text-orange-50'>Together</span>
                    , let&apos;s shape the future of digital innovation
                </h1>
                <p className='small-p text-grey-30'>Join us on this exciting learning journey and unlock your potential in design and development.</p>
            </div>
            <div className='w-1/3 min-w-60 aspect-square absolute -right-10 -bottom-1/4 md:-bottom-1/2 lg:bottom-1/2 lg:translate-y-1/2 lg:right-1/7'>
                <Image 
                    src='/images/goals-geometry.svg'
                    fill
                    alt='geometry'
                    className='object-cover'/>
            </div>
            <Button 
                type='link' 
                href='/' 
                style='orange'
                addClass='w-fit h-fit z-10'>
                    Join Now
            </Button>
        </div>
    </div>
  )
}

export default OurGoals