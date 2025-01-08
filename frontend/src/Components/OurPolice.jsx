import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolice = () => {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {/* Easy Exchange Policy */}
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 mb-4"
            src={assets.exchange_icon}
            alt="Exchange Policy Icon"
          />
          <p className="font-semibold text-lg text-gray-800">Easy Exchange Policy</p>
          <p className="text-sm text-gray-600 mt-2">
            We offer a hassle-free exchange policy for your convenience.
          </p>
        </div>

        {/* 7-Day Return Policy */}
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 mb-4"
            src={assets.quality_icon}
            alt="Return Policy Icon"
          />
          <p className="font-semibold text-lg text-gray-800">7-Day Return Policy</p>
          <p className="text-sm text-gray-600 mt-2">
            Enjoy a 7-day free return policy for a seamless shopping experience.
          </p>
        </div>

        {/* Best Customer Service */}
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 mb-4"
            src={assets.support_img}
            alt="Customer Service Icon"
          />
          <p className="font-semibold text-lg text-gray-800">Best Customer Service</p>
          <p className="text-sm text-gray-600 mt-2">
            We provide 24/7 customer support to assist you anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolice;
