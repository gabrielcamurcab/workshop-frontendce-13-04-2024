# Testes de unidade

Existem diferentes definições de teste de unidade e algo que todas tem em comum, são os três atributos mais importantes. Um teste de unidade é um teste que:

- Verifica um pequeno pedaço de código (unidade)
- Executa rápido
- Faz isso de forma **isolada**

## Qual o objetivo do teste de unidade?

Há quem diga que o objetivo é ter um melhor design, mas isso é uma consequência. Um forte sinal de que o código precisa de melhorias é quando é difícil fazer testes de unidade nele. Geralmente os problemas se manifestam por causa de um forte acoplamento.

O principal objetivo é permitir o **crescimento sustentável do projeto**.

## O que é uma unidade?

Como vimos antes, um teste deve testar de forma **isolada**. Essa questão do isolamento divide opiniões, porque dependendo da escola de testes, ela pode ser interpretada de diferentes formas. A seguir podemos ver dois exemplos:

### Definição 1

- A unidade pode ser uma classe/método/função ou componente no nosso caso
- Testamos unidades isoladas
- Usamos dublês de teste para todas as dependências, exceto imutáveis*

### Definição 2

- Unidade é uma classe/método/função/componente ou um conjunto deles
- Os testes são isolados uns dos outros
- Dublês de teste são usados apenas para dependências compartilhadas*

Um exemplo da Definição 1 são os testes de `Button` e `Game`, podemos fazer isso para cada Componente, dessa forma teremos um arquivo de teste para cada arquivo.

O componente `Page` tem os componentes `Button` e `Game` como dependências, se seguirmos essa estratégia, precisamos substituir estes componentes por dublês de teste.

Para testar componentes dessa forma era utilizada uma prática conhecida como Shallow Render.
Ela é desencorajada por alguns motivos, um deles é expor detalhes de implementação.
