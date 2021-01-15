import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText('React Movie Search App');
  expect(titleElement).toBeInTheDocument();
});
