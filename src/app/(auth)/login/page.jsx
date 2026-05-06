'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const handleLogin = async (datas) => {
       
         const {data, error} = await authClient.signIn.email({
            email: datas.email,
            password: datas.password,
            callbackURL: "/"
         })
          data? alert('Registration Successful') : error? alert(`${error.message}`) :""
      };

      const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex justify-center items-center h-[100vh]">
     <form onSubmit={handleSubmit(handleLogin)}>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="text-center text-xl font-semibold mb-3">
          Login to your account
        </h2>

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


        <button className="btn bg-[#2FA084] text-white mt-4">Login</button>
         <h2 className="text-center mt-2">
            Don't have any account?{" "}
            <Link href={'/register'} className="text-[#2FA084] hover:text-green-900">
              Register
            </Link>
          </h2>

           <h2 className="text-center">OR</h2>
                       <button  className=' btn border border-[#2FA084] text-[#2FA084]'><FaGoogle /> Login with Google</button>
      </fieldset>
     </form>
    </div>
  );
};

export default LoginPage;
