import React from 'react';
import { render, screen } from '@testing-library/react';
import { SentimentView } from './SentimentView.tsx';
import { MAX_INPUT_LENGTH } from './sentimentConstants.ts';

test('The text cannot be empty', () => {
  render(<SentimentView status = {{
    result: {label: 'POSITIVE', score: 0.9998735189437866},
    loading: false,
    error: "The text cannot be empty."}} />);
  const linkElement = screen.getByText("The text cannot be empty.");
  expect(linkElement).toBeInTheDocument();
});
test('The text cannot exceed', () => {
  render(<SentimentView status = {{
    result: {label: 'NEGATIVE', score: 0.9996899366378784},
    loading: false,
    error: `The text cannot exceed ${MAX_INPUT_LENGTH} characters.`}} />);
  const linkElement = screen.getByText(`The text cannot exceed ${MAX_INPUT_LENGTH} characters.`);
  expect(linkElement).toBeInTheDocument();
});
