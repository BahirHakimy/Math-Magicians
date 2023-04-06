import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Button from 'components/Button';

describe('Unit tests for Button component', () => {
  test('Button component should be rendered correctly according to given props', () => {
    const buttonText = 'A/C';
    render(<Button text={buttonText} />);

    expect(screen.getByRole('button')).toHaveTextContent(buttonText);
  });

  test('The passed onClick function should be called when user clicks on the button', () => {
    const buttonText = 'A/C';
    const callback = jest.fn();
    render(<Button text={buttonText} onClick={callback} />);
    userEvent.click(screen.getByRole('button'));
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
