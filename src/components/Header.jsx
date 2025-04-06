import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
          <h1>Márcio Dias Veículos</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/carros">Carros</Link>
            <Link to="/login">Admin</Link>
          </nav>
        </header>
  );
};

export default Header;