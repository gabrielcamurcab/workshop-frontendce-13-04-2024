# 02-render-question

Crie o arquivo `Game.test.js`

```js
import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils";
import { Game } from './Game'

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

function render(Component) {
  const container = document.createElement("div")
  document.body.appendChild(container);
  const root = createRoot(container)
  act(() => root.render(Component))
}

test('renders the first question', () => {
  const questions = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
  ]

  render(<Game initialQuestions={questions} />)

  expect(document.body.textContent).toContain("What is Batman's real name?")
})
```
