import React, { Component } from 'react';
import headshot from '../pictures/headshot.jpg';
import './Headshot.css';

class Headshot extends Component {
  render() {
    return (
      <header role='banner'>
        <img
          className='headshot'
          id='headshot'
          src={headshot}
          alt='A handsome man smiles in front of a field of trees.' />
        <section className='tagContainer'>
          <p className='tagline tagline1'>
            Patrick
          </p>
          <p className='tagline tagline2'>
            purges
          </p>
          <p className='tagline tagline3'>
            puzzles.
          </p>
        </section>
      </header>
    );
  }
}

export default Headshot;
