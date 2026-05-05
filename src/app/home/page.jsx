import Image from "next/image";
import heroImg from '@/assets/freelancer.jpg'
import { getCourses } from "@/lib/getfiles";
import PopularCourse from "@/components/PopularCourse";
import Hero from "@/components/Hero";
import Link from "next/link";

export default async function Home() {
const courses = await getCourses();

  return (
    <div>
      <Hero></Hero>
    <div className="container mx-auto">
      <h2 className="md:text-3xl text-xl font-bold text-center my-6">Top 3 Highest Rated Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-3 gap-4">
         {
         courses.sort().slice(0,3).map(course => <PopularCourse key={course.id} course={course}></PopularCourse>)
       }

      
      </div>
     <Link href={'/allcourse'}>  <h2 className="text-center mt-3 text-blue-700 hover:text-blue-800 cursor-pointer">Show all courses</h2></Link>
    </div>
    </div>
    
  );
}
