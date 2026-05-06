import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className="text-center text-xl font-semibold mb-3">
            Register a account
          </h2>
          <label className="label text-black">Your Name</label>
          <input type="text" className="input" placeholder="Your name" />

          <label className="label text-black">Photo Url</label>
          <input type="text" className="input" placeholder="Photo url" />

          <label className="label text-black">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label text-black">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn bg-[#2FA084] text-white mt-4">Register</button>
          <h2 className="text-center mt-2">
            Have any account?{" "}
            <Link href={'/login'} className="text-[#2FA084] hover:text-green-900" >
              Login
            </Link>
          </h2>

          <h2 className="text-center">OR</h2>
             <button  className=' btn border border-[#2FA084] text-[#2FA084]'><FaGoogle /> Login with Google</button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
