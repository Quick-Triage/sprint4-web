import React from 'react';
import '../styles/HomeStyled.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-geral'>
      <div className='div-Banner'>
        <img className='banner' src="/foto1.png" alt="Banner principal" />
      </div>

      <div className='setores'>
        <div><Link to=''><img src="/cardio.png" alt="Cardiologia" /><p>Cardiologia</p></Link></div>
        <div><Link to=''><img src="/aero.png" alt="Aerodigestivo" /><p>Aerodigestivo</p></Link></div>
        <div><Link to=''><img src="/nefro.png" alt="Nefrologia" /><p>Nefrologia</p></Link></div>
        <div><Link to=''><img src="/neu.png" alt="Neurologia" /><p>Neurologia</p></Link></div>
        <div><Link to=''><img src="/onco.png" alt="Oncologia" /><p>Oncologia</p></Link></div>
        <div className='icon2'><Link to=''><img src="/intestino.png" alt="Reabilitação Intestinal" /><p>Reabilitação <br /> Intestinal</p></Link></div>
        <div className='icon2'><Link to=''><img src="/fetal.png" alt="Terapia Fetal" /><p>Terapia Fetal e <br /> Neonatal</p></Link></div>
      </div>


      <div id="carouselHome" className="carousel slide div-Banner" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/banner2.png" className="d-block w-100 fotos" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src="/banner.png" className="d-block w-100 fotos" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src="/foto4.png" className="d-block w-100 fotos" alt="Banner 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      <h4>Sabará Hospital Infantil</h4>

      <p className='text'>
        O Sabará Hospital Infantil é referência nacional em saúde pediátrica de alta complexidade. Com uma equipe médica especializada, tecnologia de ponta e atendimento 
        humanizado, o hospital oferece cuidados completos e seguros para crianças e adolescentes. Nosso compromisso é com a vida, o bem-estar e o futuro dos pequenos 
        pacientes, garantindo acolhimento e excelência em cada detalhe.
      </p>

      <h2>Conheça uma de nossas unidades</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.421891524367!2d-46.6615093!3d-23.5522993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5831b56f76c7%3A0xc1c434e6ae0e8fa8!2sSabará%20Hospital%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1713029381345!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Mapa Sabará"
      ></iframe>
    </div>
  );
};

export default Home;
