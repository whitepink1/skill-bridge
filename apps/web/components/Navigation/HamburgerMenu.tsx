'use client';
import Image from 'next/image';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { headerNav } from '../../lib/data';
import { usePathname } from 'next/navigation';

const HamburgerMenu = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const pathname = usePathname();
    const menuRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        }
        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsVisible(false);
            }
        }

        if (isVisible) {
            document.addEventListener('mousedown', handleClick);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleEscape);
        }
        
    }, [isVisible]);

    return (
        <div className='relative block p-3 lg:hidden' ref={menuRef}>
            <button onClick={() => setIsVisible(!isVisible)}>
                <Image
                    src='/icon/hamburger-menu.svg'
                    width={34}
                    height={34}
                    alt='Hamburger menu'/>
            </button>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='absolute flex flex-col gap-2 p-2 min-w-35 border border-grey-60 rounded-md bg-white-97 right-3 top-15 z-20'
                    >
                        {headerNav.map((item) => (
                            <Link 
                                onClick={() => setIsVisible(false)}
                                href={item.url} 
                                key={item.name}
                                className={`px-5 rounded-md py-1 text-sm font-normal text-grey-15 2xl:px-6 2xl:py-2.5 ${item.url === pathname ? 'bg-white-90' : ''}`}>
                                    {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HamburgerMenu