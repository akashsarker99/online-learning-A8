import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col h-[80vh] items-center justify-center'>
            <h2 className='font-bold pb-3'>This Page is not found</h2>
            <Link href='/'>
                <button className='btn'>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;