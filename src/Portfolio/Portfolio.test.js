import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Portfolio from './Portfolio';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
const tree = renderer
  .create(<Portfolio />)
  .toJSON();
expect(tree).toMatchSnapshot();  
});
