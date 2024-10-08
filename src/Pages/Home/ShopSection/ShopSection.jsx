import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './ShopSection.css'
import PriceRangeSlider from '../../../Components/MyRange/MyRange'

//images
import superSale from '../../../../public/Images/SuperSale.png'
import reklamImg from '../../../../public/Images/banner-img.png'

function ShopSection() {
    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3 d-none d-md-block pe-4 left-content">
                        <div className='bg-body-tertiary'>
                            <h3 className='mb-3 py-3'>Categories</h3>
                            <ul className='categories'>
                                <li>
                                    <NavLink to='housePlants' className="d-flex justify-content-between"><p>House Plants</p> <p>(4)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='potterPlants' className="d-flex justify-content-between"><p>Potter Plants</p> <p>(2)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='seeds' className="d-flex justify-content-between"><p>Seeds</p> <p>(4)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='smallPlants' className="d-flex justify-content-between"><p>Small Plants</p> <p>(3)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='bigPlants' className="d-flex justify-content-between"><p>Big Plants</p> <p>(3)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='succulents' className="d-flex justify-content-between"><p>Succulents</p> <p>(1)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='trerrariums' className="d-flex justify-content-between"><p>Trerrariums</p> <p>(2)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='gardening' className="d-flex justify-content-between"><p>Gardening</p> <p>(3)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='accessories' className="d-flex justify-content-between"><p>Accessories</p> <p>(6)</p> </NavLink>
                                </li>
                            </ul>
                            <h3 className='mb-3 py-3'>Price Range</h3>
                            <div>
                                <PriceRangeSlider />
                            </div>
                            <h3 className='mb-3 py-3'>Size</h3>
                            <ul className='categories mb-0'>
                                <li>
                                    <NavLink to='small' className="d-flex justify-content-between"><p>Small</p> <p>(2)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='medium' className="d-flex justify-content-between"><p>Medium</p> <p>(4)</p> </NavLink>
                                </li>
                                <li>
                                    <NavLink to='large' className="d-flex justify-content-between"><p>Large</p> <p>(3)</p> </NavLink>
                                </li>
                            </ul>
                            
                        </div>
                        <div className='reklam-box d-none d-xl-block mt-0'>
                            <img src={superSale} className='img-fluid' alt="img is not defiend" />
                            <h2 className='text-center'>UP TO 75% OFF</h2>
                            <img src={reklamImg} className='img-fluid' alt="img is not defiend" />
                        </div>
                    </div>
                    <div className=' col-md-9 ps-3'>
                        <ul className='d-flex shop-section__links py-2 ps-0'>
                            <li><NavLink to='/' className='shop-section__activeLink'>All Plants</NavLink></li>
                            <li><NavLink to='newArivvals'>New Arrivals</NavLink></li>
                            <li><NavLink to='sale'>Sale</NavLink></li>
                        </ul>
                        <div className="row g-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSection
