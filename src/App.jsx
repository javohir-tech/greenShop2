import { useState } from 'react'
import './App.css'
/* bootstrap css */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLayout from './Components/Navbar/NavbarLayout';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <>
      <NavbarLayout/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
