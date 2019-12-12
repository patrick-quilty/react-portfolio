import sudokuScreen from './pictures/sudoku-screen.png';
import yogaScreen from './pictures/yoga-screen.png';
import spoutsScreen from './pictures/spouts-screen.png';


const projects = [
  {
    name: 'Sudoku Solutions',
    html: true,
    css: true,
    js: true,
    jquery: true,
    react: false,
    node: false,
    postgres: false,
    summary: 'This application takes any given Sudoku and walks the user through the logic of solving it with detailed explanations at each step.  It also has a feature to generate a random new puzzle of a specified difficulty.  Accessible to A11y users, keyboard users, mouse users, and phone users.  Also included is a brute force solve method.',
    repoLink: 'https://github.com/QuiltDaddy/Sudoku-Website',
    liveLink: 'https://quiltdaddy.github.io/Sudoku-Website/',
    screen: sudokuScreen
  },
  {
    name: 'Yoga Quiz',
    html: true,
    css: true,
    js: true,
    jquery: false,
    react: true,
    node: false,
    postgres: false,
    summary: 'A program to demonstrate basic React website functionality and accessibility.  Accessible to A11y users, keyboard users, mouse users, and phone users.',
    repoLink: 'https://github.com/QuiltDaddy/react-yoga-quiz/tree/master',
    liveLink: 'https://quiltdaddy.github.io/react-yoga-quiz/',
    screen: yogaScreen
  },
  {
    name: 'Spouts on Routes',
    html: true,
    css: true,
    js: true,
    jquery: true,
    react: false,
    node: false,
    postgres: false,
    summary: 'This project integrates Open Brewery DB, Google Maps API, and Mapquest Geocoding API to provide the user with bicycle directions to their favorite brewery.  After searching their area for craft or large scale breweries the user provides the desired starting address and the bicycle optimized directions are displayed visually and in text format.',
    repoLink: 'https://github.com/QuiltDaddy/spouts-on-routes',
    liveLink: 'https://quiltdaddy.github.io/spouts-on-routes/',
    screen: spoutsScreen
  }
];

export default projects;
