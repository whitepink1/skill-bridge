import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import { testemonialsData } from '../../lib/data'
import TestimonialCard from '../Shared/TestimonialCard'

const Testimonials = () => {
    return (
        <div>
            <SectionTitle title='Our Testimonials' link='/'>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </SectionTitle>
            <div className='grid grid-cols-1 gap-5 mt-10 lg:grid-cols-2 2xl:gap-7.5'>
                {testemonialsData.map((item) => (
                    <TestimonialCard key={item.img} img={item.img} name={item.name} text={item.text}/>
                ))}
            </div>
        </div>
    )
}

export default Testimonials