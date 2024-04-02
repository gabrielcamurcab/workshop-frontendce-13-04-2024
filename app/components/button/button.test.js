import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils";
import { Button } from './button'

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

function render(Component) {
  const container = document.createElement("div")
  document.body.appendChild(container);
  const root = createRoot(container)
  act(() => root.render(Component))
}

afterEach(() => {
  document.body.innerHTML = "";
});

test('shows text', () => {
  render(<Button>Click to start</Button>)
  expect(document.body.textContent).toEqual('Click to start')
})

test('shows another text', () => {
  render(<Button>Click to repeat</Button>)
  expect(document.body.textContent).toEqual('Click to repeat')
})
