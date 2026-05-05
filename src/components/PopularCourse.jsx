import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularCourse = ({course}) => {
    console.log(course)
    return (
        <div>
            <div className="card bg-base-100 shadow-md border border-gray-300 h-full">
  <figure className='overflow-hidden'>
      <Image className='rounded-xl' src={course.image} height={300} width={400}  alt={course.title}></Image>
  </figure>
  <div className='space-y-2'>
    <h2 className="text-lg font-bold">{course.title}</h2>
    <p className='font-semibold'>Instructor: <span className='font-bold'>{course.instructor}</span></p>
    <p className='font-semibold'>Rating: <span className='font-bold'>{course.rating}</span></p>
    <p className='font-semibold'>Category: <span className='font-bold'>{course.category}</span></p>
    <div className="card-actions justify-end">
      <Link href={`/allcourse/${course.id}`}><button className="btn btn-neutral">Show Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCourse;