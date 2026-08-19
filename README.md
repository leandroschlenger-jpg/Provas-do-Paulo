# Paulo Academy — sistema de progressão acadêmica (7º ano)

Plataforma de estudo em formato de game para História e Inglês, com correção
imediata, explicação pedagógica dos erros e acompanhamento de evolução real.

Site estático: nenhum build, nenhuma dependência. Basta abrir `index.html`.

## Princípio central

A plataforma nunca confunde **atividade** com **aprendizado**.

- **XP** mede atividade e sobe com qualquer acerto.
- **Nível** mede domínio e **trava** até haver prova de evolução real:
  desempenho em dificuldade maior, erros corrigidos e resultado na escola.

Por isso repetir questão fácil rende cada vez menos XP (e nada além do teto
diário) e não move o nível.

## Estrutura

```
index.html            estrutura e ordem de carregamento
css/style.css         design (HUD competitivo / dashboard esportivo)
js/data-historia.js   banco de questões de História
js/data-ingles.js     banco de questões de Inglês
js/data-reforco.js    perguntas de "Testar se entendi"
js/state.js           XP, níveis, maestria, missões, conquistas
js/analysis.js        indicador de situação e análise textual
js/quiz.js            execução do simulado e explicações
js/panels.js          telas
js/app.js             navegação e boot
```

`v1-simulados-original.html` é a primeira versão, mantida como referência.

## Dificuldade

Escala interna de 1 a 10; o aluno enxerga apenas três faixas.

| Faixa   | Níveis | O que exige                                          |
|---------|--------|------------------------------------------------------|
| Fácil   | 1–3    | fixação, memorização, perguntas diretas               |
| Médio   | 4–6    | interpretação, aplicação, comparação                  |
| Difícil | 7–10   | inferência, causa/consequência, pegadinha conceitual  |
| Boss    | 8–10   | conteúdos misturados, sem questão óbvia               |

No modo Difícil não há perguntas de forma ("qual o comparativo de good") —
exige-se adequação semântica, identificação de erro e transformação de frases.

## Fluxo do erro

1. Errou → **dica**, sem revelar a resposta
2. Errou de novo → **explicação em 4 blocos**: por que sua resposta está errada
   (específica da alternativa marcada), qual é a correta, por que ela está
   correta, como lembrar na prova (+ regra rápida em Inglês)
3. Depois → **Testar se entendi**: nova pergunta sobre o mesmo conceito

O placar do simulado conta apenas acertos de **primeira tentativa**. Acerto na
segunda rende XP reduzido e registra evolução, mas não vira ponto.

## Maestria

Uma questão só sai do Caderno de Erros quando é acertada **duas vezes em dias
diferentes** após o erro. Acerto isolado é sorte; acerto repetido é domínio.

## Adicionar questões

Inclua um objeto no array de `js/data-historia.js` ou `js/data-ingles.js`:

```js
{
  id:'H-M10', s:'História', t:'Tópico', lv:5,
  ctx:'texto de apoio (opcional)',
  q:'enunciado', o:['a','b','c','d'], a:1,
  hint:'dica da 2ª tentativa, sem entregar a resposta',
  wrong:{0:'por que ESSA alternativa está errada', 2:'...', 3:'...'},
  why:'por que a correta está correta',
  fix:'como lembrar na prova',
  rule:'regra rápida (só Inglês)'
}
```

Para resposta escrita: `type:'text'`, `ans:['resposta aceita']` e
`wrongGeneric:'...'` no lugar de `o`, `a` e `wrong`.

Ao alterar CSS ou JS, **incremente o `?v=` nas tags de `index.html`** — sem isso
o celular continua servindo a versão antiga do cache.

## Dados

Todo o progresso fica no `localStorage` do próprio aparelho. Não sincroniza
entre celular e computador, e limpar os dados do navegador apaga o histórico.
Há exportação de backup em JSON na aba "Como estou".
