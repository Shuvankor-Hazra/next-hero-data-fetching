'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
    ]

    const handler = () => {
        router.push('/login')
    }

    if (pathName.includes('dashboard'))
        return (
            <div className='bg-green-300 p-5'>
                Dashboard Layout
            </div>
        )


    return (
        <nav className="bg-red-300 px-10 py-5 flex gap-5 items-center justify-between">
            <Link href={'/'} className='text-3xl'>Next<span className='text-cyan-500'>Meal</span></Link>
            <ul className="flex items-center justify-center space-x-5">
                {
                    links.map((link) => <Link className={`${pathName === link.path && "text-cyan-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handler} className='bg-white text-cyan-500 p-3'>Login</button>
        </nav>
    );
}

export default Navbar;
