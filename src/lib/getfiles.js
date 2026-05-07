

export const getCourses =  async()=>{
  const res = await fetch('http://localhost:3000/data.json',{cache:"no-store"});
  const data = await res.json();
  return data;
}

export const getInstructors = async()=>{
  const res = await fetch('http://localhost:3000/instructors.json',{cache:"no-store"});
  const data = await res.json();
  return data;

}