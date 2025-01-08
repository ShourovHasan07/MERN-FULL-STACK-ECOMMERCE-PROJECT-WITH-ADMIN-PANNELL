import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolice from '../Components/OurPolice'
import NewsletterBox from '../Components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection/>
      <BestSeller></BestSeller>
      <OurPolice></OurPolice>
      <NewsletterBox></NewsletterBox> 
    </div>
  )
}

export default Home