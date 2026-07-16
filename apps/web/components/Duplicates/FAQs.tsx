'use client'
import React, {useState} from 'react'
import Button from '../Shared/Button'
import { faqData } from '../../lib/data'
import Image from 'next/image';
import {motion, AnimatePresence} from 'motion/react';
import Link from 'next/link';

interface FAQProps {
    name: string;
    details: string;
    link: string;
    linkText: string;
}

const FAQDetails = ({name, details, link, linkText} : FAQProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=' px-6 py-5 lg:px-10 lg:py-6 2xl:px-12.5 2xl:py-7.5 border border-white-95 rounded-lg'>
            <div className={`flex justify-between items-center gap-10`}>
                <p className='small-p-med text-grey-15'>{name}</p>
                <button onClick={() => setIsOpen(!isOpen)} className='w-10 h-10 flex items-center justify-center aspect-square bg-orange-95 rounded-md lg:w-11 lg:h-11 2xl:w-13 2xl:h-13'>
                    <Image
                        src='/icon/plus-sign.svg'
                        height={10}
                        width={10}
                        alt='Show/hide details'
                        className={`lg:w-3 lg:h-3 2xl:w-3.5 2xl:h-3.5 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : ''}`}/>
                </button>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height:  0, opacity: 0}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        className='overflow-hidden mt-5'>
                            <p className='small-p text-grey-30 py-5 border-t border-white-95 lg:py-10 2xl:py-12.5'>{details}</p>
                            <p className='flex justify-between items-center small-p font-medium text-grey-20 bg-white-97 py-3 px-5 rounded-md boder border-white-95 2xl:py-5 2xl:px-7.5'>
                                {linkText}
                                <Link href={link} className='w-10 h-10 flex items-center justify-center aspect-square rounded-full bg-white lg:w-12.5 lg:h-12.5 2xl:w-15 2xl:h-15'>
                                    <Image
                                        src='/icon/arrow-right-bold.svg'
                                        width={20}
                                        height={20}
                                        alt='Arrow right'
                                        className='2xl:w-6 2xl:h-6'/>
                                </Link>
                            </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQs = () => {
    return (
        <div className='flex flex-col gap-10 bg-white p-6 mt-12.5 lg:p-20 2xl:p-25 lg:mt-25 2xl:mt-37.5'>
            <div className='flex flex-col gap-2 2xl:gap-2.5'>
                <h1 className='h1-title text-grey-15'>Frequently Asked Questions</h1>
                <p className='small-p text-grey-20 mb-3 lg:mb-8 2xl:mb-10'>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                <Button type='link' style='white' href='/' addClass='w-fit'>See All FAQ's</Button>
            </div>
            <div className='flex flex-col gap-5 lg:gap-7.5'>
                {faqData.map(item => (
                    <FAQDetails key={item.name} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default FAQs