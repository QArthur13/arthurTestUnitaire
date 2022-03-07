import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

let container: any;

beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);

});

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('renders have list', () => {

  const { container } = render(<App />);
  const title = screen.getByText(/list/i);
  expect(title).toBeInTheDocument();

});
