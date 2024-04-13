import Page from './page';
import { render, screen, fireEvent, user } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('page', () => {
  test('check correct answer', async () => {
    render(<Page />);

    const input = screen.getByLabelText("What is Batman's real name?");
    await userEvent.type(input, 'Bruce Wayne');

    const button = screen.getByRole('button', { name: 'Submit Answer' });
    await userEvent.click(button);

    const correct = screen.getByText('Correct!');
    expect(correct).toBeInTheDocument();
  });
});
