import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bad Bank app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Cash/i);
  expect(linkElement).toBeInTheDocument();
});
