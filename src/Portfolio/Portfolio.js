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
    
    const portfolio = projects.map((project, i) => {
      return (
       <div
         className='project'
         key={i}>
          <div className='projectHeader'>
            <h2>{project.name}</h2>
            {project.html ? (
              <img
                className='icon HTML5'
                src={portfolioIcons.html}
                alt='HTML5 icon' />
            ) : null}
            {project.css ? (
              <img
                className='icon CSS3'
                src={portfolioIcons.css}
                alt='CSS3 icon' />
            ) : null}
            {project.js ? (
              <img
                className='icon'
                src={portfolioIcons.js}
                alt='JS icon' />
            ) : null}
            {project.jquery ? (
              <img
                className='icon'
                src={portfolioIcons.jQuery}
                alt='jQuery icon' />
            ) : null}
            {project.react ? (
              <img
                className='icon'
                src={portfolioIcons.react}
                alt='react icon' />
            ) : null}
            {project.node ? (
              <img
                className='icon'
                src={portfolioIcons.node}
                alt='node icon' />
            ) : null}
            {project.postgres ? (
              <img
                className='icon'
                src={portfolioIcons.postgres}
                alt='postgres icon' />
            ) : null}
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
