# Forca

Teste de unidade
Testar entradas e saídas
Anatomia de um teste de unidade

Aprender a testar funções puras, eventos

Exercícios

- Testar função de ocultar letras
- Testar componente que exibe texto
- atributos, estilos e classes
 - estado do boneco da forca

Mocks
- Evento de clique para adicionar verificar chamada de método
- formulario

Cobertura

- Entendendo Cobertura de código

Refletindo sobre o que testar e o objetivo dos testes

- Refatorações são boas nesses casos?
- Quem consegue me sugerir refatorações para melhorar o código?

Começar com useMemo e refatorar para o Effect para fazer o teste passar:
shows game over message after answer the last question
```js
"use client";

import { useMemo, useState } from "react";
import { Score } from "./score";
import { Response } from "./response";
import { Result } from "./result";
import { Info } from "./info";

export function Game({ initialQuestions = [] }) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [result, setResult] = useState('')

  const question = useMemo(() => (questions.length > 0) ? questions.slice(-1)[0] : {}, [questions]);

  const handleSubmit = (response) => {
    const answer = question.realName
    if (response === answer) {
      setResult('Correct!')
    } else {
      setResult(`Wrong! The correct answer was ${answer}`)
    }
    setQuestions(questions.slice(0, -1))
  }

  return (
    <>
      <Score />
      <Response question={`What is ${question.name}'s real name?`} callback={handleSubmit} />
      <Result message={result} />
      <Info />
    </>
  );
}
```


- mocks
 - palavras vindo de api ou storage
- testing library
- Boas práticas

Comportamentos

Integração?
