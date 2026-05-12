'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProfilePage = () => {
    const router = useRouter();
    const {data: session} = authClient.useSession();
    const user = session?.user;
    if(!session){
          router.push("/login");
    }
    return (
        <div className='text-center mt-9 container mx-auto'>
            <h1 className='text-2xl font-bold mb-6 underline'>My Profile</h1>

            <div className=' p-10 flex flex-col sm:flex-row gap-4 justify-around'>
               <div> 
                 <h2 className='font-bold'>Name:</h2>
                <h2>{user?.name}</h2>

                <h2 className='mt-3 font-bold'>Email:</h2>
                <h2>{user?.email}</h2>
               </div>

               <div>
                <h2 className='font-bold'>Photo URL</h2>
                <p>{user?.image}</p>

                <h2 className='mt-3 font-bold'>ID:</h2>
                <h2>{user?.id}</h2>
               </div>
               
            </div>

             <Link href={'/updateProfile'}><button className='btn'>Update Profile</button></Link>
            
        </div>
    );
};

export default ProfilePage;