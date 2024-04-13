import { Info } from "./info";
import { render } from '@testing-library/react';

describe('Info component', () => {
  test('renders game over text', () => {
    render(<Info />);

    expect(document.body.textContent).toContain('Game Over');
  })
});
