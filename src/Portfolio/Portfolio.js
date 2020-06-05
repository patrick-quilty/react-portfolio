import React, { Component } from 'react';
import projects from '../projects';
import portfolioIcons from '../pictures/portfolioIcons';
import './Portfolio.css';


class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    const {projects} = this.state;

    const iconNames = {
      html: 'HTML5',
      css: 'CSS3',
      js: 'Javascript',
      jquery: 'jQuery',
      react: 'React',
      node: 'Node',
      postgres: 'PostgreSQL',
      airtable: 'Airtable'
    }
    
    const portfolio = projects.map((project, i) => {
      return (
       <div
         className='project'
         key={i}>
          <div className='projectHeader'>
            <h2>{project.name}</h2>
            {project.tech.map(tech => {
              return (
               <img
                className={'icon ' + iconNames[tech]}
                src={portfolioIcons[tech]}
                alt={iconNames[tech] + ' icon'}
                title={iconNames[tech]} />
              )})}
          </div>
          <p className='projectText'>
            {project.summary}
          </p>
          <div className='linkContainer'>
            <div>
              <label className='linkText repo'>
                Repo:
              </label>
              <a
                href={project.repoLink}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  className='iconSmall'
                  src={portfolioIcons.gitHub}
                  alt='GitHub icon' />
              </a>
            </div>
            <div>
              <label className='linkText liveApp'>
                Live App:
              </label>
            </div>
          </div>
          <a
            href={project.liveLink}
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='projectImg'
              src={project.screen}
              alt='A clickable screenshot of the application that takes you to the live website.' />
          </a>
        </div>
      );
    });

    return (
      <section className='portfolio'>
        <div className='anchor' id='portfolio'></div>
        <h1>Portfolio</h1>
        {portfolio}
      </section>
    );
  }
}

export default Portfolio;
