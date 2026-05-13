import AllCourseContainer from '@/components/AllCourseContainer';
import { auth } from '@/lib/auth';
import { getCourses } from '@/lib/getfiles';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const AllCourses = async () => {
    const courses = await getCourses();
    const session = await auth.api.getSession({
        headers: await headers()
    })

   if(!session){
     redirect('/login')
   }

    return (
       <AllCourseContainer courses={courses}></AllCourseContainer>    );
};

export default AllCourses;