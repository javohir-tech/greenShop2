import React from 'react'
import BannerSection from './Banner/BannerSection'
import ShopSection from './ShopSection/ShopSection'
import ReklamSection from './ReklamSection/ReklamSection'
import Kontent from './Kontent/Kontent'


function Home() {
  return (
    <div className='container'>
      {/* banner section  */}
      <BannerSection />
      {/* Shop section  */}
      <ShopSection />
      {/* <ReklamSection/> */}
      <Kontent/>
    </div>
  )
}

export default Home
