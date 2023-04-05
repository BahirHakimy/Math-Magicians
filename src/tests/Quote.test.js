import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Quote from 'components/Quote';

describe('Unit tests for Quote component', () => {
  test('A Loading text should be rendered in the firstplace', () => {
    render(<Quote />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('Quote component should be rendered correctly with all its elements', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });
});
