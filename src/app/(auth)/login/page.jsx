import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
     <form>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h2 className="text-center text-xl font-semibold mb-3">
          Login to your account
        </h2>

        <label className="label text-black">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label text-black">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn bg-[#2FA084] text-white mt-4">Login</button>
         <h2 className="text-center mt-2">
            Don't have any account?{" "}
            <Link href={'/register'} className="text-[#2FA084] hover:text-green-900">
              Register
            </Link>
          </h2>
      </fieldset>
     </form>
    </div>
  );
};

export default LoginPage;
