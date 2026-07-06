import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ButtonProps {
    type: 'button' | 'link';
    href?: string;
    onHandler?: () => void;
    addClass?: string;
    style: 'transparent' | 'orange' | 'grey' | 'white';
    children: ReactNode;
}

const Button = ({type, href, onHandler, addClass, style, children}: ButtonProps) => {
    const colorScheme = {
        transparent: 'text-grey-15',
        orange: 'bg-orange-50 text-white',
        grey: '',
        white: 'bg-white'
    }
    return (
        type === 'button' ?
            <button onClick={onHandler} className={`text-nav px-5 py-3 rounded-md hover:scale-103 hover:shadow-md lg:px-6 2xl:px-8.5 2xl:py-3.5 ${colorScheme[style]} ${addClass}`}>
                {children}
            </button>
        :
            <Link href={href || '/'} className={`text-nav px-5 py-3 rounded-md hover:scale-103 hover:shadow-md lg:px-6 2xl:px-8.5 2xl:py-3.5 ${colorScheme[style]} ${addClass}`}>
                {children}
            </Link>
        
    )
}

export default Button