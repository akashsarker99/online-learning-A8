import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import heroImg from '@/assets/heroo.jpg'
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
    return (
        <div>
             <div className="hero bg-base-300 mt-9 container mx-auto py-7">
  <div className="hero-content flex-col lg:flex-row-reverse">
     <Image src={heroImg} height={300} width={500} alt="HeroImg"></Image>
    <div>
      <h1 className="text-5xl font-bold">Upgrade Your Skills Today !</h1>
      <p className="py-6">
       Learn from Industry Experts
      </p>
      <Link href={'/allcourse'}><button className="btn bg-[#2FA084] text-white"><span>Explore Courses</span> <FaArrowRightLong /></button></Link>
    </div>
  </div>
</div>

        </div>
    );
};

export default Hero;