import React, { ReactNode } from 'react'
import Button from './Button'

interface SectionTitlerops {
    title: string;
    children: ReactNode;
    link: string;
}

const SectionTitle = ({title, children, link}: SectionTitlerops) => {
  return (
    <div className='flex flex-col gap-5 mt-12.5 lg:mt-25 2xl:mt-37.5 lg:flex-row lg:justify-between'>
        <div className='lg:max-w-[70%]'>
            <h1 className='h1-title'>{title}</h1>
            <p className='small-p text-grey-35'>{children}</p>
        </div>
        <Button type='link' style='white' href={link} addClass='w-fit h-fit lg:mt-auto lg:min-w-25'>View All</Button>
    </div>
  )
}

export default SectionTitle