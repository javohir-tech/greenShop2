import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

// navbar layout css
import './NavbarLayout.css'

// images
import navbarLogo from '../../../public/Images/Group.png'
import serachImg from '../../../public/Images/searchImg.png'
import Market from '../../../public/Images/Vector.png'
import login from '../../../public/Images/Logout.png'

//modal
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


function NavbarLayout() {
    const expand = 'xl';

    const [showOffcanvas, setShowOffcanvas] = useState(false)

    const handleOffcanvas = () => setShowOffcanvas(false);
    const handleOpen = () => setShowOffcanvas(true)

    //modal js
    const [show, setShow] = useState(false);

    const [modalMarket, setModalMarket] = useState(false)

    const MarketModal = () => {
        setShow(true);
        setModalMarket(true)
    }

    const LoginModal = () => {
        setShow(true)
    }

    const MarketModalClose = () => {
        setShow(false)
        setModalMarket(false)
    }

    return (
        <>
            <Navbar key={expand} expand={expand} className="mb-3 border-">
                <div className='container pb-2 border-bottom border-success'>
                    <NavLink to='/'>
                        <img src={navbarLogo} className='img-fluid' alt="img is not defiend" />
                    </NavLink>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleOpen} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        onHide={handleOffcanvas}
                        show={showOffcanvas}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                        className="custom-offcanvas"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center align-items-xl-center flex-grow-1 pe-3 w-50">
                                <NavLink className='me-5 navbar-link' onClick={handleOffcanvas} to="/">Home</NavLink>
                                <NavLink className='me-5 navbar-link' onClick={handleOffcanvas} to="/shop">Shop</NavLink>
                                <NavLink className='me-5 navbar-link' onClick={handleOffcanvas} to="/plants">Plant Care</NavLink>
                                <NavLink className='me-5 navbar-link' onClick={handleOffcanvas} to="/blogs">Blogs</NavLink>
                            </Nav>
                            <div>
                                <img className='me-3' src={serachImg} alt="img is not defined" />
                                <img onClick={MarketModal} className='me-3' src={Market} alt="img is not defined" />
                                <button className='btn  main-button' onClick={modalMarket ? null : LoginModal}><img src={login} className='me-2' alt="img is not defined" />Login</button>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* modal  */}
                    {
                        modalMarket
                            ?
                            <Modal show={show} onHide={MarketModalClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal market</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={MarketModalClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={MarketModalClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            :
                            <Modal show={show} onHide={MarketModalClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>login market</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={MarketModalClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={MarketModalClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                    }
                </div>
            </Navbar>
        </>
    )
}

export default NavbarLayout
