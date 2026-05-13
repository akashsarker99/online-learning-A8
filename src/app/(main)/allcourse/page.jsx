import AllCourseContainer from '@/components/AllCourseContainer';
import { getCourses } from '@/lib/getfiles';

const AllCourses = async () => {
    const courses = await getCourses();

    return (
       <AllCourseContainer courses={courses}></AllCourseContainer>    );
};

export default AllCourses;