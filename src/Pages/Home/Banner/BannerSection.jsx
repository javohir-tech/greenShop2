import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './BannerSection.css'

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

//images
import SlideItem from '../../../Components/SlideItem/SlideItem';

export default function BannerSection() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
