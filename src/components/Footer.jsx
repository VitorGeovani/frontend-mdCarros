import React from 'react';
import './styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Márcio Dias - Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;