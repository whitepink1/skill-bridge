import React from 'react'
import SectionTitle from '../Shared/SectionTitle'

const Courses = () => {
    return (
        <div className='flex flex-col gap-5 mt-12.5 lg:mt-25'>
            <SectionTitle title="Our Courses" link='/'>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </SectionTitle>
            <div className='mt-10 lg:mt-15 2xl:mt-20'>
                fetch courses
            </div>
        </div>
    )
}

export default Courses