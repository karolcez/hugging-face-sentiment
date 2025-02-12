import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sentiment Analysis/i);
  expect(linkElement).toBeInTheDocument();
});
