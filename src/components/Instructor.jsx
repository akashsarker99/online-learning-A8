import { getInstructors } from '@/lib/getfiles';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Instructor = async () => {
    const instructors = await getInstructors();
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5'>
             {
                instructors.map(instructor => <div key={instructor.id}>
                        <div className="card rounded-2xl bg-base-100 shadow-md border border-gray-300 h-full">
              <figure className='overflow-hidden'>
                  <Image className='rounded-xl' src={instructor.image} height={200} width={300}  alt={instructor.name}></Image>
              </figure>
              <div className='space-y-2'>
                <h2 className="text-lg font-bold">{instructor.name}</h2>
                <p className='font-semibold flex gap-2'><span className='font-bold'>Experties: </span> {instructor.expertise}</p>
                <p className='font-semibold flex gap-2'><span className='font-bold'>Students: </span> {instructor.students}</p>
                <p className='font-bold flex gap-2'>Rating: <span className='font-bold flex items-center gap-1'>{instructor.rating} <FaStar /></span></p>
              </div>
            </div>
                    </div>)
             }
        </div>
    );
};

export default Instructor;