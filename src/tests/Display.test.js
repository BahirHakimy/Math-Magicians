import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Display from 'components/Display';

test('Display component should be rendered correctly matching the given text prop', () => {
  const text = '3000';

  render(<Display text={text} />);
  expect(screen.getByTestId('display')).toHaveTextContent(text);
});
