"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from "motion/react"
const NewReleaseCard = ({newCard}) => {
    return (
        <motion.div  initial={{ opacity: 0, y: 40 }}

  whileInView={{ opacity: 1, y: 0 }}

  whileHover={{
    y: -10,
    scale: 1.02,
  }}

  transition={{
    duration: 0.4
  }}>
            <div className="card bg-base-100 shadow-sm border border-gray-300">
  <figure className='h-56 overflow-hidden'>
      <Image className='rounded-xl w-full h-full object-cover' src={newCard.image} height={200} width={400}  alt={newCard.title}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {newCard.title}
      <div className="badge bg-yellow-300">NEW</div>
    </h2>
    <div className='space-y-2'>
                   <p className='font-semibold flex gap-2'><span className='font-bold'>Instructor: </span> {newCard.instructor}</p>
                   <p className='font-semibold flex gap-2'><span className='font-bold'>Category: </span> {newCard.category}</p>
                   <p className='font-bold flex gap-2'>Rating: <span className='font-bold flex items-center gap-1'>{newCard.rating} <FaStar /></span></p>
                 </div>
    <div className="card-actions justify-end mt-auto">
         <Link href={`/allcourse/${newCard.id}`}><button className="btn bg-[#2FA084] text-white">Show Details</button></Link>
    </div>
  </div>
</div>
        </motion.div>
    );
};

export default NewReleaseCard;