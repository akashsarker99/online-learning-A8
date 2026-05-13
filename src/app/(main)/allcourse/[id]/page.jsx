import { getCourses } from "@/lib/getfiles";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const CourseDetails = async ({params}) => {
    const {id} = await params;
   const courses = await getCourses();
    const session = await auth.api.getSession({
        headers: await headers()
    })

   if(!session){
     redirect('/login')
   }

const detailCard = courses.find(course => course.id == id);

const {title, instructor, duration, rating, level, description, image, category } = detailCard;
    return (
        <div className='w-10/12 mx-auto'>
            <h2 className="text-2xl font-bold text-center my-3.5">Course Detail</h2>
            <div className="card bg-base-100 shadow-md border border-gray-300">
  <div className="flex flex-col sm:flex-row sm:gap-24 gap-3.5 ">
     <figure>
      <Image className='rounded-xl' src={image} width={500} height={400} alt={title}></Image>
  </figure>
  <div className="text-center space-y-3">
    <h2 className="sm:text-xl font-bold text-lg ">{title}</h2>
    <p className='font-semibold'><span className='font-bold'>Instructor: </span>{instructor}</p>
    <p className='font-semibold'><span className='font-bold'>Duration: </span>{duration}</p>
    <p className='font-semibold'><span className='font-bold'>Category: </span>{category}</p>
    <p className='font-semibold'><span className='font-bold'>Level: </span>{level}</p>
    <p className='font-semibold'><span className='font-bold'>Category: </span>{category}</p>
    <p className='font-semibold'>{description}</p>
    <p className='font-semibold flex justify-center items-center gap-1.5'><span className='font-bold'>Rating: </span>{rating} <FaStar /></p>
   
  </div>
  </div>
</div>
        </div>

    );
};

export default CourseDetails;