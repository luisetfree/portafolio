import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const proyectos = [
        {
            nombre: 'Produccion',
            descripcion: 'Aplicación para control de Produccion.',
            link: 'https://github.com/luisetfree',
        },
        {
            nombre: 'Blog Personal',
            descripcion: 'Un blog minimalista y Personal.',
            link: 'http://luisetfree.over-blog.es/',
        },
        {
            nombre: 'Gestor de Productos',
            descripcion: 'Aplicación para gestionar ofertas de productos diarias.',
            link: 'https://github.com/luisetfree',
        },
    ];
return ( <section className="projects"> <h2>Mis Proyectos</h2> 
    <div className="projects-grid"> 
    { proyectos.map((proyecto, index) => ( <div key={index} className="project-card"> <h3>{proyecto.nombre}</h3> 
    <p>{proyecto.descripcion}</p>
     <a href={proyecto.link} target="_blank" rel="noopener noreferrer"> 
     <FontAwesomeIcon icon={faGithub} size="3x" /> </a> </div> ))} </div>
      </section> );
       }
 export default Projects;
