import React from 'react';
import './footerStyle.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
 

  return (
    <footer className="footer">
    <div className="footer__columns">
      <div className="footer__column">
        <h3 className="footer__title">Servicios</h3>
        <a href="#" className="footer__link">Viajeros</a>
        <a href="#" className="footer__link">Conductores</a>
        <a href="#" className="footer__link">Propietarios</a>
        <a href="#" className="footer__link">Empresas</a>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Conócenos</h3>
        <a href="#" className="footer__link">Quiénes somos</a>
        <a href="#" className="footer__link">Blog</a>
        <a href="#" className="footer__link">Trabaja con nosotros</a>
        <a href="#" className="footer__link">Contacto</a>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Políticas</h3>
        <a href="#" className="footer__link">Política de privacidad</a>
        <a href="#" className="footer__link">Términos y condiciones</a>
        <a href="#" className="footer__link">Política de cookies</a>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Redes sociales</h3>
        <div className="footer__social">
          <a href="#" className="footer__social__icon">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="footer__social__icon">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="footer__social__icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <p className="footer__bottom__text">© 2023 Taxis Libres - Yeizer Marrugo .</p>
      <p className="footer__bottom__text">
        <a href="#" className="footer__bottom__link">Términos y condiciones</a>
        <span>|</span>
        <a href="#" className="footer__bottom__link">Política de privacidad</a>
      </p>
    </div>
  </footer>
  
  );
};

export default Footer;
