import React from 'react';
import './Whatsapp.css';

const Whatsapp = () => {
  return (
    <>
      <a
        href='https://wa.me/6287730764439'
        className='whatsapp_float'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i class='fab fa-whatsapp whatsapp-icon'></i>
      </a>
    </>
  );
};

export default Whatsapp;
