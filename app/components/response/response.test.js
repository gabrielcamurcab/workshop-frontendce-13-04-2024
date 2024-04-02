import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Response } from './response'

test('shows text', async () => {
  const handleSubmitMock = jest.fn()
  const user = userEvent.setup()
  render(<Response question="What is Batman's real name?" callback={handleSubmitMock} />)

  await user.type(screen.getByLabelText(/What is Batman's real name?/i), 'Bruce Wayne')
  await user.click(screen.getByRole('button', { name: /Submit Answer/i }))

  expect(handleSubmitMock).toHaveBeenCalledWith('Bruce Wayne')
  expect(handleSubmitMock).toHaveBeenCalledTimes(1)
})
