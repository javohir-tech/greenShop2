import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import data from '../../Data/Data'
import './PlantsDetail.css'
import { Heart } from 'react-bootstrap-icons'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../Pages/Home/Banner/BannerSection.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import TovarBox from '../TovarBox/TovarBox'


export default function PlantDetail() {
  const { id } = useParams()
  const plant = data.find(item => item.key === parseInt(id))
  if (!plant) {
    return <h2>tovar topilmadi</h2>
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const dataPlants = data

  const navigate  = useNavigate()

  const handleclick = (id) =>{
    navigate(`/plants/${id}`)
  }
  return (
    <>
      {/* <h1>{plant.tovar_name}</h1>
        <img src={plant.tovar_img} alt="" />
        <p>{plant.tovar_summa}</p> */}

      <div className="container">
        <div className="row">
          <div className="col-6 d-flex ">
            <div className='left-images d-flex flex-column justify-content-between'>
              <img src={plant.tovar_img} alt="img is not definet" />
              <img src={plant.tovar_img} alt="img is not definet" />
              <img src={plant.tovar_img} alt="img is not definet" />
              <img src={plant.tovar_img} alt="img is not definet" />
            </div>
            <div className='flex-grow-1 text-center'>
              <img src={plant.tovar_img} className='tovar-detail__img' alt="" />
            </div>
          </div>
          <div className="col-6">
            <h1>{plant.tovar_name}</h1>
            <div className='d-flex justify-content-between'>
              <p>{plant.tovar_summa}</p>
              <p>19 Customer Review</p>
            </div>
            <hr />
            <div>
              <h3>Short Desoription:</h3>
              <p>
                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
              </p>
            </div>
            <div>
              <h3>Size:</h3>
              <button className='rounded-circle second-button btn button-circle'>S </button>
              <button className='rounded-circle second-button btn button-circle'>M </button>
              <button className='rounded-circle second-button btn button-circle'>L </button>
              <button className='rounded-circle second-button btn button-circle'>Xl</button>
            </div>
            <div className='py-3 d-flex align-items-center justify-content-between'>
              <button className='main-button rounded-pill p-2'>-</button>
              <p className='m-0'>1</p>
              <button className='main-button rounded-pill p-2'>+</button>
              <button className='main-button btn px-5 py-2'>Buy NOW</button>
              <button className='second-button btn px-5 py-2'>Add to cart</button>
              <button className='second-button btn px-5 py-2'><Heart /> </button>
            </div>
          </div>
        </div>

        <div className='py-5 mt-5'>
          <h2>Product Description</h2>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            <br />
            <br />

            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
          </p>
          <h4>
            Living Room:
          </h4>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <h4>Dining Room:</h4>
          <p>
            The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
          </p>
          <h4>Office:</h4>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            FreeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            
            {dataPlants.map((item)=>(
              <SwiperSlide className='shop-section__slide py-5' onClick={()=>handleclick(item.key)}>
              <TovarBox
                tovarName={item.tovar_name}
                tovarSumma={item.tovar_summa}
                tovarImg={item.tovar_img}
              />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
