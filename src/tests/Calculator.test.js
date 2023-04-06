import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Calculator from 'components/Calculator';

describe('Tests for Calculator component', () => {
  test('All buttons should be rendered correctly', () => {
    render(<Calculator />);
    expect(screen.getAllByRole('button').length).toBe(19);
  });

  test('The display component inside the Calculator should be rendered correctly', () => {
    render(<Calculator />);
    expect(screen.getByTestId('display')).toBeInTheDocument();
  });

  test('The Calculator should show the results of an operation', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('x'));
    await userEvent.click(screen.getByText('5'));
    expect(screen.getByTestId('display')).toHaveTextContent('2 x 5');
    await userEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('10');
  });

  test('The Calculator snapshot should be the same each time', () => {
    const element = render(<Calculator />);
    expect(element).toMatchSnapshot();
  });
});
