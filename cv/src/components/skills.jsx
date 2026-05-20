import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '2rem 0' }}>
      <h2>Mis Habilidades</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        
        <div style={{ flex: '1 1 200px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
          <h3>Desarrollo Web</h3>
          <p>React, Node.js, JavaScript, HTML, CSS</p>
        </div>

        <div style={{ flex: '1 1 200px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
          <h3>Bases de Datos & Backend</h3>
          <p>Firebase, Firestore, APIs</p>
        </div>

        <div style={{ flex: '1 1 200px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
          <h3>Soporte & Hardware</h3>
          <p>Help Desk, Micro-soldadura, Reparación de periféricos, Diagnóstico de PCBs</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;