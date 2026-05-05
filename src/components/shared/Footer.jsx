import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mt-12'>
            <footer className='bg-[#101727] '>
               <section className='container mx-auto flex flex-col md:flex-row 
                      justify-around gap-8  p-10 '>
                   <div className='text-center md:text-left lg:w-2xs'>
                    <h2 className='text-white text-2xl sm:text-3xl font-bold mb-2'>SkillSphere</h2>
                    <p className='text-white text-sm opacity-90'>A modern online learning platform where users can explore courses,watch lessons,and enroll in skill-based programs like Web Development, Design, Marketing, and more.
</p>
                </div>
               
                <div className='text-white text-center'>
                    <h2 className='text-xl font-semibold'>Contact us</h2>
                    <p>+880 12345-6789</p>
                    <p>skillsphere@gmail.com</p>
                </div>
   
              
                <div className='text-center md:text-left md:ml-8'>
                    <h2 className='text-lg sm:text-xl font-semibold text-white mb-2'>Social Links</h2>
                     <div className='flex gap-4 justify-center md:justify-start'>
                        <FaInstagram className='text-white text-2xl sm:text-3xl hover:text-pink-600'></FaInstagram>
                    <FaFacebook className='text-white text-2xl sm:text-3xl hover:text-blue-600'></FaFacebook>
                    <FaSquareXTwitter className='text-white text-2xl sm:text-3xl hover:text-gray-400'></FaSquareXTwitter>
                     </div>
                </div>
                
               </section>

               <div className='border-t border-gray-400 py-4 px-8 container mx-auto flex flex-col md:flex-row items-center gap-3 md:justify-between'>
                    <p className='text-white text-sm opacity-50'>&copy; 2026 SkillSphere. All rights reserved.</p>
                    <div className='flex gap-6'>
                     <p className='text-white text-sm opacity-50'>Privacy Policy</p>
                     <p className='text-white text-sm opacity-50'>Terms of Service</p>
                     <p className='text-white text-sm opacity-50'>Cookies</p>
                    </div>
               </div>
            </footer>
        </div>
    );
};

export default Footer;