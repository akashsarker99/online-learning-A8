'use client'
import React, { useState } from 'react';
import PopularCourse from './shared/PopularCourse';

const AllCourseContainer = ({courses}) => {
    const [search, setSearch] = useState();
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const handleSearch = (e) =>{
        e.preventDefault();
      const searchCourses = courses.filter(course => course.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredCourses(searchCourses);
    }
    console.log(filteredCourses)
    return (
        <div>
            <div className='container mx-auto'>
        <div className='flex justify-center mb-8'>


      </div>
            <h2 className='text-2xl mt-5 mb-2.5 font-bold text-center'>All Courses</h2>

           <form className='flex justify-center my-8'>
             <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Courses.." 
   onChange={(e) => setSearch(e.target.value)}/>
</label>
<button onClick={handleSearch} className='btn ml-1.5 bg-[#2FA084] hover:bg-[#148d6f] text-white'>Search</button>
           </form>
         <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            
            {
               filteredCourses.map(course => <PopularCourse key={course.id} course={course}></PopularCourse>)
            }

        </div>
       </div>
        </div>
    );
};

export default AllCourseContainer;