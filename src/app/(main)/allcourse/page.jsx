import PopularCourse from '@/components/shared/PopularCourse';
import { getCourses } from '@/lib/getfiles';
import React from 'react';

const AllCourses = async () => {
    const courses = await getCourses();
    return (
       <div className='container mx-auto'>
            <h2 className='text-2xl mt-5 mb-2.5 font-bold text-center'>All Courses</h2>
         <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            
            {
                courses.map(course => <PopularCourse key={course.id} course={course}></PopularCourse>)
            }

        </div>
       </div>
    );
};

export default AllCourses;