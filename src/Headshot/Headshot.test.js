import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Headshot from './Headshot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Headshot />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
const tree = renderer
  .create(<Headshot />)
  .toJSON();
expect(tree).toMatchSnapshot();  
});

