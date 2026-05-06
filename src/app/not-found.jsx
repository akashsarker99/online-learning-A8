import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
       <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-7xl font-bold text-[#2FA084]">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="btn bg-[#2FA084] text-white mt-6">
          Back To Home
        </button>
      </Link>
    </div>
    );
};

export default NotFoundPage;