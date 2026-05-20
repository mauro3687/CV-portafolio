// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'; // Importación corregida
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'; 

function App() {
  return (
    <div className="App">
      {/* Barra de navegación fija arriba */}
      <Navbar />
      
      {/* Contenedor principal para las secciones */}
      <main style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Presentación principal */}
        <Hero />
        
        {/* Grilla de proyectos */}
        <Projects />
        
        {/* Tecnologías y herramientas */}
        <Skills />
        
        {/* Formulario o datos de contacto */}
        <Contact />
        
      </main>
      
      {/* Un pie de página sencillo */}
      <footer style={{ textPadding: '2rem', textAlign: 'center', marginTop: '4rem', color: '#666' }}>
        <p>&copy; {new Date().getFullYear()} - Desarrollado con React</p>
      </footer>
    </div>
  );
}

export default App;