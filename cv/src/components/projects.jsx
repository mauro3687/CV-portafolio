// src/components/Projects.jsx
import React from 'react';
import { projects } from "../data/projectData"
const Projects = () => {
  return (
    <section id="projects" style={{ padding: '2rem 0' }}>
      <h2>Mis Proyectos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ margin: '10px 0' }}>
              {project.tags.map((tag, index) => (
                <span key={index} style={{ background: '#eee', padding: '2px 8px', marginRight: '5px', borderRadius: '4px', fontSize: '0.8rem' }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '15px' }}>
              <a href={project.github} target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}>GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Demo en Vivo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;