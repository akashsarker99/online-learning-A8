

export const getCourses =  async()=>{
  const res = await fetch('https://online-learning-a8.vercel.app/data.json',{cache:"no-store"});
  const data = await res.json();
  return data;
}

export const getInstructors = async()=>{
  const res = await fetch('https://online-learning-a8.vercel.app/instructors.json',{cache:"no-store"});
  const data = await res.json();
  return data;

}