import React from 'react'
import PageTitle from '../../components/Shared/PageTitle'
import { contactInfoData } from '../../lib/data'
import Image from 'next/image'

const page = () => {
    return (
        <div className='lg:mt-7.5 2xl:mt-13.5'>
            <PageTitle title='Contact Us'>
                Welcome to SkillBridge&apos;s Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
            </PageTitle>
            <div className='grid lg:grid-cols-2'>
                <form className='bg-white'>
                        A
                </form>
                <div className='flex flex-col gap-5 p-7.5 bg-white max-lg:border-t max-lg:rounded-b-lg lg:p-15 lg:rounded-r-lg lg:border-l 2xl:p-20'>
                    {contactInfoData.map((item, id) => (
                        <div key={item.text} className='flex flex-col items-center gap-3.5 p-7.5 rounded-md bg-white-99 border border-white-95'>
                            <div className='p-3 bg-white-97 border border-white-95 rounded-md'>
                                <Image
                                    src={item.img}
                                    width={20}
                                    height={20}
                                    alt={`Contact info #${id+1}`}
                                    className=''/>
                            </div>
                            <p className='small-p text-grey-30'>{item.text}</p>
                        </div>
                    ))}
                    <div className='flex flex-col items-center gap-3.5 p-7.5 rounded-md bg-white-99 border border-white-95'>
                        <div className='flex justify-center items-center'>

                        </div>
                        <p className='small-p text-grey-30'>Social Profiles</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page
