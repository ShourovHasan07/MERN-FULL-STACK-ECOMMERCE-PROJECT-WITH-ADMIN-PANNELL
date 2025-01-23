import React from 'react'
import Title from '../Components/Title'
import { assets } from './../assets/frontend_assets/assets';
import NewsletterBox from './../Components/NewsletterBox';

function About() {
  return (
    <div>

    <div className=' text-3xl font-bold text-center pt-8 border-t-2 ' >
      <Title  text1={'ABOUT'} text2={'US'} >
        
      </Title>
    </div>



    <div  className=' my-10 flex gap- 3  md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]'  src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4  text-gray-600 ' >
    <p>Welcome to our shop, where innovation meets passion. We are dedicated to revolutionizing your shopping experience.</p>
    <p>At our store, we believe that every customer deserves the best. Our commitment to quality and service is at the heart of everything we do.</p>
    <b className='text-gray-800' >Our Mission</b>
    <p>Our mission at Forever is to empower customers with choice and convenience. We strive to provide a seamless shopping experience, offering a diverse range of products that cater to your unique needs.</p>
</div>

    </div>


    <div className=' text-xl py-4 ' >
   

   <Title text1={'WHY'} text2={'CHOOSE US '} ></Title>

    </div>

    <div className='flex    md:flex-row text-sm mb-20' >
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5' >
        <b>Quality Assurance:</b>
        <p className='text-gray-600' >we meticulously select and vet each product to..... </p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5' >
        <b>Convenience:</b>
        <p className='text-gray-600' >we meticulously select and vet each product to..... </p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5' >
        <b>Exceptional Customer service :</b>
        <p className='text-gray-600' >we meticulously select and vet each product to..... </p>
      </div>
    </div>
  
       <NewsletterBox/>
       
    </div>
  )
}

export default About