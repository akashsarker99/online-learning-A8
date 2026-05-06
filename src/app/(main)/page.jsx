import { getCourses } from "@/lib/getfiles";
import PopularCourse from "@/components/PopularCourse";
import Hero from "@/components/Hero";
import Link from "next/link";
import Instructor from "@/components/Instructor";

export default async function Home() {
const courses = await getCourses();

  return (
    <div>
      <Hero></Hero>
    <div className="container mx-auto">
      <h2 className="md:text-3xl text-xl font-bold text-center my-6">Top 3 Highest Rated Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-3 gap-4">
         {
         courses.sort((a,b) => b.rating - a.rating).slice(0,3).map(course => <PopularCourse key={course.id} course={course}></PopularCourse>)
       }

      
      </div>
     <Link href={'/allcourse'}>  <h2 className="text-center mt-3 text-[#2FA084] font-semibold hover:text-green-800 cursor-pointer">Show all courses</h2></Link>
    </div>

    <div className="mt-12">
      <h1 className="text-center font-bold text-2xl mb-7">Top Instructors</h1>
      <Instructor></Instructor>
    </div>
    </div>
    
  );
}
