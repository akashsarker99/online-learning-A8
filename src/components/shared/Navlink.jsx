'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const path = usePathname();
    const isActive = path === href;
    return (
        <div>
            <Link href={href} className={`${isActive ? "border-b-2 border-[#2FA084] px-2" : ''}`}>{children}</Link>
        </div>
    );
};

export default Navlink;