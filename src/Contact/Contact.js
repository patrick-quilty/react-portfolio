import React, { Component } from 'react';
import contactPictures from '../pictures/contactPictures';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProblem: false,
      showAnswer: false
    };
    this.askQuestion = this.askQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  askQuestion(e){
    e.preventDefault();
    if (!this.state.showProblem) {
      this.setState({ 
        showProblem: true
      });
      setTimeout(function (){
        document.querySelector('.mathProblem').scrollIntoView(
          { behavior: 'smooth' }
        );
      }, 500);
    }
  }

  checkAnswer(e){
    e.preventDefault();
    const answers = ['5136008270' , '5,136,008,270' , '513 600 8270' , '(513)600-8270' , '(513) 600-8270'];
    const guess = document.querySelector('.guess').value;

    if (answers.includes(guess)) {
      this.setState({ 
        showAnswer: true
      });

      setTimeout(function (){
        document.querySelector('.contact').scrollIntoView(
          { behavior: 'smooth' }
        );
      }, 500);

      let phone = document.querySelector('.phone');
      document.querySelector('.secret').classList.add('hide');
      phone.classList.remove('hide');
      phone.style.backgroundColor = '#FDFF47';
      document.querySelector('.guess').value = '(513) 600-8270';
      
      setTimeout(function (){
        phone.style.backgroundColor = '';
      }, 3500);
    } else {
      alert('You died.  Please, try again.');
    }
  }

  render() {
    const {showProblem, showAnswer} = this.state;

    const contact = (
      <footer role='contentinfo' className='contact'>
        <div className='anchor' id='contact' />
        <h1>Contact</h1>
        <p className='copy'>
          {`© ${new Date().getFullYear()} Patrick Quilty`}
        </p>
        <img
          className='iconSmall2'
          title='p.quilty@yahoo.com'
          src={contactPictures.email}
          alt='Email icon' />
        <a 
          href='https://github.com/QuiltDaddy'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='iconSmall2'
            src={contactPictures.gitHub}
            alt='GitHub icon' />
        </a>
        <a 
          href='https://www.linkedin.com/in/patrick-quilty-636b26184/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='iconSmall2'
            src={contactPictures.linkedIn}
            alt='LinkedIn icon' />
        </a>
        <img 
          className='iconSmall2 phone hide'
          title='(513) 600-8270'
          src={contactPictures.phone}
          alt='Phone icon' />
        <a
          href='solve:Math-Problem-Of-The-Day'>
          <img 
            className='iconSmall2 secret'
            role='button'
            src={contactPictures.questionMark}
            alt='Question Mark'
            onClick={this.askQuestion} />
        </a>
        <a
          href='https://github.com/QuiltDaddy/react-portfolio/tree/master'
          className='portfolioLink'
          target='_blank'
          rel='noopener noreferrer'>
          Portfolio Repo
        </a>
      </footer>
    );

    const apostrophe = "'";
    const mathProblemSection = (
      <section
        className='mathProblem'>
        <p className='mathText'>
          You have chosen a question.  I hope you studied.<br />
          What is the product of the 2 y-intercepts<br />
          of the circle with the equation:<br />
        </p>
        <img 
          className='mathImage'
          src={contactPictures.mathProblemImg} 
          alt='x ^ 2 + (y - 72463.5) ^ 2 = 10721.5 ^ 2' />
        <br />
        <p className='mathText'>
          Answer correctly or perish.
        </p>
        <form>
          <input
            type='text'
            className='guess' />
          <input 
            type='submit'
            className='check'
            value='Check'
            onClick={this.checkAnswer} />
        </form>
      </section>
    );

    const mathAnswerSection = (
      <section
        className='mathAnswer'>
        <p className='answerText'>
          You have answered correctly.  Now claim your prize:<br />
          The phone number of an excellent candidate<br />
          for your programming job search.<br />
          <br />
          Thanks for bearing with me.<br />
          Trust me, this version is way cleaner<br />
          than the quadratic equation one.<br />
          Also as an additional prize and to prove I{apostrophe}m not a robot<br />
          here are two of my favorite comics:
        </p>
        <a 
          href='https://xkcd.com/664/'
          target='_blank'
          rel='noopener noreferrer'>
          <img 
            className='extra'
            src={contactPictures.xkcd}
            alt='https://xkcd.com/664/'
            title='Some engineer out there has solved P=NP and it{apostrophe}s locked up in an electric eggbeater calibration routine.  For every 0x5f375a86 we learn about, there are thousands we never see.' />
        </a>
        <a 
          href='https://xkcd.com/664/'
          target='_blank'
          rel='noopener noreferrer' >
          <figcaption>https://xkcd.com/664/</figcaption>
        </a>
        <a
          href='https://www.smbc-comics.com/comic/2011-09-08'
          target='_blank'
          rel='noopener noreferrer'>
          <img 
            className='extra'
            src={contactPictures.smbc}
            alt='https://www.smbc-comics.com/comic/2011-09-08'
            title='2011-09-08' />
        </a>
        <a
          href='https://www.smbc-comics.com/comic/2011-09-08'
          target='_blank'
          rel='noopener noreferrer' >
          <figcaption>https://www.smbc-comics.com/comic/2011-09-08</figcaption>
        </a>
      </section>
    );

    return (
      <>
        {contact}
        <div>
          {showProblem ? mathProblemSection : null}
          {showAnswer ? mathAnswerSection : null}
        </div>
      </>
    );
  }
}

export default Contact;
