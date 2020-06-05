import virtualDeck from './pictures/virtualDeck-screen.png';
import spoutsScreen from './pictures/spouts-screen.png';
import sudokuScreen from './pictures/sudoku-screen.png';
import yogaScreen from './pictures/yoga-screen.png';

const projects = [
  {
    name: 'Virtual Deck',
    tech: ['html', 'css', 'js', 'react', 'node', 'airtable'],
    summary: 'Play card games with friends using a Socket.io WebSocket and an Airtable Database.  Built to play cards while social distancing.  The server can run multiple games simultaneously.  Spades is complete with common variations available, Rummy, Euchre, and Cards Against Humanity will be included next.',
    repoLink: 'https://github.com/QuiltDaddy/virtual-deck-client',
    liveLink: 'https://test-deck.herokuapp.com/',
    screen: virtualDeck
  },
  {
    name: 'Spouts on Routes',
    tech: ['html', 'css', 'js', 'jquery'],
    summary: 'This project integrates Open Brewery DB, Google Maps API, and Mapquest Geocoding API to provide the user with bicycle directions to their favorite brewery.  After searching their area for craft or large scale breweries the user provides the desired starting address and the bicycle optimized directions are displayed visually and in text format.',
    repoLink: 'https://github.com/QuiltDaddy/spouts-on-routes',
    liveLink: 'https://quiltdaddy.github.io/spouts-on-routes/',
    screen: spoutsScreen
  },
  {
    name: 'Sudoku Solutions',
    tech: ['html', 'css', 'js', 'jquery'],
    summary: 'This application takes any given Sudoku and walks the user through the logic of solving it with detailed explanations at each step.  It also has a feature to generate a random new puzzle of a specified difficulty.  Accessible to A11y users, keyboard users, mouse users, and phone users.  Also included is a brute force solve method.',
    repoLink: 'https://github.com/QuiltDaddy/Sudoku-Website',
    liveLink: 'https://quiltdaddy.github.io/Sudoku-Website/',
    screen: sudokuScreen
  },
  {
    name: 'Yoga Quiz',
    tech: ['html', 'css', 'js', 'react'],
    summary: 'A program to demonstrate React website functionality and accessibility.  Accessible to A11y users, keyboard users, mouse users, and phone users.',
    repoLink: 'https://github.com/QuiltDaddy/react-yoga-quiz/tree/master',
    liveLink: 'https://quiltdaddy.github.io/react-yoga-quiz/',
    screen: yogaScreen
  }
];

export default projects;
