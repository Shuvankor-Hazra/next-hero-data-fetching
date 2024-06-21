'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);
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
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
    ]

    const handler = () => {
        router.push('/api/auth/signin')
    }

    // if (pathName.includes('dashboard'))
    //     return (
    //         <div className='bg-green-300 p-5'>
    //             Dashboard Layout
    //         </div>
    //     )


    return (
        <nav className="bg-red-300 px-10 py-5 flex gap-5 items-center justify-between">
            <Link href={'/'} className='text-3xl'>Next<span className='text-cyan-500'>Meal</span></Link>
            <ul className="flex items-center justify-center space-x-5">
                {
                    links.map((link) => <Link className={`${pathName === link.path && "text-cyan-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>


            <div className='flex items-center gap-6'>
                {session?.status === 'authenticated' && <Image src={session?.data?.user?.image} alt={session?.data?.user?.name} height={20} width={50} className='rounded-full w-14 h-14' />}
                <div className='text-center'>
                    <h5>{session?.data?.user?.name}</h5>
                    <h5 className='capitalize'>{session?.data?.user?.type}</h5>
                </div>
                {
                    session?.status !== 'authenticated' ?
                        <>
                            <Link href={'/api/auth/signup'}><button className='bg-white text-cyan-500 px-6 py-3 font-semibold rounded-3xl hover:bg-slate-100'>Signup</button> </Link>

                            <button onClick={handler} className='bg-white text-cyan-500 px-6 py-3 font-semibold rounded-3xl hover:bg-slate-100'>Login</button>
                        </> :
                        <><button onClick={() => signOut()} className='bg-white text-cyan-500 px-6 py-3 font-semibold rounded-3xl hover:bg-slate-100'>Logout</button></>
                }
            </div>
        </nav>
    );
}

export default Navbar;
