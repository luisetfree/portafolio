import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi Portafolio</div>
      

        <ul className="navbar-links">
          <li><a href="/"> Home </a></li>
          <li><a href="/about">Sobre Mí</a></li>
          <li><a href="/projects">Proyectos</a></li>
          <li><a href="/contact">Contáctame</a></li>
        </ul>


     
    </nav>
  );
}

export default Navbar;
