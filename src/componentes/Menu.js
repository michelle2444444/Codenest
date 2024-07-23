import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <header className="menu">
      <div className="logo">
        <img src="logo.jpeg" alt="Codenest Learning" />
      </div>
      <input type="text" placeholder="Barra de búsqueda" />
      <nav>
        <button>INICIAR SESIÓN</button>
        <button>OPINIONES</button>
      </nav>
    </header>
  );
};

export default Menu;