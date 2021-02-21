import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Kontak.css';
import Iframe from 'react-iframe';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Kontak = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <div className='contact mt-3 mb-4'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='text-center' data-aos='fade-down'>
              Kontak Kami
            </h2>
            <p className='text-center' data-aos='fade-up'>
              Jika anda memiliki pertanyaan, silakan mengunjungi kantor kami
              atau mengirim pesan kepada kami.
            </p>
          </div>
        </div>
        <div className='map' data-aos='fade-up'>
          <Iframe
            url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.47405797127!2d106.7694163!3d-6.3137411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9deb927044afc4f4!2sINFO%20PENERJEMAH!5e0!3m2!1sen!2sid!4v1608902468576!5m2!1sen!2sid'
            width='100%'
            height='350px'
            id='myId'
            className='myClassname'
            display='initial'
            position='relative'
          />
        </div>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='info'>
                <div className='address' data-aos='fade-down'>
                  <i className='fas fa-map-marker-alt'></i>
                  <h4>Alamat:</h4>
                  <p>
                    Jl Cirendeu Indah II No. 49, Cirendeu. Tangerang Selatan,
                    15419
                  </p>
                </div>
                <div className='open-hours' data-aos='fade-up'>
                  <i className='far fa-clock'></i>
                  <h4>Jam Buka:</h4>
                  <p>
                    Senin-Sabtu
                    <br />
                    09.00 - 17.00 WIB
                  </p>
                </div>
                <div className='email' data-aos='fade-down'>
                  <i className='fas fa-envelope'></i>
                  <h4>Email:</h4>
                  <p>infopenerjemah@gmail.com</p>
                </div>
                <div className='phone' data-aos='fade-up'>
                  <i className='fas fa-phone'> </i>
                  <h4>Telepon / WA:</h4>
                  <p>+62 877-3076-4439</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8 mt-5 mt-lg-0' data-aos='fade-up'>
              <form action='/contact' name='contact' method='post'>
                <input type='hidden' name='form-name' value='contact' />
                <div className='form-row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Nama'
                      required
                    />
                  </div>
                  <div className='col-md-6 form-group'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='email'
                      placeholder='Email'
                      required
                    />
                  </div>
                </div>
                {/* <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subjek'
                  />
                </div> */}
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    type='text'
                    name='message'
                    id='message'
                    rows='8'
                    placeholder='Pesan'
                    required
                  ></textarea>
                </div>
                <div className='text-center'>
                  <button type='submit'>Kirim Pesan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Kontak;
