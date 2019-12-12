import React, { Component } from 'react';
import Portfolio from '../Portfolio/Portfolio.js';
import './Main.css';

class Main extends Component {
  render() {
    const apostrophe = "'";
    const ellipsis = '...';
    const bio = (
      <section>
        <div className='anchor1' id='bio' />
        <p className='headline'>
          I{apostrophe}m a fullstack developer who{apostrophe}s adept with<br />
          Git, Java, React, Node and Postgres.
        </p>
        <h1>Bio</h1>
        <p className='bioText'>
          My name is Patrick Quilty and I am a computer programming yoga teacher who inhales underground hiphop and exhales eye-rolling puns.  The first program I wrote was a BAC calculator on a TI-84 Plus in high school; I was a hit at parties{ellipsis}  I took an elective to pursue my interest and made a Rubik{apostrophe}s Cube solver in Visual Basic.  After years of programming as a hobby I decided to sharpen my skills through the Web Developer Track at Bloc, of which I am a recent graduate.<br /><br />
        </p>
        <p className='bioText'>
          I recently took a Java program of mine for teaching users how to solve a Sudoku puzzle, translated it into JS, and turned it into the project below.  I know I can figure out how to solve any stumbling block in completing projects and I have the innate desire to solve puzzles that propels me into doing just that.  I am currently Cincinnati based, but very willing to travel or work remotely.
        </p>
      </section>
    );

    return (
      <main role='main'>
        {bio}
        <Portfolio />
      </main>
    );
  }
}

export default Main;
