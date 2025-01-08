import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className=''>
      <div className='flex flex-col sm:flex-row gap-14 my-10 mt-40 text-sm px-4 sm:px-10 lg:px-16'>
        <div className='mb-8 sm:mb-0'>
          <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias impedit, harum iste quam laboriosam officiis nisi, odio veniam commodi esse dignissimos! Repudiandae numquam pariatur dolores. Quod illum natus minima.
          </p>
        </div>
        <div className='mb-8 sm:mb-0'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Mobile: 01728619254</li>
            <li>Email: shourovhasan001@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className='bg-gray-200'>
        <hr />
        <p className='py-5 text-sm text-center text-gray-600'>
          Copyright 2024@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
