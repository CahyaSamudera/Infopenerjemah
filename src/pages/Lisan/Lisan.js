import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Lisan.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Lisan = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <div id='main'>
        <div className='container-2 mb-4'>
          <article id='main-col'>
            <ul id='services'>
              <li>
                <h3 data-aos='fade-up'>Penerjemahan Lisan</h3>
                <p data-aos='fade-up'>
                  Jasa Penerjemahan Lisan atau Interpreter adalah sebuah jasa
                  alih bahasa secara verbal atau lisan, dimana penerjemah akan
                  menerjemahkan percakapan secara langsung. Kami menyediakan
                  layanan penerjemahan lisan dalam bahasa Inggris, bahasa Arab,
                  bahasa Korea, bahasa Jerman, dll.
                </p>
                <p data-aos='fade-up'>
                  Dalam prakteknya di lapangan, secara umum ada 2 jenis jasa
                  interpreting, yaitu:
                </p>
                <p data-aos='fade-up'>1. Simultan</p>
                <p data-aos='fade-up'>
                  Dalam kategori ini, Interpreter menerjemahkan ke dalam bahasa
                  target secepat mungkin, sementara pembicara bahasa sumber
                  terus berbicara.
                </p>
                <p data-aos='fade-up'>
                  Adapun standar harga dari layanan ini untuk 8 jam kerja adalah
                  Rp. 5,000.000,-
                </p>
                <p data-aos='fade-up'>2. Konsekutif</p>
                <p data-aos='fade-up'>
                  Dalam kategori ini, interpreter berbicara setelah pembicara
                  bahasa sumber selesai berbicara.
                </p>
                <p data-aos='fade-up'>
                  Adapun standar harga dari layanan ini untuk 8 jam kerja adalah
                  Rp. 3,000.000,-
                </p>
                <p data-aos='fade-up'>
                  Untuk informasi lebih lanjut, silahkan menghubungi kami lewat
                  no telepon / WA dan alamat email yang tersedia. Kami akan
                  berusaha membalas pesan anda secepat mungkin.{' '}
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Lisan;
