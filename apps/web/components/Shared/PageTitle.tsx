import {ReactNode} from 'react'

interface PageTitleProps {
    title: string;
    children: ReactNode;
}

const PageTitle = ({title, children}: PageTitleProps) => {
    return (
        <div className='grid grid-cols-1 pb-7.5 gap-4 border-b border-white-90 lg:pb-10 lg:grid-cols-2 2xl:pb-12.5'>
            <h1 className='h1-title text-grey-15 lg:my-auto'>{title}</h1>
            <p className='small-p text-grey-35'>{children}</p>
        </div>
    )
}

export default PageTitle