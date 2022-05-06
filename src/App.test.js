import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/The internet is just a list of lists/i);
  expect(linkElement).toBeInTheDocument();
});
