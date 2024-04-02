# Usando métricas de coverage

Vamos utilizar uma ferramenta chamada instanbul, uma ferramenta que pode ser utilizada em vários frameworks de testes, mas nesse exemplo vou utilizar o Jest porque o instanbul já faz parte dele, então não precisamos fazer nenhuma configuração.

## O que é a métrica de coverage?

É uma métrica que mostra de 0% a 100% quanto do código é executado por uma suite de testes.

## Para que servem

Identificar quanto do código é coberto por testes.

## Garantem a qualidade dos testes?

Não. Não persiga um número específico de cobertura, como 100%.


São elas:

## Lines

O cálculo de cada métrica é feito da seguinte forma:

$$
\text{Cobertura de testes} = {\text{Linhas de código executadas} \over \text{Número total de linhas}}
$$

```js
export function check(response, answer) {
  if (response === answer) {
    return true
  }
  return false
}
```

Resultado

```
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
 check.js  |      75 |        0 |     100 |      75 | 3                 
-----------|---------|----------|---------|---------|-------------------
```

Refatoração

```js
export function check(response, answer) {
  return response === answer
}
```

Resultado

```
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
 check.js  |     100 |      100 |     100 |     100 |                   
-----------|---------|----------|---------|---------|-------------------
```

## Branches

São métricas que representam as ramificações do código. Ex: if e switch.

## Conclusão

Muitos desenvolvedores perseguem um número de 100% de cobertura acreditando que chegando a esse número terão uma qualidade melhor dos testes, mas isso não é verdade. Vimos na prática como essas métricas funcionam e o que podemos concluir é que elas são boas para nos ajudar a encontrar o que não está bom (códigos que não foram executados pelos testes), mas não da para saber se os testes são bons apenas com elas.
