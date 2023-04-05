import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';

describe('Unit tests for Layout component', () => {
  test('Layout component should be rendered correctly with navbar', () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('Nav links should be rendered correctly', () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('home-link')).toBeInTheDocument();
    expect(screen.getByTestId('calculator-link')).toBeInTheDocument();
    expect(screen.getByTestId('quote-link')).toBeInTheDocument();
  });

  test('Layout component should be rendered correctly with all its content', () => {
    const component = render(<Layout />, { wrapper: BrowserRouter });
    expect(component).toMatchSnapshot();
  });
});
