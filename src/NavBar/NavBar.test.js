import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
const tree = renderer
  .create(<NavBar />)
  .toJSON();
expect(tree).toMatchSnapshot();  
});
