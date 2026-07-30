import React from 'react'
import PageTitle from '../../components/Shared/PageTitle'
import Achievements from '../../components/Duplicates/Achievements'
import OurGoals from '../../components/Duplicates/OurGoals'

const page = () => {
  return (
    <div className='lg:mt-7.5 2xl:mt-13.5'>
        <PageTitle title='About SkillBridge'>
            Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
        </PageTitle>
        <Achievements />
        <OurGoals />
    </div>
  )
}

export default page