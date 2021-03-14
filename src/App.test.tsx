import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders top bar', () => {
  render(<App />);
  const topBarText = screen.getByText(/podrida/i);
  expect(topBarText).toBeInTheDocument();
});
