import React from 'react';

const Skill = () => {
  const skills = [
    {
      title: 'JavaScript',
      image: './img/JavaScript-logo.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      title: 'React',
      image: './img/React.png',
      url: 'https://reactjs.org/'
    },
    {
      title: 'Node.js',
      image: './img/nodejs.png',
      url: 'https://nodejs.org/'
    },
    {   
        title: 'Python',
        image: './img/Python.png',
        url: 'https://www.python.org/'
    },
    {
        title: 'Java',
        image: './img/java.png',
        url: 'https://www.java.com/en/'
    },
    {
        title: 'Kotlin',
        image: './img/kotlin.jpg',
        url: 'https://kotlinlang.org/'
    },
    {
        title: 'HTML5',
        image: './img/html5.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
    },
    {
        title: 'CSS3',
        image: './img/css3.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        title: 'Git',
        image: './img/git.png',
        url: 'https://git-scm.com/'
    },
    {
        title: 'GitHub',
        image: './img/github.png',
        url: ' https: //github.com/'
    },
    {
        title: 'C',
        image: './img/c-logo.png',
        url: 'https://www.cprogramming.com/'
    },
    {
        title: 'C++',
        image: './img/c++.png',
        url: 'http://www.cplusplus.com/'
    },
    {
        title: 'Vite',
        image: './img/Vitejs.png',
        url: 'https://vitejs.dev/'
    },
    {
        title: 'PostgreSQL',
        image: './img/postgresql-logo.png',
        url: 'https://www.postgresql.org/'
    },
    {
        title: 'Express.js',
        image: './img/expressjs.png',
        url: 'https://expressjs.com/'
    },
    {
        title: 'Neo4j',
        image: './img/Neo4j.png',
        url: 'https://neo4j.com/'
    }
    
  ];

  return (
    <section id='skills' className='skills container'>
      <h2 className="text-center">Skills</h2>
      <p className="text-center">Programming Languages & Tools</p>
      <div className='row'>
        {skills && skills.map((item, index) => {
          return (
            <div key={index} className='col-lg-4 col-md-6 card'>
              <div className='skills-item text-center' onClick={() => window.open(item?.url, "_blank")}>
                <img src={item?.image} alt="" className='skills-img' />
                <p className='skills-description'>{item?.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Skill;
