import Image from 'next/image';
import React from 'react';
import heroImg from '@/assets/freelancer.jpg'
import { FaArrowRightLong } from 'react-icons/fa6';

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
      <button className="btn btn-neutral"><span>Explore Courses</span> <FaArrowRightLong /></button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Hero;