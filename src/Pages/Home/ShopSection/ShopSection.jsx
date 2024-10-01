import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './ShopSection.css'
import TovarBox from '../../../Components/TovarBox/TovarBox'

function ShopSection() {
    return (
        <>
            <div className="container">
                <div className="row py-5 gx-5">
                    <div className="col-3 bg-body-tertiary">
                        <h3 className='mb-3'>Categories</h3>
                        <ul className='categories'>
                            <li>
                                <NavLink to='housePlants' className="d-flex justify-content-between"><p>House Plants</p> <p>(33)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='potterPlants' className="d-flex justify-content-between"><p>Potter Plants</p> <p>(12)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='seeds' className="d-flex justify-content-between"><p>Seeds</p> <p>(65)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='smallPlants' className="d-flex justify-content-between"><p>Small Plants</p> <p>(39)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='bigPlants' className="d-flex justify-content-between"><p>Big Plants</p> <p>(23)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='succulents' className="d-flex justify-content-between"><p>Succulents</p> <p>(17)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='trerrariums' className="d-flex justify-content-between"><p>Trerrariums</p> <p>(19)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='gardening' className="d-flex justify-content-between"><p>Gardening</p> <p>(13)</p> </NavLink>
                            </li>
                            <li>
                                <NavLink to='accessories' className="d-flex justify-content-between"><p>Accessories</p> <p>(18)</p> </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='col-9'>
                        <ul className='d-flex shop-section__links'>
                            <li><NavLink to='/'>All Plants</NavLink></li>
                            <li><NavLink to='newArivvals'>New Arrivals</NavLink></li>
                            <li><NavLink to='sale'>Sale</NavLink></li>
                        </ul>
                        <div className="row g-5">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSection
