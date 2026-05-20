import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #ccc' }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Mi Portafolio</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
        <li><a href="#hero" style={{ textDecoration: 'none', color: '#333' }}>Inicio</a></li>
        <li><a href="#projects" style={{ textDecoration: 'none', color: '#333' }}>Proyectos</a></li>
        <li><a href="#skills" style={{ textDecoration: 'none', color: '#333' }}>Habilidades</a></li>
        <li><a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;