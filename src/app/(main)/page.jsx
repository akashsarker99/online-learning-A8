import { getCourses } from "@/lib/getfiles";
import PopularCourse from "@/components/shared/PopularCourse";
import Hero from "@/components/Hero";
import Link from "next/link";
import Instructor from "@/components/Instructor";
import LearningTips from "@/components/LearningTips";
import NewReleases from "@/components/NewReleases";

export default async function Home() {
const courses = await getCourses();

  return (
    <div>
      <Hero></Hero>
    <div className="container mx-auto">
      <h2 className="md:text-3xl text-xl font-bold text-center mt-20">Top 3 Highest Rated Courses</h2>
       <p className="text-gray-500 mt-2 text-center mb-6">
    Explore our highest-rated courses and learn from industry experts with confidence.
  </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-3 gap-4">
         {
         courses.sort((a,b) => b.rating - a.rating).slice(0,3).map(course => <PopularCourse key={course.id} course={course}></PopularCourse>)
       }

      
      </div>
     <Link href={'/allcourse'}>  <h2 className="text-center mt-3 text-[#2FA084] font-semibold hover:text-green-800 cursor-pointer">Show all courses</h2></Link>
    </div>

    <div>
        <NewReleases></NewReleases>
    </div>

    <div>
        <LearningTips></LearningTips>
    </div>

     <div className="mt-20">
      <h1 className="text-center font-bold text-2xl ">Top Instructors</h1>
      <p className="text-gray-500 my-2 text-center mb-7">
    Learn from top instructors and build real-world skills with expert guidance.
  </p>
      <Instructor></Instructor>
    </div>
    </div>
    
  );
}
