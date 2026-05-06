import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const PopularCourse = ({course}) => {
    return (
        <div>
            <div className="card bg-base-100 rounded-2xl shadow-md border border-gray-300 ">
  <figure className='overflow-hidden h-56'>
      <Image className='rounded-xl w-full h-full object-cover' src={course.image} height={300} width={400}  alt={course.title} ></Image>
  </figure>
  <div className='space-y-2'>
    <h2 className="text-lg font-bold">{course.title}</h2>
    <p className='font-semibold'>Instructor: <span className='font-bold'>{course.instructor}</span></p>
    <p className='font-semibold flex gap-2'>Rating: <span className='font-bold flex items-center gap-1'>{course.rating} <FaStar /></span></p>
    <p className='font-semibold'>Category: <span className='font-bold'>{course.category}</span></p>
    <div className="card-actions justify-end mt-auto">
      <Link href={`/allcourse/${course.id}`}><button className="btn bg-[#2FA084] text-white">Show Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCourse;