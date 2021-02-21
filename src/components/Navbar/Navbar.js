import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='container-fluid px-md-5 pt-4 pt-md-5 text-center'>
        <div className='navbar-brand'>
          Info
          <span>Penerjemah</span>
          <small className='text-dark'> Kantor Penerjemah Resmi </small>
        </div>
      </div>

      <nav
        className='navbar navbar-expand-lg navbar-dark main-navbar bg-dark main-navbar-light'
        id='a-navbar'
      >
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#my-nav'
            aria-controls='my-nav'
            aria-expanded='false'
            aria-label='toggle-navigation'
          >
            <span className='fa fa-bars'>Menu</span>
          </button>
          <div className='collapse navbar-collapse' id='my-nav'>
            <ul className='navbar-nav m-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Beranda
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/lisan' className='nav-link'>
                  Lisan
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/dokumen' className='nav-link'>
                  Dokumen
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/legalisasi' className='nav-link'>
                  Legalisasi
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
