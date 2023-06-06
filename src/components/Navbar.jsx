import React from "react";
import Logo from "../assets/logo-new.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='logo' style={{ height: 32 }} />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0 mr-3'>
            <li className='nav-item'>
              <Link className='nav-link active' href='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                IPL
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                MENS INTERNATIONAL
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                WOMENS INTERNATIONAL
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                DOMESTIC
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                T20 LEAGUES
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                SOCIAL
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// #IPL2022
// MENS INTERNATIONAL
// WOMENS INTERNATIONAL
// DOMESTIC
// T20 LEAGUES
// #SOCIAL
