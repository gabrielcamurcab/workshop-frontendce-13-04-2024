# 01-first-test

Nesta seção vamos instalar o Jest para criar os testes do projeto.

## Instalando o npm

Testes são executados na linha de comando usando o comando `npm test`.

## Instalando o Jest

1. Instale o Jest

```bash
npm install -D jest
```

2. Crie o arquivo `jest.config.ts`

```js
const nextJest = require('next/jest.js')
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config = {}

module.exports = createJestConfig(config)

```

3. Adicione o comando no package.json

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Criando o primeiro teste

1. O primeiro componente que vamos testar é o `Button`. Crie o arquivo `Button.test.js`. Na linha de comando, execute o comando de teste novamente. Você verá este output:

```
  ● Test suite failed to run
    Your test suite must contain at least one test.
```

2. Adicione o primeiro teste

```js
test('shows text', () => {})
```

3. Executando o comando agora, o output:

```
 PASS  app/components/Button.test.js
  ✓ shows text (1 ms)
```

4. Adicione uma asserção

```js
test('shows text', () => {
  expect(document.body.textContent).toBe('Hello world')
})
```

Output:

```
Consider using the "jsdom" test environment.

ReferenceError: document is not defined
```

Este provavelmente não é o erro que você estava esperando. Acontece que nós ainda temos que fazer algumas configurações. O Jest nos diz o que precisa ser feito, precisamos adicionar o ambiente de teste do `jsdom`.

O `jsdom` é uma implementação headless do **Document Object Model (DOM)** para Node.js. Ele nos permite utilizar APIs do DOM no Node.js.

5. Execute o comando

```
npm install -D jest-environment-jsdom
```

Em `jest.config.js`, dentro de `config`, adicione a seguinte linha:

```js
const config = {
  testEnvironment: 'jsdom',
}
```

Executando os testes novamente, o erro muda:

```
● shows text

  expect(received).toBe(expected) // Object.is equality

  Expected: "Hello world"
  Received: ""

    2 |
    3 | test('shows text', () => {
  > 4 |     expect(document.body.textContent).toBe('Hello world')
      |                                       ^
    5 | })
```

## Renderizando componentes React dentro de um teste

Importe

```js
import { createRoot } from "react-dom/client"
import { Button } from './Button'
```

Precisamos definir o container onde a aplicação será renderizada, no nosso caso vamos criar um elemento para isso e fazemos o `append`.

```js
const container = document.createElement("div");
document.body.appendChild(container);
```

Depois passamos para a função `createRoot`

```js
const root = createRoot(container)
```

O código final

```js
test('shows text', () => {
  const container = document.createElement("div")
  document.body.appendChild(container);
  const root = createRoot(container)
  act(() => root.render(<Button>Click to start</Button>))
  expect(document.body.textContent).toEqual('Click to start')
})
```

Note que o teste passou, mas com um warning:

```
Warning: The current testing environment is not configured to support act(...)
```

Para resolver

```js
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
```

Escreva outro teste

```js
test('shows another text', () => {
  const container = document.createElement("div")
  document.body.appendChild(container);
  const root = createRoot(container)
  act(() => root.render(<Button>Click to repeat</Button>))
  expect(document.body.textContent).toEqual('Click to repeat')
})
```

Execute os testes novamente. Note que o segundo teste falha e com um erro bem estranho:

```
Expected substring: "Click to repeat"
Received string:    "Click to startClick to start"
```

## Removendo efeitos colaterais

```js
afterEach(() => {
  document.body.innerHTML = "";
});
```

## Removendo código duplicado

Também refatoramos código de teste

```js
import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils";
import { Button } from './Button'

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
```
