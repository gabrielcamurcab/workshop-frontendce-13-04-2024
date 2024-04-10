import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "../page";

test("increment score when answer is correct", async () => {
  const user = userEvent.setup();
  render(<Page />);

  const input = screen.getByLabelText(/what is .+'s real name\?/i);
  const button = screen.getByRole("button", { name: /submit answer/i });
  await user.type(input, "Bruce Wayne");
  await user.click(button);
  await user.click(button);
  await user.click(button);

  expect(
    screen.getByText("Game Over, you scored 1 points")
  ).toBeInTheDocument();
});
