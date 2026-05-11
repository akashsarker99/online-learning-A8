'use client'
import Link from 'next/link';
import Navlink from './Navlink';
import { IoLogInSharp, IoLogOutOutline } from "react-icons/io5";
import { authClient } from '@/lib/auth-client';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
const Navbar = () => {
  const {data: session} = authClient.useSession();
   const user = session?.user;

   const handleSignOut = async () =>{
     return await authClient.signOut();
   }
    const links = <>
        <ul className='flex flex-col sm:flex-row gap-4'>
            <li><Navlink href={'/'}>Home</Navlink></li>
          <li><Navlink href={'/allcourse'}>Courses</Navlink></li>
          <li><Navlink href={'/profile'}>My Profile</Navlink></li>
        </ul>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl font-bold text-[#2FA084]">SkillSphere</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  
  <div className="navbar-end">
     {
    user? <div className='flex sm:gap-2.5 items-center'>
          <div className='flex items-center gap-1'> <h1 className='text-xs sm:text-sm'>Hello, {user.name}</h1>
          <Image src={user.image || userAvatar} alt='userAvatar' width={40} height={40}></Image></div>
          <button onClick={handleSignOut} className='btn btn-xs sm:btn-sm bg-[#2FA084] text-white'><Link className='flex items-center gap-2.5' href={'/login'}>Logout <IoLogOutOutline /></Link></button>
        </div> :
            <Link href={'/login'} className="btn bg-[#2FA084] text-white"><IoLogInSharp /> Login</Link>

  }
  </div>
</div>
        </div>
    );
};

export default Navbar;