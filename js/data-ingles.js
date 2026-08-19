/* ============================================================
   BANCO DE QUESTÕES — INGLÊS (7º ano)
   Conteúdos: Comparatives, Superlatives, Equality (as...as),
   Inferiority (less...than), Irregular forms, Color Idioms.

   No modo DIFÍCIL (lv 7-10) não se pergunta "what is the
   comparative of good" — exige-se adequação semântica,
   identificação de erro, transformação e uso contextual.

   Campo extra: rule = "Regra rápida" (item 52).
   ============================================================ */

const INGLES = [

/* ---------------- FÁCIL (lv 2-3) ---------------- */
{
  id:'E-F01', s:'Inglês', t:'Comparatives', lv:2,
  q:'Complete: <code>A cheetah is ___ than a dog.</code>',
  o:['fast','faster','fastest','the faster'], a:1,
  hint:'A palavra "than" logo depois pede uma forma específica. Qual delas combina com "than"?',
  wrong:{
    0:'"fast" é a forma base do adjetivo. Sozinha, ela não estabelece comparação — e a presença de "than" exige que haja comparação.',
    2:'"fastest" é superlativo, usado para apontar o mais rápido de um grupo. Superlativo não combina com "than" nessa estrutura, e pediria "the".',
    3:'"the faster" mistura o artigo do superlativo com a forma do comparativo. O comparativo simples não leva "the" nessa construção.'
  },
  why:'Adjetivos curtos formam o comparativo acrescentando ER, e a comparação entre dois elementos é fechada por "than". Por isso: fast → faster than.',
  fix:'Viu "than" na frase? A palavra antes dele tem que estar no comparativo (ER ou more).',
  rule:'fast → faster → the fastest\nEstrutura: adjetivo+ER + than'
},
{
  id:'E-F02', s:'Inglês', t:'Superlatives', lv:3,
  q:'Complete: <code>Mount Everest is ___ mountain in the world.</code>',
  o:['higher','the highest','more high','the higher'], a:1,
  hint:'A expressão "in the world" indica comparação com um grupo inteiro, não com um único outro elemento.',
  wrong:{
    0:'"higher" é comparativo e serve para comparar dois elementos, normalmente com "than". Aqui compara-se com todas as montanhas do mundo.',
    2:'"more high" está incorreto: "high" é adjetivo curto e forma o comparativo com ER, não com "more".',
    3:'"the higher" usa artigo com forma comparativa. Para destacar o primeiro colocado de um grupo, é preciso o superlativo: the highest.'
  },
  why:'Quando se destaca um elemento dentro de um grupo, usa-se o superlativo com "the". Adjetivos curtos recebem EST: high → the highest.',
  fix:'"in the world", "in the class", "of all" são pistas de superlativo. Comparação com grupo pede THE + EST.',
  rule:'high → higher → the highest\nSuperlativo = THE + adjetivo+EST'
},
{
  id:'E-F03', s:'Inglês', t:'Equality', lv:3,
  q:'Choose the correct sentence.',
  o:['John is as tall as Peter.','John is as taller as Peter.','John is more tall as Peter.','John is the tallest as Peter.'], a:0,
  hint:'Para dizer que dois são iguais, o adjetivo fica na forma original, sem alteração alguma.',
  wrong:{
    1:'Na comparação de igualdade o adjetivo permanece na forma base. "taller" já é comparativo e não pode aparecer entre "as ... as".',
    2:'Dois erros: "more tall" está incorreto (tall é curto e usa ER) e "as" não combina com "more" nessa estrutura, que pediria "than".',
    3:'Superlativo não se usa com "as". A estrutura "the tallest" serviria para destacar alguém dentro de um grupo.'
  },
  why:'A igualdade se expressa por "as + adjetivo na forma base + as". O adjetivo não sofre nenhuma modificação porque não há superioridade nem inferioridade a marcar.',
  fix:'Entre dois "as", o adjetivo fica puro. as tall as, as fast as, as good as.',
  rule:'Igualdade: as + adjetivo BASE + as\nNegativa: not as ... as (= menos que)'
},
{
  id:'E-F04', s:'Inglês', t:'Inferiority', lv:3,
  q:'Complete: <code>This exercise is ___ difficult than the last one.</code>',
  o:['least','less','as','the less'], a:1,
  hint:'A frase termina com "than", e o sentido é de intensidade menor.',
  wrong:{
    0:'"least" é o superlativo de inferioridade e indica o menor de todos, exigindo "the": the least difficult. Não combina com "than".',
    2:'"as" formaria comparação de igualdade e exigiria outro "as" no final, não "than".',
    3:'"the less" acrescenta um artigo indevido. Na comparação de inferioridade entre dois elementos, usa-se apenas "less ... than".'
  },
  why:'A inferioridade se constrói com "less + adjetivo + than", e funciona com adjetivos de qualquer tamanho — inclusive os curtos, ao contrário do comparativo de superioridade.',
  fix:'less ... than = menos que. the least = o menos de todos. O "the" muda tudo.',
  rule:'Inferioridade: less + adjetivo + than\nSuperlativo: the least + adjetivo'
},
{
  id:'E-F05', s:'Inglês', t:'Irregular forms', lv:2, type:'text',
  q:'Escreva o comparativo do adjetivo <code>GOOD</code>:',
  ans:['better'],
  hint:'É uma forma irregular: não se acrescenta ER nem se usa "more". A palavra muda por completo.',
  wrongGeneric:'Essa forma não existe em inglês. "good" é irregular, então não aceita "gooder" nem "more good" — a palavra é substituída por outra.',
  why:'"good" é um adjetivo irregular. Seu comparativo é "better" e seu superlativo é "the best". Formas irregulares não seguem as regras de ER/EST nem de "more/most" — precisam ser memorizadas.',
  fix:'good → better → the best. Compare com bad → worse → the worst. Os dois pares mais cobrados em prova.',
  rule:'good → better → the best\nbad → worse → the worst\nfar → farther/further → the farthest/furthest'
},
{
  id:'E-F06', s:'Inglês', t:'Irregular forms', lv:2, type:'text',
  q:'Escreva o comparativo do adjetivo <code>BAD</code>:',
  ans:['worse'],
  hint:'Também é irregular. A palavra muda inteiramente, e não recebe ER.',
  wrongGeneric:'"badder" e "more bad" não existem no inglês padrão. Como "bad" é irregular, sua forma comparativa é outra palavra.',
  why:'"bad" é irregular: comparativo "worse", superlativo "the worst". Um erro comum é confundir "worse" (comparativo, usado com than) com "worst" (superlativo, usado com the).',
  fix:'worSE = compara dois (worse than). worST = o pior de todos (the worst). O S vem antes do T no alfabeto e também na ordem de intensidade.',
  rule:'bad → worse (than) → the worst'
},
{
  id:'E-F07', s:'Inglês', t:'Color Idioms', lv:2,
  q:'What does the idiom <code>out of the blue</code> mean?',
  o:['Unexpectedly, without warning','Very slowly','Feeling angry','Being outdoors'], a:0,
  hint:'Pense em algo que cai do céu sem aviso. A cor aqui não tem relação com tristeza.',
  wrong:{
    1:'Não há relação com velocidade. A expressão trata da ausência de aviso prévio, não do ritmo de um acontecimento.',
    2:'Raiva em inglês costuma aparecer em "seeing red", não em expressões com "blue".',
    3:'A tradução literal sugere estar ao ar livre, mas idioms não podem ser traduzidos palavra por palavra — o sentido é figurado.'
  },
  why:'"Out of the blue" significa algo que acontece de repente, sem qualquer sinal prévio. A imagem é a de algo surgindo do céu azul e limpo, quando nada indicava mudança. Exemplo: "She called me out of the blue after five years."',
  fix:'Céu azul e limpo = ninguém esperava nada → surpresa total. Não confunda com "feel blue", que é tristeza.',
  rule:'out of the blue = de repente\nfeel blue = triste\nonce in a blue moon = raramente'
},
{
  id:'E-F08', s:'Inglês', t:'Color Idioms', lv:2,
  q:'What does <code>green with envy</code> mean?',
  o:['Feeling very jealous','Feeling sick','Feeling relaxed','Feeling inexperienced'], a:0,
  hint:'A própria expressão traz a palavra que define o sentimento.',
  wrong:{
    1:'Existe "to look green" com sentido de enjoo, mas a expressão completa "green with envy" tem significado próprio e fixo.',
    2:'Relaxamento não se associa a essa expressão. A imagem é de um sentimento intenso e desconfortável.',
    3:'"Green" pode indicar inexperiência em outra expressão ("a green employee"), mas "green with envy" refere-se especificamente à inveja.'
  },
  why:'"Green with envy" descreve alguém tomado por forte inveja ou ciúme. A associação entre a cor verde e a inveja é antiga na cultura de língua inglesa e aparece inclusive em Shakespeare.',
  fix:'A palavra "envy" está escrita na expressão. Quando o idiom já entrega a pista, use-a.',
  rule:'green with envy = com inveja\ngreen = também pode significar inexperiente'
},
{
  id:'E-F09', s:'Inglês', t:'Color Idioms', lv:3,
  q:'What does <code>once in a blue moon</code> mean?',
  o:['Every night','Very rarely','Every month','At the beginning of the month'], a:1,
  hint:'A expressão descreve frequência. E uma "blue moon" é um fenômeno que quase não acontece.',
  wrong:{
    0:'Se ocorresse toda noite, seria algo comum — o oposto do que a expressão indica.',
    2:'A associação com "moon" sugere ciclo mensal, mas a expressão trata justamente do que foge do ciclo normal.',
    3:'Não há relação com início de mês. A expressão indica raridade, não um momento fixo do calendário.'
  },
  why:'"Blue moon" é o nome dado à segunda lua cheia dentro de um mesmo mês, evento incomum. Por isso "once in a blue moon" significa algo que acontece muito raramente. Exemplo: "He plays tennis once in a blue moon."',
  fix:'Lua azul é raríssima → a expressão significa raramente. É a única das expressões com "blue" que indica frequência.',
  rule:'once in a blue moon = raramente (frequência)\nout of the blue = de repente (surpresa)\nfeel blue = triste (humor)'
},

/* ---------------- MÉDIO (lv 4-6) ---------------- */
{
  id:'E-M01', s:'Inglês', t:'Comparatives', lv:5,
  q:'Complete: <code>This book is ___ than that one.</code>',
  o:['more interesting','most interesting','interestinger','the more interesting'], a:0,
  hint:'"Interesting" tem quatro sílabas. Adjetivos longos não recebem terminação.',
  wrong:{
    1:'"most interesting" é superlativo e pede "the", além de não combinar com "than". Serviria para destacar o mais interessante de um grupo.',
    2:'"interestinger" não existe. Apenas adjetivos curtos aceitam ER; os longos usam "more".',
    3:'O artigo "the" não é usado no comparativo simples. Ele aparece no superlativo: the most interesting.'
  },
  why:'Adjetivos com três sílabas ou mais formam o comparativo com "more" antes do adjetivo, mantendo "than" para fechar a comparação: more interesting than.',
  fix:'Conte as sílabas. Curto (1 sílaba, ou 2 terminadas em -y) → ER. Longo (3+) → MORE.',
  rule:'tall → taller (curto)\nhappy → happier (2 sílabas com -y)\ninteresting → more interesting (longo)'
},
{
  id:'E-M02', s:'Inglês', t:'Equality', lv:5,
  q:'Which sentence correctly expresses that two players have the same level?',
  o:['Carlos is as focused as Jannik.','Carlos is as focused than Jannik.','Carlos is more focused as Jannik.','Carlos is so focused than Jannik.'], a:0,
  hint:'A igualdade usa a mesma palavra duas vezes, uma antes e outra depois do adjetivo.',
  wrong:{
    1:'Erro de par: quem abre com "as" precisa fechar com "as". "than" pertence às estruturas de superioridade e inferioridade.',
    2:'"more" indica superioridade e exige "than". Misturar "more" com "as" produz uma estrutura inexistente.',
    3:'"so" não forma comparação de igualdade em frase afirmativa desse tipo, e "than" está incompatível com a ideia de igualdade.'
  },
  why:'A comparação de igualdade se constrói com o par "as ... as", mantendo o adjetivo na forma base. A regra prática é que "as" pede "as", e "more/less/-er" pedem "than".',
  fix:'as combina com as. more/less/-er combinam com than. Nunca cruze os pares.',
  rule:'as + base + as → igualdade\nmore/-er + than → superioridade\nless + than → inferioridade'
},
{
  id:'E-M03', s:'Inglês', t:'Superlatives', lv:5,
  q:'Complete: <code>She is ___ student in the class.</code>',
  o:['the best','better','good','the better'], a:0,
  hint:'"in the class" delimita um grupo. E o adjetivo em questão é irregular.',
  wrong:{
    1:'"better" é comparativo e serve para comparar duas pessoas, geralmente com "than". Aqui a comparação é com toda a turma.',
    2:'"good" é a forma base e não estabelece nenhuma comparação. A frase perderia o sentido pretendido.',
    3:'"the better" não é a forma superlativa de "good". O superlativo irregular correto é "the best".'
  },
  why:'Diante de um grupo (in the class), usa-se o superlativo. Como "good" é irregular, sua forma superlativa é "the best", e não "the goodest" nem "the better".',
  fix:'in the class / in the world / of all → superlativo. Se o adjetivo for good, a resposta é the best.',
  rule:'good → better than → the best\nA presença de THE indica superlativo.'
},
{
  id:'E-M04', s:'Inglês', t:'Irregular forms', lv:6,
  q:'Complete correctly: <code>Today the weather is ___ than yesterday, and tomorrow will be ___ day of the week.</code>',
  o:['worse / the worst','worst / the worse','worse / the worse','bader / the baddest'], a:0,
  hint:'A primeira lacuna compara dois dias; a segunda destaca um dia entre todos. Formas diferentes.',
  wrong:{
    1:'As formas estão invertidas. "worst" é superlativo e não combina com "than"; "the worse" não funciona como superlativo.',
    2:'A primeira está correta, mas a segunda não: o superlativo de "bad" é "the worst", não "the worse".',
    3:'"bader" e "the baddest" não existem no inglês padrão, pois "bad" é irregular e não aceita ER/EST.'
  },
  why:'A frase exige as duas formas do mesmo adjetivo irregular. Comparando dois elementos com "than", usa-se o comparativo "worse". Destacando um dentro de um grupo (of the week), usa-se o superlativo "the worst".',
  fix:'than → worse. the ... of/in → the worst. Deixe o "than" e o "the" decidirem por você.',
  rule:'bad → worse (than) → the worst (in/of)'
},
{
  id:'E-M05', s:'Inglês', t:'Inferiority', lv:5,
  q:'Which sentence correctly expresses inferiority?',
  o:['This racket is less expensive than that one.','This racket is least expensive than that one.','This racket is more less expensive than that one.','This racket is as less expensive than that one.'], a:0,
  hint:'Inferioridade entre dois elementos usa uma palavra só antes do adjetivo e "than" depois.',
  wrong:{
    1:'"least" é superlativo de inferioridade e exige "the", sem "than": the least expensive. Não serve para comparar apenas dois.',
    2:'"more less" acumula duas marcas de comparação opostas. Só se usa uma por vez.',
    3:'"as" pertence à igualdade e exige outro "as". Combiná-lo com "less" e "than" produz uma estrutura inexistente.'
  },
  why:'A inferioridade se expressa por "less + adjetivo + than", válida para adjetivos curtos e longos. Já "the least + adjetivo" indica o menor grau dentro de um grupo.',
  fix:'less ... than = menos que (dois). the least = o menos de todos (grupo).',
  rule:'less expensive than (comparativo)\nthe least expensive (superlativo)'
},
{
  id:'E-M06', s:'Inglês', t:'Comparatives', lv:6,
  q:'Complete: <code>Table tennis is ___ than tennis for many beginners, because the court is smaller.</code>',
  o:['easier','more easy','easiest','the easier'], a:0,
  hint:'O adjetivo tem duas sílabas e termina em -y. Existe uma regra específica para esse caso.',
  wrong:{
    1:'"more easy" está incorreto. Adjetivos de duas sílabas terminados em -y seguem a regra dos curtos, trocando o Y por I e acrescentando ER.',
    2:'"easiest" é superlativo e pediria "the", além de não combinar com "than".',
    3:'O comparativo simples não leva artigo. "the easier" só apareceria em estruturas especiais, como "the easier, the better".'
  },
  why:'Adjetivos de duas sílabas terminados em -y comportam-se como curtos: o Y vira I e acrescenta-se ER. Assim, easy → easier, happy → happier, busy → busier.',
  fix:'Terminou em -y? Troque por I e ponha ER. easy → easier, não "more easy".',
  rule:'easy → easier → the easiest\nhappy → happier → the happiest\nRegra: Y vira I antes de ER/EST'
},
{
  id:'E-M07', s:'Inglês', t:'Color Idioms', lv:6,
  q:'Read: <code>"I was studying normally and then, out of the blue, the teacher announced a test."</code> The idiom indicates that the announcement was:',
  o:['expected by everyone','sudden and unannounced','postponed to another day','made in a sad tone'], a:1,
  hint:'A expressão contrasta com "studying normally". O que quebra a normalidade?',
  wrong:{
    0:'O contexto indica o contrário. A expressão marca justamente a ruptura de uma situação que seguia normalmente.',
    2:'Não há indicação de adiamento. O anúncio aconteceu, e o que se destaca é o modo repentino.',
    3:'"out of the blue" trata de surpresa, não de emoção. Tristeza seria "feel blue", uma expressão diferente.'
  },
  why:'Em contexto, "out of the blue" qualifica o momento do anúncio: veio sem aviso, interrompendo uma rotina. O contraste com "studying normally" confirma que o sentido é de surpresa, e não de emoção ou de tempo.',
  fix:'Em questão de idiom com texto, procure o contraste na frase. "normally" x "out of the blue" entrega a resposta.',
  rule:'out of the blue = suddenly, without warning'
},
{
  id:'E-M08', s:'Inglês', t:'Superlatives', lv:6,
  q:'Complete: <code>That was ___ point of the whole match.</code>',
  o:['the best','better','good','more good'], a:0,
  hint:'"of the whole match" delimita um conjunto inteiro, e não uma comparação entre dois pontos.',
  wrong:{
    1:'"better" compara dois elementos e normalmente vem com "than". Aqui destaca-se um ponto entre todos os da partida.',
    2:'"good" é a forma base e não expressa destaque nem comparação.',
    3:'"more good" não existe. "good" é irregular: better, the best.'
  },
  why:'A expressão "of the whole match" define um grupo, o que exige superlativo. Sendo "good" irregular, a forma correta é "the best".',
  fix:'of the / in the + grupo → superlativo. good vira the best, nunca "the goodest".',
  rule:'good → better → the best'
},
{
  id:'E-M09', s:'Inglês', t:'Color Idioms', lv:5,
  q:'What does <code>a white lie</code> usually mean?',
  o:['A harmless lie, told to avoid hurting someone','A very serious crime','An official document','A lie told in court'], a:0,
  hint:'O adjetivo "white" costuma suavizar o substantivo que acompanha.',
  wrong:{
    1:'A expressão indica justamente o oposto: uma mentira de pouca gravidade, sem intenção de causar dano.',
    2:'Não há relação com documentos. Trata-se de uma expressão sobre comportamento, não sobre burocracia.',
    3:'Mentir em juízo seria "perjury". "White lie" pertence ao campo das relações cotidianas.'
  },
  why:'"A white lie" é a mentira pequena e socialmente aceita, dita para poupar o sentimento de alguém — por exemplo, elogiar um presente de que não se gostou. O branco funciona como marca de inofensividade.',
  fix:'white = suaviza. white lie = mentirinha sem maldade. Compare com black sheep, em que a cor marca o desvio.',
  rule:'a white lie = mentirinha inofensiva\nthe black sheep = a ovelha negra da família'
},

/* ---------------- DIFÍCIL (lv 7-10) ---------------- */
{
  id:'E-D01', s:'Inglês', t:'Comparatives', lv:8,
  q:'Choose the sentence in which the comparative structure is <b>both grammatically correct and semantically appropriate</b> to the context: <i>a beginner is describing why he prefers table tennis.</i>',
  o:[
    '"Table tennis is more easy than tennis, so I prefer it."',
    '"Table tennis is easier than tennis, so I prefer it."',
    '"Table tennis is the easiest than tennis, so I prefer it."',
    '"Table tennis is as easier as tennis, so I prefer it."'
  ], a:1,
  hint:'Duas alternativas erram a forma do adjetivo, uma erra o par de conectivos. Só uma sobrevive às duas checagens.',
  wrong:{
    0:'A estrutura é agramatical: "easy" tem duas sílabas terminadas em -y e segue a regra dos curtos, formando "easier". "more easy" não é aceito no inglês padrão.',
    2:'Mistura superlativo com "than". "the easiest" exigiria um grupo de referência ("the easiest sport of all"), e não uma comparação com um único outro esporte.',
    3:'Erro duplo: dentro de "as ... as" o adjetivo deve ficar na forma base ("as easy as"), e a frase ainda afirmaria igualdade, contradizendo a preferência expressa por "so I prefer it".'
  },
  why:'A questão exige duas verificações simultâneas. Na forma, "easy" segue a regra dos adjetivos curtos com -y: easier. Na semântica, o falante compara dois esportes e justifica uma preferência, o que pede comparativo de superioridade com "than" — não igualdade nem superlativo. Só a segunda alternativa satisfaz as duas exigências ao mesmo tempo.',
  fix:'Em questão de adequação, faça duas passadas: primeiro a forma do adjetivo, depois se o sentido da estrutura combina com o contexto. Uma frase pode estar certa na gramática e errada no sentido.',
  rule:'easy → easier → the easiest\ncomparativo + than (dois elementos)\nsuperlativo + the (grupo)\nas + base + as (igualdade)'
},
{
  id:'E-D02', s:'Inglês', t:'Identificação de erro', lv:8,
  q:'Identify the sentence that contains a <b>grammatical error</b>.',
  o:[
    'This chapter is more exciting than the previous one.',
    'She is the most talented player in the team.',
    'My results are worst than they were last month.',
    'He is not as confident as his opponent.'
  ], a:2,
  hint:'Três frases estão corretas. Procure a que usa forma de superlativo onde o contexto pede comparativo.',
  wrong:{
    0:'Está correta. "exciting" é adjetivo longo, forma o comparativo com "more" e fecha com "than".',
    1:'Está correta. "talented" é longo, recebe "the most" no superlativo, e "in the team" delimita o grupo.',
    3:'Está correta. A negativa "not as ... as" expressa inferioridade de forma idiomática, com o adjetivo na forma base.'
  },
  why:'O erro está em "worst than". "worst" é superlativo e exige "the" com um grupo de referência ("the worst month of the year"). Como a frase compara dois momentos usando "than", a forma correta é o comparativo "worse": "My results are worse than they were last month." A confusão entre worse e worst é uma das mais frequentes com adjetivos irregulares.',
  fix:'Regra de ouro: se há "than" na frase, a palavra antes NÃO pode ser superlativo. worse than, nunca worst than.',
  rule:'bad → worse than → the worst in/of\nSuperlativo pede THE + grupo, nunca THAN'
},
{
  id:'E-D03', s:'Inglês', t:'Transformação', lv:9,
  q:'Read: <code>Ana is not as fast as Beto.</code> Which sentence <b>preserves the same meaning</b>?',
  o:[
    'Ana is faster than Beto.',
    'Beto is less fast than Ana.',
    'Beto is faster than Ana.',
    'Ana and Beto are equally fast.'
  ], a:2,
  hint:'Reescreva mentalmente: se Ana não alcança a velocidade de Beto, quem é o mais rápido dos dois?',
  wrong:{
    0:'Inverte o sentido. A frase original nega que Ana atinja a velocidade de Beto, portanto ela não pode ser a mais rápida.',
    1:'Também inverte a relação: coloca Beto como o mais lento, quando o original indica o contrário.',
    3:'A negativa "not as ... as" exclui justamente a igualdade. Se fossem iguais, a frase original seria "Ana is as fast as Beto".'
  },
  why:'A estrutura "not as + adjetivo + as" nega a igualdade indicando que o primeiro elemento fica abaixo do segundo. Assim, "Ana is not as fast as Beto" equivale a dizer que Beto é mais rápido, ou, de forma equivalente, que Ana é menos rápida que Beto ("Ana is less fast than Beto"). O erro típico é manter o mesmo sujeito ao transformar a frase: ao trocar a estrutura, é preciso verificar quem ocupa a posição superior.',
  fix:'not as X as = fica abaixo. Ao reescrever, troque a ordem dos nomes ou troque more por less — nunca as duas coisas ao mesmo tempo.',
  rule:'A is not as fast as B\n= B is faster than A\n= A is less fast than B'
},
{
  id:'E-D04', s:'Inglês', t:'Irregular forms', lv:9,
  q:'Choose the sentence with the <b>correct and contextually appropriate</b> use of the irregular comparative.',
  o:[
    'The gym is farther from my house than the school, about two kilometres away.',
    'The gym is further from my house than the school, about two kilometres away.',
    'The gym is farer from my house than the school, about two kilometres away.',
    'The gym is more far from my house than the school, about two kilometres away.'
  ], a:0,
  hint:'Duas formas existem, mas uma delas é preferida quando se fala de distância medida em quilômetros.',
  wrong:{
    1:'"further" existe e é correto, porém é preferido em sentido abstrato (further information, further discussion). Como a frase mede distância física em quilômetros, "farther" é a escolha mais apropriada.',
    2:'"farer" não existe. "far" é irregular e não aceita a terminação ER.',
    3:'"more far" também não é aceito. Adjetivos irregulares não usam "more".'
  },
  why:'"far" tem duas formas comparativas. "farther" é usado preferencialmente para distância física e mensurável; "further" é preferido em sentido figurado ou abstrato, como aprofundamento de um assunto. A frase informa a distância em quilômetros, o que caracteriza distância física — daí "farther". A questão é difícil porque duas alternativas são gramaticalmente possíveis, e a escolha depende do contexto, não apenas da regra.',
  fix:'farTHER tem "ar" de "far away" → distância física. FURTHER → assunto, informação, discussão.',
  rule:'far → farther (distância física) → the farthest\nfar → further (sentido abstrato) → the furthest'
},
{
  id:'E-D05', s:'Inglês', t:'Estruturas comparativas', lv:9,
  q:'Complete correctly: <code>___ you practise, ___ your results become.</code>',
  o:['The more / the better','More / better','The most / the best','More / the best'], a:0,
  hint:'É uma estrutura fixa de proporção: quanto mais X, mais Y. Ela exige artigo nas duas partes.',
  wrong:{
    1:'A estrutura de proporção exige "the" antes de cada comparativo. Sem os artigos, a frase fica agramatical.',
    2:'"the most / the best" são superlativos e não expressam proporção entre duas variáveis, apenas destacam o topo de um grupo.',
    3:'Mistura comparativo sem artigo com superlativo, quebrando o paralelismo exigido pela estrutura.'
  },
  why:'A construção "the + comparativo ..., the + comparativo ..." expressa proporção: à medida que um elemento aumenta, o outro também. Exemplos: "The more you practise, the better your results become", "The harder the exam, the more useful the study". Note que aqui o "the" acompanha um comparativo, e não um superlativo — é a única situação em que isso ocorre.',
  fix:'Quanto mais..., mais... = The more..., the better... Sempre os dois "the", sempre com comparativo.',
  rule:'The + comparativo, the + comparativo\nThe more you study, the easier it gets.'
},
{
  id:'E-D06', s:'Inglês', t:'Color Idioms', lv:8,
  ctx:'<b>Dialogue.</b><br>— How often does your brother visit you?<br>— Honestly? <i>Once in a blue moon.</i> But last week he showed up <i>out of the blue</i>, and I was so happy that my sister was <i>green with envy</i>.',
  q:'Based on the dialogue, which interpretation is correct?',
  o:[
    'The brother visits frequently, arrived as scheduled, and the sister was sad.',
    'The brother rarely visits, arrived unexpectedly, and the sister was jealous.',
    'The brother never visits, arrived late, and the sister was relieved.',
    'The brother visits monthly, arrived on a blue moon night, and the sister was ill.'
  ], a:1,
  hint:'São três expressões distintas com sentidos diferentes. Traduza cada uma antes de escolher, e não se apoie nas cores.',
  wrong:{
    0:'Erra as três. "Once in a blue moon" indica raridade, não frequência; "out of the blue" indica surpresa, não agendamento; e "green with envy" é inveja, não tristeza.',
    2:'"Once in a blue moon" significa raramente, e não nunca. Além disso, nada no diálogo indica atraso, e "green with envy" não expressa alívio.',
    3:'Interpreta as expressões literalmente. Idioms não podem ser lidos ao pé da letra: não há relação com noite de lua nem com doença.'
  },
  why:'O diálogo combina três idioms que precisam ser distinguidos. "Once in a blue moon" responde à pergunta sobre frequência e indica raridade. "Out of the blue" qualifica a chegada como inesperada, e o contraste com a raridade reforça esse sentido. "Green with envy" descreve a reação da irmã como inveja diante da alegria do falante. Note que duas expressões usam "blue" com sentidos completamente diferentes — a cor não determina o significado.',
  fix:'Mesma cor, sentidos diferentes: blue moon = frequência, out of the blue = surpresa, feel blue = tristeza. Sempre leia a expressão inteira, nunca a cor sozinha.',
  rule:'once in a blue moon = rarely\nout of the blue = suddenly\nfeel blue = sad\ngreen with envy = jealous'
},
{
  id:'E-D07', s:'Inglês', t:'Superlatives', lv:10, type:'text',
  q:'Complete a frase com a forma correta do adjetivo entre parênteses: <code>This is ___ match I have ever watched. (good)</code>',
  ans:['the best'],
  hint:'A expressão "I have ever watched" indica comparação com tudo o que já foi visto. E "good" é irregular.',
  wrongGeneric:'Formas como "better", "the better", "the goodest" ou apenas "best" não completam corretamente. A estrutura com "ever" exige superlativo, e "good" é irregular — falta a forma exata, com artigo.',
  why:'A construção "the + superlativo + I have ever + particípio" compara o item com todas as experiências anteriores do falante, e por isso exige superlativo, nunca comparativo. Como "good" é irregular, a forma é "the best". O artigo "the" é obrigatório: escrever apenas "best match" estaria incompleto no inglês padrão.',
  fix:'Viu "ever" com present perfect? É superlativo com THE. the best film I have ever seen, the worst day I have ever had.',
  rule:'the best ... I have ever seen/watched/had\ngood → better → the best'
},
{
  id:'E-D08', s:'Inglês', t:'Identificação de erro', lv:10,
  ctx:'A student wrote the following paragraph:<br><i>"Tennis is more harder than table tennis. For me, table tennis is the most easy sport, but my coach says it is not as simple as it looks."</i>',
  q:'How many grammatical errors are there in the paragraph, and what are they?',
  o:[
    'One error: "more harder".',
    'Two errors: "more harder" and "the most easy".',
    'Two errors: "the most easy" and "not as simple as".',
    'Three errors: "more harder", "the most easy" and "not as simple as".'
  ], a:1,
  hint:'Verifique cada estrutura separadamente. Uma delas está perfeitamente correta e serve de armadilha.',
  wrong:{
    0:'Identifica corretamente o primeiro erro, mas deixa passar "the most easy", que também está incorreto por aplicar a regra dos adjetivos longos a um adjetivo curto terminado em -y.',
    2:'"not as simple as" está correta: é a forma idiomática de negar igualdade, com o adjetivo na forma base. Apontá-la como erro é cair na armadilha da questão.',
    3:'Soma um erro inexistente. "not as simple as" é uma construção legítima e frequente no inglês.'
  },
  why:'São exatamente dois erros. Primeiro, "more harder" acumula duas marcas de comparativo: "hard" é curto e forma "harder", então basta "harder than". Segundo, "the most easy" aplica a regra dos adjetivos longos a "easy", que tem duas sílabas terminadas em -y e segue a regra dos curtos: "the easiest". Já "not as simple as" está correta e funciona como distrator: é a estrutura idiomática para negar igualdade, com o adjetivo na forma base. A dificuldade aqui está em resistir à tentação de marcar tudo como erro.',
  fix:'Dois erros clássicos: dupla marcação (more + ER) e regra trocada (most + adjetivo curto). E lembre: "not as ... as" está sempre correto.',
  rule:'hard → harder than (nunca "more harder")\neasy → the easiest (nunca "the most easy")\nnot as + base + as ✓ correto'
}

];
