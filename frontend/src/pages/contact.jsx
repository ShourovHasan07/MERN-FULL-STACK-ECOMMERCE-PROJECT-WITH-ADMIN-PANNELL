import React from "react";

import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import NewsletterBox from './../Components/NewsletterBox';

const contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US "} />


        <div className="my-10 flex flex-col  justify-center md:flex-row gap-10 mb-28 " >
          <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
          <div className="flex flex-col justify-center items-start gap-6" >
            <p className="text-gray-500 font-semibold text-2xl  ">our store </p>
            <p className="text-gray-500" > Dhaka , Bangladesh </p>
            <p className="text-gray-500"> Mobile : 01728619254  <br /> Email : shourovhasan001@gmail.com  </p>
             <button className=" border border-black px-5 py-2 rounded font-light hover:bg-black hover:text-white "> Explore jobs  </button>
          </div>
        </div>
      </div>
     <NewsletterBox/>

    </div>
  );
};

export default contact;
