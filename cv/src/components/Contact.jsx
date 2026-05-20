import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '2rem 0', borderTop: '1px solid #eee', marginTop: '2rem' }}>
      <h2>Hablemos</h2>
      <p>¿Tenés algún proyecto en mente o buscás sumar a alguien a tu equipo? Escribime.</p>
      
      <div style={{ marginTop: '15px' }}>
        <p>📧 Email: tu.email@ejemplo.com</p>
        <p>💼 LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">Mi Perfil</a></p>
        <p>🐱 GitHub: <a href="https://github.com" target="_blank" rel="noreferrer">Mi GitHub</a></p>
      </div>
    </section>
  );
};

export default Contact;