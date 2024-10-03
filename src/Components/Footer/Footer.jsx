import React from 'react'
//css
import './Footer.css'
//images
import f1 from '../../../public/Images/f1.png'
import f2 from '../../../public/Images/f2.png'
import f3 from '../../../public/Images/f3.png'
import logo from '../../../public/Images/Group.png'
import click from '../../../public/Images/click.png'
//icon images
import location from '../../../public/Images/Location.png'
import message from '../../../public/Images/Message.png'
import calling from '../../../public/Images/Calling.png'
//bootstrap
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Facebook, GeoAlt, Instagram, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='py-5'>
                <div className='footer-first__floor pt-5 pb-4'>
                    <div className='container'>
                        <div className="row g-3">
                            <div className="col-xl-3 col-sm-6 footer-card border-end text-center text-md-start">
                                <img src={f1} className='img-fluid' alt="img is not defiend" />
                            </div>
                            <div className="col-xl-3 col-sm-6 footer-card border-end text-center text-md-start">
                                <img src={f2} alt="img is not defiend" />
                            </div>
                            <div className="col-xl-3 col-sm-6 footer-card text-center text-md-start">
                                <img src={f3} alt="img is not defiend" />
                            </div>
                            <div className='col-xl-3 col-sm-6 text-center text-md-start'>
                                <h5 className='footer-email__header mb-3'>Would you like to join newsletters?</h5>
                                <ButtonToolbar className="mb-3 justify-content-center justify-content-md-start" aria-label="Toolbar with Button groups">
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="enter your email address..."
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                            className='shadow '
                                        />
                                        <InputGroup.Text className='main-button' id="btnGroupAddon">Join</InputGroup.Text>
                                    </InputGroup>
                                </ButtonToolbar>
                                <p className='footer-email__text mb-0 mt-4'>
                                    We usually post offers and challenges in newsletter.
                                    We’re your online houseplant destination. We offer
                                    a wide range of houseplants and accessories shipped directly from our
                                    (green)house to yours!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-second__floor py-4'>
                    <div className="container">
                        <div className="d-flex flex-column flex-md-row  addres-section align-items-center">
                            <div>
                                <img src={logo} className='img-fluid' alt="imis not defiend" />
                            </div>
                            <div>
                                <a href="#">
                                    <img src={location} alt="img is not defiend" /><p className='d-inline'>70 West Buckingham Ave.</p>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={message} alt="img is not defiend" /><p className='d-inline'>contact@greenshop.com</p>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={calling} alt="img is not defiend" /><p className='d-inline'>+998900072904</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-first__floor py-xl-4 py-3'>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-6 footer-links">
                                <h3>My Account</h3>
                                <ul>
                                    <li><NavLink>My Account</NavLink> </li>
                                    <li><NavLink>Our Strores</NavLink> </li>
                                    <li><NavLink>Contact Us</NavLink> </li>
                                    <li><NavLink>Career</NavLink> </li>
                                    <li><NavLink>Specials</NavLink> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-6 footer-links">
                                <h3>Help & Guide</h3>
                                <ul>
                                    <li><NavLink>Help Center</NavLink> </li>
                                    <li><NavLink>How to Buy</NavLink> </li>
                                    <li><NavLink>Shipping & Delivery</NavLink> </li>
                                    <li><NavLink>Product Policy</NavLink> </li>
                                    <li><NavLink>How to Return</NavLink> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-6 footer-links">
                                <h3>Categories</h3>
                                <ul>
                                    <li><NavLink>House Plants</NavLink> </li>
                                    <li><NavLink>Potter Plants</NavLink> </li>
                                    <li><NavLink>Seeds</NavLink> </li>
                                    <li><NavLink>Small Plants</NavLink> </li>
                                    <li><NavLink>Accessories</NavLink> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-6 d-flex flex-column justify-content-between">
                                <h3>Social Media</h3>
                                <div className='social-icons'>
                                    <a href="" target='_blank'><Facebook  size={20} /></a>
                                    <a href="https://www.instagram.com/suvonov_javohir1/" target='_blank'><Instagram size={20} /></a>
                                    <a href="" target='_blank'><Twitter   size={20} /></a>
                                    <a href="" target='_blank'><Linkedin  size={20} /> </a>
                                    <a href="" target='_blank'><Youtube   size={20} /></a>
                                </div>
                                <h3>We accept</h3>
                                <img src={click} className='img-fluid' alt="img is not defined" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
