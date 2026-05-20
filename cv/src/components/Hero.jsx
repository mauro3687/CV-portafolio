import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
        Hola, soy Mauro Ezequiel Gorosito
      </h1>
      <h2 style={{ color: '#555', fontWeight: 'normal' }}>
        Estudiante de Análisis de Sistemas | Desarrollador Web | Soporte Técnico
      </h2>
      <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' }}>
        Soy de Córdoba y me apasiona resolver problemas tecnológicos. Tengo experiencia creando aplicaciones web, gestionando bases de datos y brindando soporte de infraestructura (Help Desk) y reparación de hardware. Siempre buscando aprender y optimizar procesos.
      </p>
    </section>
  );
};

export default Hero;