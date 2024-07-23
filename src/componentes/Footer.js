import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Codenest Learning. Todos los derechos reservados.</p>
      <ul>
        <li><a href="#privacy">Política de Privacidad</a></li>
        <li><a href="#terms">Términos y Condiciones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </footer>
  );
};

export default Footer;