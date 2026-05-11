'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProfile = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleUpdate = async (datas)=>{
     const {data, error} = await authClient.updateUser({
    image: datas.photo,
    name: datas.name,
})
      }
    
    return (
        <div className='text-center'>
            <h2 className='text-center font-bold mt-7 text-2xl'>Update Your Profile</h2>

         <div className='flex justify-center mt-5'>
             <form onSubmit={handleSubmit(handleUpdate)}>
           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <label className="label text-black">Enter a new name:</label>
          <input type="text" className="input" placeholder="Your name" 
           {...register("name", { required: "This field is required" })}/>
           {
              errors.name && <p className="text-red-500">{errors.name.message}</p>
           }

          <label className="label text-black">Photo Url</label>
          <input type="text" className="input" placeholder="Photo url"  
            {...register("photo", { required: "This field is required" , 
                pattern: {
                value: /^https?:\/\/.+/i,
                message: "Enter a valid image URL"
              }})}/>
            {
              errors.photo && <p className="text-red-500">{errors.photo.message}</p>
            }
            <button className='btn mt-3 bg-[#2FA084] text-white'>Update</button>
           </fieldset>
          </form>
         </div>
            
        </div>
    );
};

export default UpdateProfile;