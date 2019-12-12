import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav
        role='navigation'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#bio'>Bio</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
