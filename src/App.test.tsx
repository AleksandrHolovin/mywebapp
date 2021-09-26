import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App render testing", () => {
  test('renders "Text to pass the test" text', () => {
    render(<App />);
    const linkElement = screen.getByText("Text to pass the test");
    expect(linkElement).toBeInTheDocument();
  });

})
