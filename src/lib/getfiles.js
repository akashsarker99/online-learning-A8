

export const getCourses =  async()=>{
  const res = await fetch('https://online-learning-a8-pl5q.vercel.app/data.json',{cache:"no-store"});
  const data = await res.json();
  return data;
}

export const getInstructors = async()=>{
  const res = await fetch('https://online-learning-a8-pl5q.vercel.app/instructors.json',{cache:"no-store"});
  const data = await res.json();
  return data;

}