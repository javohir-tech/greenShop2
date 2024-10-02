import React, { useState } from 'react'
import './TovarBox.css'
//images
import { Cart4, Heart, Search } from 'react-bootstrap-icons'

function TovarBox({tovarName, tovarSumma, tovarImg}) {

    
    return (
        <div className='text-center  tovar-box'>
            <div className='tovar-box__img mb-3'>
                <img src={tovarImg} className='img-fluid' alt="img is not defiend" />
                <div className='tovar-box__icons'>
                    <div className=' d-flex justify-content-center'>
                        <Cart4 />
                        <Heart />
                        <Search />
                    </div>
                </div>
            </div>
            <p className='tovar-name text-start'>{tovarName}</p>
            <p className='tovar-summa text-start'>{tovarSumma}</p>
        </div>
    )
}

export default TovarBox
