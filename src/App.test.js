import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, DC!/i);
  expect(textElement).toBeInTheDocument();
});
