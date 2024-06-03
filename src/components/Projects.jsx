import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Que no te Salga Caro',
      type: { title: 'Android Studio & Kotlin' },
      content: 'Final proyecto for the Mobile Platfoems course.',
      image: './img/androidLogo.png',
      url: 'https://github.com/Its-Japo/QueNoTeSalgaCaro'
    },
    {
      title: 'Assmbly Hangman Game',
      type: { title: 'Assembly x86-64' },
      content: 'Type of hangman game made in assembly language.',
      image: './img/assembly.png',
      url: 'https://github.com/nel-eleven11/Assembler/tree/main/proyecto4'
    },
    {
      title: 'Database Project 3: Analysis and integration of DB',
      type: { title: 'Psql, Oracle, Knime' },
      content: 'Process of data integration and analysis using Knime, Oracle and PostgreSQL.',
      image: './img/postgresql-logo.png',
      url: 'https://github.com/nel-eleven11/Proyecto3DB1'
    },
    {
      title: 'Basic LISP Interpreter',
      type: { title: 'LISP & Java' },
      content: 'Basic LISP interpreter made in Java.',
      image: './img/Lisp_logo.png',
      url: 'https://github.com/nel-eleven11/Estructuras_de_Datos/tree/main/Proyecto%201'
    },
    {
      title: 'Recomendation System',
      type: { title: 'Java & Neo4J' },
      content: 'Recomendation system made in Java using Neo4J.',
      image: './img/Neo4j.png',
      url: 'https://github.com/nel-eleven11/Estructuras_de_Datos/tree/main/Proyecto%202'
    }
  ];

  return (
    <section id='projects' className='projects container'>
      <h2 className="text-center">My Projects</h2>
      <div className='row'>
        {projects && projects.map((item, index) => {
          return (
            <div key={index} className='col-lg-4 col-md-6'>
              <div className='card border border-dark'>
                <img src={item?.image} alt="project image" className='project-img' />
                <h5 className="text-center">{item?.title}</h5>
                <span className='type text-center'><em>{item?.type?.title}</em></span>
                <p className='text-justify'>{item.content}</p>
                <button onClick={() => window.open(item?.url, "_blank")} className='btn btn-primary btn-sm'>View</button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Projects;
