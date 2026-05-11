"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const handleRegister = async (datas) => {
   
     const {data, error} = await authClient.signUp.email({
        name: datas.name,
        email: datas.email,
        password: datas.password,
        image: datas.photo,
     })
      if(data){
          toast.success('Registration Successful');
          setTimeout(() => {
            router.push("/login");
          }, 1000);
      } 
       error? toast.error(`${error.message}`) :""
  };

  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex justify-center items-center my-10">
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className="text-center text-xl font-semibold mb-3">
            Register a account
          </h2>
          <label className="label text-black">Your Name</label>
          <input type="text" className="input" placeholder="Your name" 
           {...register("name", { required: "This field is required" })}/>
           {
              errors.name && <p className="text-red-500">{errors.name.message}</p>
           }

          <label className="label text-black">Photo Url</label>
          <input type="text" className="input" placeholder="Photo url" 
            {...register("photo", { required: "This field is required" })}/>
            {
              errors.photo && <p className="text-red-500">{errors.photo.message}</p>
            }

          <label className="label text-black">Email</label>
          <input type="email" className="input" placeholder="Email" 
          {...register("email", { required: "Email is required" })}/>
           {
              errors.email && <p className="text-red-500">{errors.email.message}</p>
            }

          <label className="label text-black">Password</label>
          <input type={isShow? 'text' : 'password'} className="input" placeholder="Password" 
           {...register("password", { required: "Password is required" })}/>
           <span onClick={() => setIsShow(!isShow)} className="cursor-pointer"><h2>Show Password</h2></span>
          {
              errors.password && <p className="text-red-500">{errors.password.message}</p>
            }

          <button className="btn bg-[#2FA084] text-white mt-4">Register</button>
          <h2 className="text-center mt-2">
            Have any account?{" "}
            <Link
              href={"/login"}
              className="text-[#2FA084] hover:text-green-900"
            >
              Login
            </Link>
          </h2>

          <h2 className="text-center">OR</h2>
          <button className=" btn border border-[#2FA084] text-[#2FA084]">
            <FaGoogle /> Login with Google
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
