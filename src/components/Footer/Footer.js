import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div id='footer' class='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='copyright'>
                &copy;copyright 2020 | Info Penerjemah
              </div>
              <div className='credits'>
                <p>
                  {' '}
                  Powered by{' '}
                  <a
                    href='https://prasta.id/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Prasta
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
