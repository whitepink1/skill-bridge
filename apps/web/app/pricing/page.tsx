import React from 'react'
import PageTitle from '../../components/Shared/PageTitle'
import Pricing from '../../components/Duplicates/Pricing'
import FAQs from '../../components/Duplicates/FAQs'

const page = () => {
    return (
        <div className='lg:mt-7.5 2xl:mt-13.5'>
            <PageTitle title='Our Pricings'>
                Welcome to SkillBridge&apos;s Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you&apos;re an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
            </PageTitle>
            <Pricing />
            <FAQs />
        </div>
    )
}

export default page