import React from 'react'
import './SlideItem.css'
//image

import bannerImg from '../../../public/Images/banner-img.png'

export default function SlideItem() {
    return (
        <div className='row align-items-center'>
            <div className='col-6 banner-section__info'>
                <p className='banner-section__title '>Welcome to GreenShop</p>
                <h1 className='my-3'>
                    Let’s Make a
                    Better <span> Planet</span>
                </h1>
                <p className='banner-section__subtitle'>
                    We are an online plant shop offering a wide range of cheap and trendy plants.
                    Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='main-button btn px-3 py-2 button-sm'>SHOP NOW</button>
            </div>
            <div className='col-6 text-center'>
                <img src={bannerImg} className='img-fluid' alt="img is not defiend" />
            </div>
        </div>
    )
}
