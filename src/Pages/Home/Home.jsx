import React from 'react'
import BannerSection from './Banner/BannerSection'
import ShopSection from './ShopSection/ShopSection'
import BlogSection from './BlogSection/BlogSection'

function Home() {
  return (
    <div className='container'>
        <BannerSection/>
        <ShopSection/>
        <BlogSection/>
    </div>
  )
}

export default Home
