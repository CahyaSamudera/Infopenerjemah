import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/Navbar/Navbar';
import './Beranda.css';
import Background from '../../Images/library.jpg';
import About from '../../Images/people.jpg';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';
import VisibilitySensor from 'react-visibility-sensor';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Beranda = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <div
        className='hero d-flex align-items-center justify-content-center'
        style={{
          width: '100%',
          height: '100vh',
          background: `url(${Background})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-8'>
              <h1>
                <Typewriter
                  options={{
                    strings: ['Selamat Datang di', 'Info Penerjemah'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </div>
          <div className='row mt-5 justify-content-center'>
            <div className='col-xl-2 col-md-4 col-6 mb-3' data-aos='fade-up'>
              <div className='category'>
                <i className='fas fa-users'></i>
                <h3>
                  <Link to='/lisan' style={{ textDecoration: 'none' }}>
                    <p>Penerjemah Lisan</p>
                  </Link>
                </h3>
              </div>
            </div>
            <div className='col-xl-2 col-md-4 col-6 mb-3' data-aos='fade-down'>
              <div className='category'>
                <i className='fas fa-atlas'></i>
                <h3>
                  <Link to='/dokumen' style={{ textDecoration: 'none' }}>
                    <p>Penerjemah Dokumen</p>
                  </Link>
                </h3>
              </div>
            </div>
            <div className='col-xl-2 col-md-4 col-6 mb-3' data-aos='fade-up'>
              <div className='category'>
                <i className='fas fa-file-alt'></i>
                <h3>
                  <Link to='/legalisasi' style={{ textDecoration: 'none' }}>
                    <p>Legalisasi Dokumen</p>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about mt-5'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-xl-6 col-lg-6 col-md-10'>
              <div className='about-desc mb-50'>
                <div className='section-title mb-35'>
                  <h2 data-aos='fade-down'>Info Translation Center</h2>
                </div>
                <p data-aos='fade-up'>
                  Terima kasih telah berkunjung ke Info Penerjemah. Kami adalah
                  biro resmi penyedia layanan jasa penerjemahan tersumpah dan
                  jasa legalisasi dokumen. Layanan kami meliputi penerjemahan
                  bahasa Inggris, Arab, Jerman, Belanda, Mandarin, Perancis,
                  Korea, Thailand, Portugis, Spanyol, Rusia, Vietnam, dan
                  Italia.
                </p>
                <p data-aos='fade-up'>
                  Kami menjamin bahwa hasil terjemahan kami dapat dilegalisasi
                  di Departemen Hukum dan HAM, Departemen Luar Negeri,
                  Kantor-kantor Kedutaan Besar negara asing di Indonesia. Kami
                  juga menjamin bahwa dokumen yang kami terjemahkan dapat diakui
                  oleh negara-negara pemilik bahasa terkait.
                </p>
                <p data-aos='fade-up'>
                  Kami menerjemahkan berbagai jenis dokumen yang bersifat legal,
                  medical, technical, maupun financial. Kami juga menerjemahkan
                  dokumen-dokumen lainnya seperti Ijazah, Raport, Transkrip
                  Nilai, Akta Kelahiran, Kartu Keluarga, Kartu Tanda Penduduk,
                  Passport, SKCK, Surat Keterangan dll.
                </p>
                <p data-aos='fade-up'>
                  Para penerjemah kami adalah para penerjemah yang telah
                  memperoleh predikat sebagai penerjemah tersumpah yang telah
                  mendapatkan sertifikasi atau SK dari Gubernur setempat. Adapun
                  dokumen yang memerlukan penerjemahan tersumpah biasanya adalah
                  dokumen-dokumen yang digunakan untuk keperluan legal seperti
                  untuk melanjutkan sekolah keluar negeri seperti ijazah dan
                  transkrip nilai, dan untuk izin tinggal maupun bekerja di luar
                  negeri seperti akta kelahiran, surat nikah, KTP, KK dll.
                </p>
              </div>
              <div className='row' data-aos='fade-up'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                  <div className='experience'>
                    <span>
                      <CountUp end={1523} duration={5} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </span>
                    <p>Pelanggan Puas</p>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                  <div className='experience'>
                    <span>
                      <CountUp end={3219} duration={5} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </span>
                    <p>Projek Selesai</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-xl-5 col-lg-6 col-md-9 offset-md-1 offset-sm-1'
              data-aos='fade-down'
            >
              <div className='about-right-sec'>
                <div className='about-right-image'>
                  <img
                    src={About}
                    alt='about-info-penerjemah'
                    className='img-fluid'
                  />
                </div>
                <div className='img-box' data-aos='fade-up'>
                  <span>
                    <CountUp end={10} duration={5} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Beranda;
