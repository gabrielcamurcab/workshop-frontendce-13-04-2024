import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "./page";

test('starts the game when the button is clicked', async () => {
  const user = userEvent.setup();
  render(<Page />)

  await user.click(screen.getByRole('button', { name: /click to start/i }))

  expect(screen.getByLabelText(/what is batman's real name?/i)).toBeInTheDocument()
})
