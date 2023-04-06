import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from 'components/Home';

describe('Unit tests for Home component', () => {
  test('The title in Home component should be rendered correctly ', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to math magicians!')).toBeInTheDocument();
  });
  test('Home component should be rendered correctly', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
