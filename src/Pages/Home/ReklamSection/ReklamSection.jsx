import React from 'react'
//css
import './ReklamSection.css'
//images
import reklamImage from '../../../../public/Images/banner-img.png'

function ReklamSection() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 d-flex  align-items-center reklam-card'>
                        <div className='reklam-card__image'>
                            <img src={reklamImage} className='img-fluid' alt="" />
                        </div>
                        <div className='reklam-card__info text-end'>
                            <h4>Styling Trends & much more</h4> 
                            <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                            <button className='btn main-button px-4 py-2'>Find More</button>
                        </div>
                    </div>
                    <div className='col-6 d-flex align-items-center'>
                        <div className='reklam-card__image'>
                            <img src={reklamImage} className='img-fluid' alt="" />
                        </div>
                        <div className='reklam-card__info'>
                            <h4>Styling Trends & much more</h4>
                            <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReklamSection
