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
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Your name" />

          <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="Photo url" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Register</button>
          <h2 className="text-center mt-2">
            Have any account?{" "}
            <Link href={'/register'} className="text-blue-600" >
              Login
            </Link>
          </h2>

          <h2 className="text-center">OR</h2>
             <button  className=' btn border border-blue-500 text-blue-500'><FaGoogle /> Login with Google</button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
