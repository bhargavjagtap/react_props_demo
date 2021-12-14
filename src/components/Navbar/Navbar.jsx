import React from 'react'
import logo from '../../images/airbnb-logo.png'
import './navbar.css'

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
          <a className="navbar-brand d-flex justify-content-center" href="#">
            My Travel journal
          </a>
        </nav>
      </>
    );
}

export default Navbar
