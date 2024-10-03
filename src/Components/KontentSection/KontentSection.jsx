import React from 'react'
//css
import './KontentSection.css'
import { ArrowRight } from 'react-bootstrap-icons'

function KontentSection({img, date, time, title , subtitle }) {
    return (
        <>
            <div className='content-card'>
                <div className='content-card__img'>
                    <img src={img} className='img-fluid' alt="img is not defiend" />
                </div>
                <div className='content-card__info d-flex flex-column justify-content-between'>
                    <h5>{date} | {time}</h5>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                    <p className='content-card__link mb-0'>Read More <ArrowRight/></p>
                </div>
            </div>
        </>
    )
}

export default KontentSection
