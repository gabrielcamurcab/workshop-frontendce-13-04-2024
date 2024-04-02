import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Game } from "./game";

test("answers the first question correctly", async () => {
  const user = userEvent.setup();
  const questions = [{ name: "Batman", realName: "Bruce Wayne" }];

  render(<Game initialQuestions={questions} />);

  await user.type(
    screen.getByLabelText(/What is Batman's real name?/i),
    "Bruce Wayne"
  );
  await user.click(screen.getByRole("button", { name: /Submit Answer/i }));

  expect(screen.getByText(/Correct!/i)).toBeInTheDocument();
});

test("answers the first question incorrectly", async () => {
  const user = userEvent.setup();
  const questions = [{ name: "Batman", realName: "Bruce Wayne" }];

  render(<Game initialQuestions={questions} />);

  await user.type(
    screen.getByLabelText(/What is Batman's real name?/i),
    "Clark Kent"
  );
  await user.click(screen.getByRole("button", { name: /Submit Answer/i }));

  expect(
    screen.getByText(/Wrong! The correct answer was Bruce Wayne/i)
  ).toBeInTheDocument();
});

test("shows the second question after answer the first one", async () => {
  const user = userEvent.setup();
  const questions = [
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
  ];

  render(<Game initialQuestions={questions} />);

  await user.type(
    screen.getByLabelText(/What is Batman's real name?/i),
    "Bruce Wayne"
  );
  await user.click(screen.getByRole("button", { name: /Submit Answer/i }));

  expect(screen.getByLabelText(/What is Wonder Woman's real name?/i)).toBeInTheDocument();
});

test('resets the form after submit', async () => {
  const user = userEvent.setup();
  const questions = [
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
  ];

  render(<Game initialQuestions={questions} />);

  await user.type(
    screen.getByLabelText(/What is Batman's real name?/i),
    "Bruce Wayne"
  );
  await user.click(screen.getByRole("button", { name: /Submit Answer/i }));

  expect(screen.getByLabelText(/What is Wonder Woman's real name?/i)).toHaveValue('')
  expect(screen.getByLabelText(/What is Wonder Woman's real name?/i)).toHaveFocus()
})
