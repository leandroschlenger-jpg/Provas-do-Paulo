/* ============================================================
   BANCO DE QUESTÕES — INGLÊS / PROVA 18-09-2026
   Conteúdo oficial informado pela secretaria:
     - Text comprehension
     - Time telling (pág. 128)
     - Parts of the day, periods of time, Seasons, months, days of the week
     - Double comparative (pág. 124)
     - Comparatives (inferiority, equality, superiority)
     - Body Art (págs. 110 e 111)
     - Plastic surgery (págs. 108 e 109)

   IMPORTANTE — definições seguem o LIVRO do Paulo:
   · "Double comparative" no livro = comparative AND comparative
     (colder and colder / more and more frightened), usado para
     mostrar mudança contínua. Não confundir com "the more..., the
     better", que é outra estrutura (tópico "Estruturas comparativas").
   · A pág. 109 aceita as DUAS formas na negativa da igualdade:
     "not as tall as" E "not so tall as".
   ============================================================ */

/* tópicos que caem na prova de 18/09 */
const PROVA = {
  nome:'Prova 18/09',
  data:'2026-09-18',
  topicos:{
    'Inglês':['Time telling','Sense of time','Double comparative','Comparatives',
              'Equality','Inferiority','Superlatives','Body Art','Plastic Surgery'],
    'História':['Povos Pré-Colombianos']
  }
};

INGLES.push(

/* ==========================================================
   TIME TELLING (pág. 128)
   past = 1 a 30 · to = 31 a 59 · quarter = 15 · half = 30
   ========================================================== */
{
  id:'P-TT01', s:'Inglês', t:'Time telling', lv:2,
  q:'How do you say <code>3:00</code> in English?',
  o:["It's three o'clock","It's three hours","It's half past three","It's a quarter to three"], a:0,
  hint:'Quando o ponteiro dos minutos está exatamente no 12, existe uma expressão própria.',
  wrong:{
    1:'"three hours" indica duração (três horas de duração), não horário. Para dizer que horas são, usa-se "o\'clock".',
    2:'"half past three" é 3:30, ou seja, meia hora depois das três.',
    3:'"a quarter to three" é 2:45, quinze minutos ANTES das três.'
  },
  why:'Quando os minutos estão em zero, usa-se "o\'clock": It\'s three o\'clock. A expressão só vale para a hora exata — nunca se diz "It\'s three o\'clock and ten".',
  fix:'Minuto 00 = o\'clock. Se aparecer qualquer minuto diferente de zero, o\'clock está errado.',
  rule:"3:00 → It's three o'clock\n3:15 → It's a quarter past three\n3:30 → It's half past three\n3:45 → It's a quarter to four"
},
{
  id:'P-TT02', s:'Inglês', t:'Time telling', lv:3,
  q:'How do you say <code>4:15</code>?',
  o:["It's a quarter past four","It's a quarter to four","It's fifteen o'clock","It's half past four"], a:0,
  hint:'15 minutos é um quarto de hora. E os minutos já passaram das quatro.',
  wrong:{
    1:'"a quarter to four" seria 3:45 — quinze minutos que ainda FALTAM para as quatro. Aqui os quinze minutos já passaram.',
    2:'"o\'clock" só se usa com minuto zero. Além disso, não se diz "fifteen o\'clock" para minutos.',
    3:'"half past four" é 4:30, e não 4:15.'
  },
  why:'Até 30 minutos usa-se PAST (depois de), contando a partir da hora que já passou. Como 15 minutos é um quarto de hora, diz-se "a quarter past four".',
  fix:'Minuto de 1 a 30 → PAST + a hora que já passou. Minuto de 31 a 59 → TO + a próxima hora.',
  rule:'past = depois (1 a 30)\nto = para (31 a 59)\nquarter = 15 min · half = 30 min'
},
{
  id:'P-TT03', s:'Inglês', t:'Time telling', lv:3, type:'text',
  q:'Escreva por extenso, em inglês, o horário <code>6:30</code>. (Comece com "It\'s")',
  ans:["it's half past six","its half past six","it is half past six","half past six"],
  hint:'30 minutos é meia hora. E a hora usada é a que já passou.',
  wrongGeneric:'A forma esperada usa "half past". Erros comuns: escrever "half past seven" (a hora deve ser a que JÁ passou, seis) ou "half to six".',
  why:'30 minutos é meia hora, e como está dentro da faixa do PAST (1 a 30), conta-se a partir da hora que já passou: It\'s half past six. Não existe "half to".',
  fix:'"half past" sempre acompanha a hora que JÁ passou. 6:30 é half past SIX, nunca half past seven.',
  rule:"6:30 → It's half past six\nNunca existe 'half to'."
},
{
  id:'P-TT04', s:'Inglês', t:'Time telling', lv:5,
  q:'How do you say <code>9:45</code>?',
  o:["It's a quarter to ten","It's a quarter to nine","It's a quarter past nine","It's forty-five past nine"], a:0,
  hint:'Passou de 30 minutos, então conta-se o que falta. E o que falta é para chegar em qual hora?',
  wrong:{
    1:'Essa é a pegadinha clássica. Com TO, a hora citada é a PRÓXIMA, não a atual. Faltam 15 minutos para as DEZ, não para as nove.',
    2:'"a quarter past nine" é 9:15. Aqui já se passou da metade da hora.',
    3:'Acima de 30 minutos não se usa PAST com o número cheio. A forma correta conta o que falta para a próxima hora.'
  },
  why:'Depois dos 30 minutos, o inglês conta quanto FALTA para a próxima hora, usando TO. De 9:45 faltam 15 minutos (a quarter) para as 10:00, logo "a quarter to ten".',
  fix:'Com TO, some 1 na hora do relógio. 9:45 → to TEN. 11:50 → to TWELVE. É o erro que mais cai em prova.',
  rule:'9:45 → a quarter to ten\n7:50 → ten to eight\n11:55 → five to twelve'
},
{
  id:'P-TT05', s:'Inglês', t:'Time telling', lv:5,
  q:'How do you say <code>7:50</code>?',
  o:["It's ten to eight","It's ten to seven","It's fifty past seven","It's ten past eight"], a:0,
  hint:'Quantos minutos faltam para a próxima hora cheia? E qual é essa próxima hora?',
  wrong:{
    1:'Com TO, usa-se a PRÓXIMA hora. Faltam dez minutos para as oito, não para as sete.',
    2:'Acima de 30 minutos o inglês não conta o que passou, e sim o que falta.',
    3:'"ten past eight" é 8:10, um horário que ainda não chegou.'
  },
  why:'De 7:50 até 8:00 faltam dez minutos. Como passou dos 30, usa-se TO com a hora seguinte: "It\'s ten to eight".',
  fix:'Conta simples: 60 menos o minuto = quanto falta. 60-50=10 → ten to, e a hora sobe para oito.',
  rule:'minuto > 30 → (60 − minuto) TO (hora + 1)'
},
{
  id:'P-TT06', s:'Inglês', t:'Time telling', lv:6,
  q:'How do you say <code>5:35</code>?',
  o:["It's twenty-five to six","It's twenty-five past five","It's thirty-five past five","It's twenty-five to five"], a:0,
  hint:'60 menos 35 dá quantos minutos? E a hora sobe ou fica?',
  wrong:{
    1:'"twenty-five past five" é 5:25, e não 5:35.',
    2:'Passando de 30 minutos, o inglês não usa mais PAST com o número cheio; passa a contar o que falta.',
    3:'A hora está errada: com TO usa-se a próxima hora, que é seis.'
  },
  why:'60 − 35 = 25, então faltam 25 minutos para as seis. Como passou de 30 minutos, usa-se TO com a hora seguinte: "twenty-five to six".',
  fix:'35, 40, 45, 50, 55 viram 25, 20, 15, 10, 5 TO — e a hora sempre sobe um.',
  rule:'5:35 → twenty-five to six\n5:40 → twenty to six\n5:45 → a quarter to six'
},
{
  id:'P-TT07', s:'Inglês', t:'Time telling', lv:8,
  ctx:'<b>Paulo\'s schedule.</b> His English class starts at a quarter past two and lasts fifty minutes. Right after it, he has a fifteen-minute break.',
  q:'What time does Paulo\'s break finish?',
  o:["At twenty past three","At a quarter past three","At five past three","At half past three"], a:0,
  hint:'Some os 50 minutos da aula e depois os 15 do intervalo. Só então converta para inglês.',
  wrong:{
    1:'"a quarter past three" é 3:15, que seria o fim da aula sem contar o intervalo de quinze minutos.',
    2:'"five past three" é 3:05, resultado de somar apenas parte do tempo.',
    3:'"half past three" é 3:30, dez minutos além do total. A soma correta dá 3:20.'
  },
  why:'A aula começa às 2:15 (a quarter past two) e dura 50 minutos, terminando às 3:05. Somando os 15 minutos de intervalo, chega-se a 3:20, que em inglês é "twenty past three" — ainda dentro da faixa do PAST, por estar abaixo de 30 minutos.',
  fix:'Em questão de horário com texto: primeiro resolva a conta em números, depois traduza. Tentar fazer as duas coisas juntas é o que gera erro.',
  rule:'2:15 + 50min = 3:05\n3:05 + 15min = 3:20 → twenty past three'
},
{
  id:'P-TT08', s:'Inglês', t:'Time telling', lv:8,
  q:'Identify the sentence with an <b>error</b> in the time expression.',
  o:[
    "It's a quarter past to seven.",
    "It's half past eleven.",
    "It's twenty to nine.",
    "It's five past one."
  ], a:0,
  hint:'Três frases seguem a regra. Uma delas usa duas marcas opostas ao mesmo tempo.',
  wrong:{
    1:'Está correta: 11:30, com "half past" indicando meia hora depois das onze.',
    2:'Está correta: 8:40, faltando vinte minutos para as nove.',
    3:'Está correta: 1:05, cinco minutos depois de uma hora.'
  },
  why:'"a quarter past to seven" acumula PAST e TO na mesma frase, e os dois são opostos: past indica tempo que já passou, to indica tempo que falta. Só um pode aparecer. O correto seria "a quarter past seven" (7:15) ou "a quarter to seven" (6:45).',
  fix:'PAST e TO nunca aparecem juntos. Se vir os dois na mesma frase, o erro já está achado.',
  rule:'past OU to, nunca os dois\na quarter past seven = 7:15\na quarter to seven = 6:45'
},

/* ==========================================================
   SENSE OF TIME — parts of the day, periods, seasons,
   months, days of the week
   ========================================================== */
{
  id:'P-ST01', s:'Inglês', t:'Sense of time', lv:2,
  q:'Which month comes right after <code>August</code>?',
  o:['September','July','October','April'], a:0,
  hint:'É o mês que abre o último terço do ano, logo depois de agosto.',
  wrong:{
    1:'"July" (julho) vem ANTES de agosto, e não depois.',
    2:'"October" (outubro) vem depois de setembro, ou seja, dois meses após agosto.',
    3:'"April" (abril) é o quarto mês do ano, bem distante de agosto.'
  },
  why:'A ordem dos meses em inglês é January, February, March, April, May, June, July, August, September, October, November e December. Depois de August vem September.',
  fix:'Os quatro últimos meses são fáceis de ligar ao português: September, October, November, December.',
  rule:'Jan Feb Mar Apr May Jun\nJul Aug Sep Oct Nov Dec'
},
{
  id:'P-ST02', s:'Inglês', t:'Sense of time', lv:2,
  q:'Which day comes right after <code>Friday</code>?',
  o:['Saturday','Thursday','Sunday','Monday'], a:0,
  hint:'É o primeiro dia do fim de semana.',
  wrong:{
    1:'"Thursday" (quinta) vem antes de Friday, não depois.',
    2:'"Sunday" (domingo) vem depois de sábado, ou seja, dois dias após sexta.',
    3:'"Monday" (segunda) abre a semana seguinte, três dias depois.'
  },
  why:'A ordem é Sunday, Monday, Tuesday, Wednesday, Thursday, Friday e Saturday. Depois de Friday vem Saturday.',
  fix:'Cuidado com o par que mais confunde: Tuesday é terça e Thursday é quinta. Thursday tem o H, como em quinta... e como em THREE dias depois de domingo? Não: guarde pelo som, Tues = terça (2º dia útil), Thurs = quinta.',
  rule:'Sunday Monday Tuesday Wednesday\nThursday Friday Saturday'
},
{
  id:'P-ST03', s:'Inglês', t:'Sense of time', lv:3,
  q:'Look at the sequence of periods of time. Which one is <b>longer</b>?',
  o:['A century','A decade','A year','A month'], a:0,
  hint:'A escala do livro vai do menor para o maior e termina em uma dessas palavras.',
  wrong:{
    1:'"A decade" são 10 anos. É longo, mas o século é dez vezes maior.',
    2:'"A year" é um ano, unidade menor que década e século.',
    3:'"A month" é um mês, uma das menores da lista.'
  },
  why:'A escala apresentada no livro é second → minute → hour → day → week → month → year → decade → century. Century (século) é a maior, equivalente a 100 anos ou 10 décadas.',
  fix:'Decade = 10 anos. Century = 100 anos. A palavra "cent" aparece em centena e em porcentagem: sempre 100.',
  rule:'second < minute < hour < day < week\n< month < year < decade < century'
},
{
  id:'P-ST04', s:'Inglês', t:'Sense of time', lv:3,
  q:'Which season is shown with snow and a snowman?',
  o:['Winter','Summer','Spring','Autumn/Fall'], a:0,
  hint:'É a estação mais fria do ano.',
  wrong:{
    1:'"Summer" é o verão, associado a calor, sol e praia — na página aparece com uma onda e sol forte.',
    2:'"Spring" é a primavera, associada a flores e árvores floridas.',
    3:'"Autumn/Fall" é o outono, associado às folhas caindo e ao tom alaranjado.'
  },
  why:'As quatro estações em inglês são Spring (primavera), Summer (verão), Autumn ou Fall (outono) e Winter (inverno). A neve e o boneco de neve identificam o Winter.',
  fix:'Outono tem dois nomes: Autumn (britânico) e Fall (americano). Os dois valem.',
  rule:'Spring · Summer · Autumn/Fall · Winter'
},
{
  id:'P-ST05', s:'Inglês', t:'Sense of time', lv:5,
  q:'Complete the sequence of <b>periods of time</b>: <code>day → week → ___ → year → decade</code>',
  o:['month','hour','century','minute'], a:0,
  hint:'Entre a semana e o ano existe apenas uma unidade na escala do livro.',
  wrong:{
    1:'"hour" é menor que day, então viria antes na sequência, e não entre week e year.',
    2:'"century" é a maior de todas e vem depois de decade, no final da escala.',
    3:'"minute" é uma das menores unidades, posicionada logo depois de second.'
  },
  why:'A escala completa é second, minute, hour, day, week, month, year, decade, century. Entre week e year está month.',
  fix:'Memorize em blocos: os três curtos (second, minute, hour), os três do calendário (day, week, month) e os três longos (year, decade, century).',
  rule:'second minute hour | day week month | year decade century'
},
{
  id:'P-ST06', s:'Inglês', t:'Sense of time', lv:5,
  q:'Which part of the day matches the picture of a boy <b>sleeping with the moon outside the window</b>?',
  o:['Night','Morning','Afternoon','Evening'], a:0,
  hint:'É o período em que a lua já está no céu e a pessoa está dormindo.',
  wrong:{
    1:'"Morning" é a manhã — na página é a imagem da criança acordando e se espreguiçando na cama.',
    2:'"Afternoon" é a tarde, período do sol alto até o entardecer.',
    3:'"Evening" é o fim da tarde e o começo da noite, quando a pessoa ainda está acordada. A imagem mostra alguém já dormindo.'
  },
  why:'As partes do dia são morning (manhã), afternoon (tarde), evening (fim de tarde / início da noite) e night (noite, madrugada). A cena de alguém dormindo com a lua na janela corresponde a night.',
  fix:'Evening x night confunde: evening é a noite em que você ainda está acordado (jantar, TV), night é a noite de dormir.',
  rule:'morning · afternoon · evening · night\nGood evening (cumprimento) x Good night (despedida)'
},
{
  id:'P-ST07', s:'Inglês', t:'Sense of time', lv:7,
  q:'A century has how many <b>decades</b>?',
  o:['Ten','One hundred','Twelve','Fifty'], a:0,
  hint:'Século são 100 anos e década são 10 anos. Divida um pelo outro.',
  wrong:{
    1:'"One hundred" é o número de ANOS de um século, não de décadas. A pergunta é sobre décadas.',
    2:'"Twelve" é o número de meses de um ano, sem relação com a conta pedida.',
    3:'"Fifty" não corresponde a nenhuma das equivalências da escala.'
  },
  why:'Um century tem 100 anos e uma decade tem 10 anos. Dividindo 100 por 10, chega-se a 10 décadas por século. A questão exige converter duas unidades da escala, e não apenas lembrar o significado de uma.',
  fix:'Decade = 10 anos, century = 100 anos, logo 10 décadas cabem em um século. Leia com atenção se a pergunta pede anos ou décadas.',
  rule:'1 decade = 10 years\n1 century = 100 years = 10 decades'
},
{
  id:'P-ST08', s:'Inglês', t:'Sense of time', lv:8,
  ctx:'Today is <b>Wednesday, the 17th</b>. Paulo has an English test in two days and a History presentation five days after the test.',
  q:'On which day of the week is the History presentation?',
  o:['Wednesday','Friday','Sunday','Monday'], a:0,
  hint:'Some primeiro os 2 dias, chegue ao dia da prova, e só então some os 5 dias seguintes.',
  wrong:{
    1:'"Friday" é o dia da PROVA (dois dias depois de quarta), e não o da apresentação.',
    2:'"Sunday" seria dois dias depois da prova, não cinco.',
    3:'"Monday" seria três dias depois da prova. Faltou contar dois dias.'
  },
  why:'De Wednesday somando dois dias chega-se a Friday, dia da prova. Da sexta somando cinco dias: Saturday (1), Sunday (2), Monday (3), Tuesday (4) e Wednesday (5). A apresentação cai numa quarta-feira. A questão exige duas contagens encadeadas, e não apenas saber o nome dos dias.',
  fix:'Em contagem de dias, escreva a sequência na margem da prova. Tentar contar de cabeça é onde se perde o ponto.',
  rule:'Sun Mon Tue Wed Thu Fri Sat\nDepois de Saturday, volta para Sunday.'
},

/* ==========================================================
   DOUBLE COMPARATIVE (pág. 124)
   Definição do livro: comparative AND comparative,
   para mostrar mudança contínua.
   ========================================================== */
{
  id:'P-DC01', s:'Inglês', t:'Double comparative', lv:3,
  q:'Complete, following the book: <code>The weather is getting ___ and ___.</code>',
  o:['colder / colder','more cold / more cold','coldest / coldest','cold / cold'], a:0,
  hint:'A estrutura repete a MESMA forma comparativa duas vezes, ligada por "and".',
  wrong:{
    1:'"cold" é adjetivo curto e forma o comparativo com ER: colder. "more cold" não é aceito.',
    2:'"coldest" é superlativo e exige "the". O double comparative usa a forma comparativa, não a superlativa.',
    3:'"cold and cold" repete a forma base e não expressa mudança. É preciso que os dois termos estejam no comparativo.'
  },
  why:'O double comparative mostra algo que muda continuamente. A estrutura é comparativo + AND + o mesmo comparativo: "The weather is getting colder and colder" (o tempo está ficando cada vez mais frio). Como "cold" é curto, o comparativo é "colder".',
  fix:'Traduza sempre por "cada vez mais". Colder and colder = cada vez mais frio.',
  rule:'Adjetivo curto: colder and colder\nAdjetivo longo: more and more + adjetivo'
},
{
  id:'P-DC02', s:'Inglês', t:'Double comparative', lv:5,
  q:'Complete: <code>He is feeling ___ and ___ frightened.</code>',
  o:['more / more','frighteneder / frighteneder','most / most','the more / the more'], a:0,
  hint:'"Frightened" é um adjetivo longo. Adjetivos longos não recebem terminação.',
  wrong:{
    1:'"frighteneder" não existe. Adjetivos longos não aceitam ER — usam "more" antes do adjetivo.',
    2:'"most" é superlativo e exige "the". O double comparative trabalha com o comparativo.',
    3:'"the more / the more" pertence a outra estrutura, a de proporção ("the more you study, the better"). O double comparative do livro não leva artigo.'
  },
  why:'Com adjetivos longos, o double comparative repete "more": more and more + adjetivo. Assim, "He is feeling more and more frightened" significa que ele está ficando cada vez mais assustado. O adjetivo aparece uma única vez, no final.',
  fix:'Curto: repete o adjetivo (colder and colder). Longo: repete só o "more" e o adjetivo vem no fim (more and more frightened).',
  rule:'curto → ADJ-er and ADJ-er\nlongo → more and more + ADJ'
},
{
  id:'P-DC03', s:'Inglês', t:'Double comparative', lv:5,
  q:'According to the book, the double comparative is used to show that something is:',
  o:['changing continuously','completely finished','equal to another thing','the best in a group'], a:0,
  hint:'Pense no efeito de repetir o comparativo duas vezes: a ideia não para em um ponto.',
  wrong:{
    1:'A estrutura indica processo em andamento, e não algo concluído.',
    2:'Igualdade é expressa por "as ... as", uma estrutura diferente.',
    3:'Destacar o melhor de um grupo é função do superlativo, com "the".'
  },
  why:'O livro define: "Comparative and comparative are used to show that something is changing continuously." A repetição do comparativo cria a ideia de progressão, de algo que aumenta ou diminui sem parar, como em "getting colder and colder".',
  fix:'Double comparative = mudança que continua acontecendo. Em português, "cada vez mais" ou "cada vez menos".',
  rule:'The days are getting longer and longer.\nIt is becoming more and more difficult.'
},
{
  id:'P-DC04', s:'Inglês', t:'Double comparative', lv:7,
  q:'Identify the sentence with a <b>grammatical error</b> in the double comparative.',
  o:[
    'The test is getting difficulter and difficulter.',
    'The days are getting shorter and shorter.',
    'She is becoming more and more confident.',
    'The queue is getting longer and longer.'
  ], a:0,
  hint:'Três frases respeitam a regra do tamanho do adjetivo. Uma aplica a regra errada.',
  wrong:{
    1:'Está correta: "short" é curto, forma "shorter", e a repetição segue o padrão.',
    2:'Está correta: "confident" é longo, então usa "more and more" com o adjetivo no final.',
    3:'Está correta: "long" é curto e forma "longer and longer".'
  },
  why:'"difficult" tem três sílabas, portanto é um adjetivo longo e não aceita a terminação ER. A forma correta seria "more and more difficult". O erro consiste em aplicar a regra dos adjetivos curtos a um adjetivo longo — exatamente o mesmo tipo de erro de "more easy" ou "the most easy".',
  fix:'Antes de repetir, conte as sílabas. 1 sílaba (ou 2 terminadas em -y) → ER. 3 ou mais → more.',
  rule:'difficult → more and more difficult\nshort → shorter and shorter\nhappy → happier and happier'
},
{
  id:'P-DC05', s:'Inglês', t:'Double comparative', lv:9,
  ctx:'<b>From the Body Art text (p. 110):</b> <i>"The darker the color of the mehndi, the stronger will be the love between them."</i>',
  q:'Comparing this sentence with the book\'s <b>double comparative</b> (p. 124), it is correct to say that:',
  o:[
    'they are different structures: the sentence above expresses proportion between two facts, while the double comparative expresses continuous change',
    'they are exactly the same structure, only with different adjectives',
    'the sentence above is grammatically incorrect',
    'neither of them uses comparative forms'
  ], a:0,
  hint:'Repare que a frase do texto usa "the" antes de cada comparativo, e a do livro usa "and" entre eles. Estruturas diferentes, sentidos diferentes.',
  wrong:{
    1:'As estruturas são distintas. "The darker..., the stronger..." liga duas variáveis com artigos; o double comparative repete o mesmo comparativo com "and".',
    2:'A frase está correta e é uma construção comum no inglês, usada para expressar proporção.',
    3:'As duas usam formas comparativas — darker, stronger, colder. A diferença está em como elas se combinam.'
  },
  why:'São duas construções comparativas diferentes. O double comparative da página 124 repete o mesmo comparativo ligado por "and" (colder and colder) e indica mudança contínua de uma única coisa. Já "the + comparativo..., the + comparativo..." relaciona DUAS variáveis em proporção: quanto mais escura a hena, mais forte o amor. Uma descreve algo mudando; a outra descreve uma coisa dependendo da outra.',
  fix:'"and" no meio → mudança contínua (cada vez mais). "the" antes de cada um → proporção (quanto mais..., mais...).',
  rule:'colder and colder = está ficando cada vez mais frio\nThe darker..., the stronger... = quanto mais escuro, mais forte'
},

/* ==========================================================
   COMPARATIVES — superiority / equality / inferiority
   Base: tabela DROMEDARIES x CAMELS e Grammar tip p. 109
   ========================================================== */
{
  id:'P-CP01', s:'Inglês', t:'Comparatives', lv:3,
  ctx:'<b>From the table:</b> Dromedaries <i>are less heavy</i>. Camels <i>are heavier, stronger and can carry heavier weights</i>.',
  q:'Complete: <code>Camels are ___ than dromedaries.</code>',
  o:['heavier','more heavy','heaviest','as heavy'], a:0,
  hint:'"Heavy" tem duas sílabas e termina em -y. Existe uma regra específica para esse caso.',
  wrong:{
    1:'"more heavy" está incorreto. Adjetivos de duas sílabas terminados em -y seguem a regra dos curtos: trocam Y por I e recebem ER.',
    2:'"heaviest" é superlativo, pede "the" e não combina com "than".',
    3:'"as heavy" formaria igualdade e exigiria outro "as", além de contrariar a tabela, que mostra diferença.'
  },
  why:'Segundo a tabela, camelos são mais pesados que dromedários. Como "heavy" termina em -y, o Y vira I e acrescenta-se ER: heavier than.',
  fix:'Terminou em -y? Troca por I e põe ER: heavy → heavier, easy → easier, happy → happier.',
  rule:'heavy → heavier → the heaviest\nY vira I antes de ER/EST'
},
{
  id:'P-CP02', s:'Inglês', t:'Inferiority', lv:5,
  ctx:'<b>From the table:</b> Dromedaries <i>are less heavy</i> than camels.',
  q:'Which sentence expresses the same idea using <b>inferiority</b> correctly?',
  o:[
    'Dromedaries are less heavy than camels.',
    'Dromedaries are least heavy than camels.',
    'Dromedaries are less heavier than camels.',
    'Dromedaries are as less heavy as camels.'
  ], a:0,
  hint:'Inferioridade entre dois elementos usa uma palavra antes do adjetivo e "than" depois. O adjetivo fica na forma base.',
  wrong:{
    1:'"least" é o superlativo de inferioridade e exige "the", sem "than": the least heavy. Não serve para comparar apenas dois.',
    2:'"less heavier" acumula duas marcas de comparação. Depois de "less", o adjetivo fica na forma base: less heavy.',
    3:'"as" pertence à igualdade e exige outro "as". Combiná-lo com "less" e "than" cria uma estrutura inexistente.'
  },
  why:'A comparação de inferioridade se constrói com "less + adjetivo na forma base + than", e vale para adjetivos de qualquer tamanho. Por isso "less heavy than", e nunca "less heavier than".',
  fix:'Depois de less, o adjetivo fica puro. less heavy, less difficult, less expensive — sem ER, sem more.',
  rule:'less + adjetivo BASE + than\nthe least + adjetivo (grupo)'
},
{
  id:'P-CP03', s:'Inglês', t:'Equality', lv:5,
  ctx:'<b>Grammar tip (p. 109):</b> The comparative of equality is used when the quality expressed by the adjective is equally present in the two terms of comparison. <i>As + adjective + as</i>.',
  q:'Complete: <code>Donna dreams about dating a guy ___ Robert Pattinson.</code>',
  o:['as handsome as','as handsomer as','so handsome than','as handsome than'], a:0,
  hint:'A estrutura da página usa a mesma palavra antes e depois do adjetivo, e o adjetivo não muda.',
  wrong:{
    1:'Entre dois "as", o adjetivo fica na forma base. "handsomer" já é comparativo e não cabe nessa estrutura.',
    2:'"so ... than" mistura duas estruturas. Em frase afirmativa, a igualdade se faz com "as ... as".',
    3:'Quem abre com "as" precisa fechar com "as". "than" pertence às comparações de superioridade e inferioridade.'
  },
  why:'A igualdade usa o par "as + adjetivo na forma base + as", exatamente como no exemplo do livro: "a guy as handsome as Robert Pattinson". O adjetivo não recebe ER nem "more", porque não há superioridade a marcar.',
  fix:'"as" pede "as". "more/less/-er" pedem "than". Nunca cruze os pares.',
  rule:'as + adjetivo BASE + as\nDonna dreams about dating a guy as handsome as Robert Pattinson.'
},
{
  id:'P-CP04', s:'Inglês', t:'Equality', lv:7,
  ctx:'<b>Grammar tip (p. 109):</b> <i>Mark is not as tall as David. / Mark is not so tall as David.</i>',
  q:'Based on the book, which statement is correct?',
  o:[
    'In the negative form, both "not as tall as" and "not so tall as" are accepted, and both mean that Mark is shorter than David',
    'Only "not as tall as" is correct; "not so tall as" is an error',
    'Both sentences mean that Mark and David have the same height',
    'Both sentences mean that Mark is taller than David'
  ], a:0,
  hint:'O livro apresenta as duas frases lado a lado, separadas por barra. E a negativa nega a igualdade em qual direção?',
  wrong:{
    1:'O próprio livro traz as duas formas como equivalentes na negativa. "not so ... as" é aceito nesse contexto.',
    2:'A negativa NEGA a igualdade. Se fossem iguais, a frase seria afirmativa: "Mark is as tall as David".',
    3:'A estrutura coloca o sujeito ABAIXO do outro. Se Mark não alcança a altura de David, David é o mais alto.'
  },
  why:'Duas informações se somam aqui. Primeiro, na forma negativa o livro aceita tanto "not as ... as" quanto "not so ... as" — as duas aparecem na página 109. Segundo, negar a igualdade significa que o primeiro elemento fica abaixo do segundo: Mark é mais baixo que David, o que equivale a "David is taller than Mark" ou "Mark is less tall than David".',
  fix:'Na negativa, "so" é aceito no lugar do primeiro "as". E lembre: not as X as = fica ABAIXO.',
  rule:'Afirmativa: as tall as (só "as")\nNegativa: not as tall as = not so tall as\nA is not as tall as B → B is taller'
},
{
  id:'P-CP05', s:'Inglês', t:'Comparatives', lv:8,
  ctx:'<b>From the table:</b> Dromedaries have longer legs, shorter and thinner fur, are less heavy and are more aggressive. Camels have shorter legs, longer and thicker fur, are heavier and are calmer.',
  q:'Which sentence is <b>correct according to the table and grammatically accurate</b>?',
  o:[
    'Camels are calmer than dromedaries, and their fur is thicker.',
    'Dromedaries are calmer than camels, and their fur is thicker.',
    'Camels are more aggressive than dromedaries, and their legs are longer.',
    'Dromedaries are heavier than camels, and their fur is more thick.'
  ], a:0,
  hint:'Duas verificações: os fatos batem com a tabela? E as formas comparativas estão certas?',
  wrong:{
    1:'Contradiz a tabela em dois pontos: são os camelos que são mais calmos, e é o pelo dos camelos que é mais grosso.',
    2:'Inverte a tabela: os dromedários é que são mais agressivos e têm as pernas mais longas.',
    3:'Erra o fato (os camelos é que são mais pesados) e a forma: "thick" é curto e faz "thicker", não "more thick".'
  },
  why:'A questão exige cruzar leitura de tabela com gramática. Pela tabela, camelos são calmer (mais calmos) e têm longer and thicker fur (pelo mais longo e grosso). Gramaticalmente, "calm" e "thick" são adjetivos curtos e formam calmer e thicker com ER. Só a primeira alternativa acerta os dois aspectos ao mesmo tempo.',
  fix:'Em questão com tabela, confira primeiro o FATO e depois a FORMA. Uma alternativa pode estar gramaticalmente perfeita e mentir sobre o texto.',
  rule:'calm → calmer · thick → thicker\nheavy → heavier · aggressive → more aggressive'
},
{
  id:'P-CP06', s:'Inglês', t:'Comparatives', lv:9,
  q:'Choose the sentence in which the comparative structure is <b>both grammatically correct and semantically appropriate</b> to this context: <i>a student explains why he chose the shorter text.</i>',
  o:[
    '"This text is less difficult than the other one, so I chose it."',
    '"This text is less difficulter than the other one, so I chose it."',
    '"This text is as difficult as the other one, so I chose it."',
    '"This text is the most difficult of the two, so I chose it."'
  ], a:0,
  hint:'Uma erra a forma, uma contradiz o motivo da escolha e uma usa superlativo onde cabe comparativo.',
  wrong:{
    1:'Erro de forma: depois de "less" o adjetivo fica na base. O correto é "less difficult".',
    2:'Gramaticalmente correta, mas incoerente: se os dois textos fossem igualmente difíceis, não haveria razão para escolher um deles por ser mais fácil.',
    3:'Além de contradizer o motivo (ele escolheu o mais fácil), o superlativo não se usa para apenas dois elementos — nesse caso o correto seria o comparativo.'
  },
  why:'A resposta precisa passar por duas checagens. Na forma, "less + adjetivo base + than" é a construção correta de inferioridade. No sentido, o aluno escolheu o texto por ser MENOS difícil, o que só a primeira alternativa expressa. A terceira mostra que uma frase pode estar gramaticalmente impecável e ainda assim ser inadequada ao contexto.',
  fix:'Em questão de adequação, faça duas passadas: primeiro a gramática, depois se o sentido combina com a situação descrita no enunciado.',
  rule:'less + base + than (inferioridade)\nas + base + as (igualdade)\nSuperlativo só com grupo de 3 ou mais'
},

/* ==========================================================
   BODY ART (págs. 110 e 111) — text comprehension
   ========================================================== */
{
  id:'P-BA01', s:'Inglês', t:'Body Art', lv:3,
  ctx:'<b>From the text:</b> <i>"In Japan, tattoos were originally used as a punishment for criminals. They were tattooed on their foreheads or arms, so that people could see they committed a crime."</i>',
  q:'In Japan, tattoos were originally used as:',
  o:['a punishment for criminals','a religious ritual','a sign of beauty','a medical treatment'], a:0,
  hint:'A resposta está literalmente na primeira linha do trecho.',
  wrong:{
    1:'O texto associa rituais religiosos a outras culturas, como a egípcia. No Japão, a origem citada é a punição.',
    2:'Beleza aparece no texto ligada à hena e à decoração corporal, não à origem das tatuagens no Japão.',
    3:'O texto não menciona uso medicinal das tatuagens em nenhum momento.'
  },
  why:'O texto afirma que no Japão as tatuagens eram originalmente usadas como punição (punishment) para criminosos, marcadas na testa ou nos braços para que todos vissem que a pessoa cometeu um crime.',
  fix:'"Punishment" é uma das palavras destacadas em negrito no texto. Palavra em negrito no livro costuma virar questão.',
  rule:'punishment = punição\nto commit a crime = cometer um crime'
},
{
  id:'P-BA02', s:'Inglês', t:'Body Art', lv:3,
  q:'In India, a henna tattoo is called:',
  o:['mehndi','mandala','sari','henna plug'], a:0,
  hint:'O texto dá o nome em itálico, logo na primeira linha do parágrafo sobre hena.',
  wrong:{
    1:'"Mandala" é citada como um dos DESENHOS possíveis da hena, e não o nome da tatuagem.',
    2:'"Sari" nem aparece no texto; é uma vestimenta indiana.',
    3:'"Plug" aparece no texto ligado ao piercing de nariz da tribo Apatani, não à hena.'
  },
  why:'O texto informa que na Índia a tatuagem de hena é chamada de mehndi, associada a espíritos positivos e boa sorte, e pintada nas mãos e pernas da noiva em casamentos hindus para simbolizar alegria e beleza.',
  fix:'Hena na Índia = mehndi. Os desenhos (mandalas, sol, flores, pássaros) são outra informação do mesmo parágrafo.',
  rule:'henna = hena · mehndi = nome indiano\nbride = noiva · wedding = casamento · joy = alegria'
},
{
  id:'P-BA03', s:'Inglês', t:'Body Art', lv:5,
  ctx:'<b>From the text:</b> <i>"The Maori, an indigenous people originating in New Zealand, focused on facial tattoos, because they believed the head was the body\'s most sacred part and tattoos made warriors more attractive to women and caused fear to their opponents."</i>',
  q:'According to the text, why did the Maori focus on <b>facial</b> tattoos?',
  o:[
    'Because they believed the head was the most sacred part of the body',
    'Because the face was the easiest part to tattoo',
    'Because facial tattoos were a punishment for criminals',
    'Because only the face could be seen during battles'
  ], a:0,
  hint:'O texto dá a razão logo depois da palavra "because". Procure o que eles acreditavam.',
  wrong:{
    1:'O texto não fala em facilidade técnica. A razão apresentada é de crença, não de praticidade.',
    2:'A ideia de punição aparece no parágrafo sobre o Japão, não sobre os Maori.',
    3:'O texto menciona que as tatuagens causavam medo aos oponentes, mas não afirma que só o rosto era visível em batalha. Essa é uma conclusão que o texto não autoriza.'
  },
  why:'O texto apresenta uma razão principal de crença: os Maori consideravam a cabeça a parte mais sagrada do corpo. As outras informações do trecho (tornar os guerreiros mais atraentes e causar medo aos oponentes) são consequências adicionais, mas a explicação para a escolha do rosto é a sacralidade da cabeça.',
  fix:'Em questão de compreensão, a resposta costuma estar logo após "because". Desconfie de alternativas que somam informação que o texto não traz.',
  rule:'sacred = sagrado · warriors = guerreiros\nopponents = adversários · to cause fear = causar medo'
},
{
  id:'P-BA04', s:'Inglês', t:'Body Art', lv:6,
  ctx:'<b>From the text:</b> <i>"In Africa, as an alternative to ink tattoos, which do not stand out well on dark-skinned people, they practice scarification."</i>',
  q:'According to the text, scarification is practiced in Africa mainly because:',
  o:[
    'ink tattoos do not stand out well on dark skin',
    'ink was too expensive in Africa',
    'tattoos were forbidden by African law',
    'scars heal faster than tattoos'
  ], a:0,
  hint:'O texto explica a escolha por uma questão de visibilidade, não de preço nem de proibição.',
  wrong:{
    1:'O texto não menciona custo em nenhum momento. A justificativa apresentada é visual.',
    2:'Não há qualquer referência a proibição legal no texto.',
    3:'O texto não compara tempo de cicatrização entre escarificação e tatuagem.'
  },
  why:'O texto apresenta a escarificação como uma alternativa às tatuagens de tinta, que não se destacam bem em peles escuras. Além disso, informa que ela é um rito de passagem para a vida adulta, sinal de bravura e lealdade à tribo, e que os diferentes tipos de cicatriz representam status social, fases e eventos da vida.',
  fix:'"to stand out" significa destacar-se, sobressair. A expressão explica a razão prática da escolha.',
  rule:'to stand out = destacar-se\nrite of passage = rito de passagem\nloyalty = lealdade · bravery = bravura'
},
{
  id:'P-BA05', s:'Inglês', t:'Body Art', lv:6,
  ctx:'<b>From the text:</b> <i>"Egyptians used piercings to demonstrate social class – the more piercings, the more important they were. The pharaohs were the only ones allowed to have belly-button piercings."</i>',
  q:'According to the text, among the Egyptians the number of piercings indicated:',
  o:['the person\'s social importance','the person\'s age','the person\'s profession','the person\'s religion'], a:0,
  hint:'O trecho usa uma estrutura de proporção: quanto mais piercings, mais o quê?',
  wrong:{
    1:'O texto não relaciona piercings a idade em nenhuma cultura citada.',
    2:'Profissão não é mencionada. Os mesopotâmios usavam piercing para identificar escravos e servos, o que é condição social, não profissão escolhida.',
    3:'Religião aparece ligada aos astecas e maias (tongue piercing para se aproximar dos deuses), não aos egípcios.'
  },
  why:'O texto diz que os egípcios usavam piercings para demonstrar classe social, e quanto mais piercings, mais importante era a pessoa. Note que a frase usa a estrutura de proporção "the more..., the more...", a mesma da hena ("the darker..., the stronger..."). Os faraós eram os únicos autorizados a usar piercing no umbigo.',
  fix:'Ligue as duas informações do mesmo parágrafo: mais piercings = mais importante, e o umbigo era exclusividade do faraó.',
  rule:'the more piercings, the more important\nto allow = permitir · belly-button = umbigo'
},
{
  id:'P-BA06', s:'Inglês', t:'Body Art', lv:9,
  ctx:'<b>From the text:</b> <i>"In the Apatani tribe, from India, women wear nose plugs. (...) The women from this tribe were considered the most beautiful in all the land and other tribes constantly tried to steal them. So they had the idea of the nose plugs to try to make themselves unattractive."</i>',
  q:'It can be inferred from the text that the nose plugs were originally used as a form of:',
  o:[
    'protection, since looking unattractive reduced the risk of being stolen by other tribes',
    'religious devotion to the tribe\'s gods',
    'punishment for women who broke the tribe\'s rules',
    'celebration of the women\'s recognized beauty'
  ], a:0,
  hint:'Ligue duas frases: elas eram roubadas por serem consideradas belas, e criaram os plugs para ficarem menos atraentes. Qual a finalidade disso?',
  wrong:{
    1:'Devoção religiosa aparece no texto ligada aos astecas e maias, com o piercing na língua. Não é o caso dos Apatani.',
    2:'Punição é o sentido das tatuagens no Japão. O texto não sugere que os plugs fossem castigo.',
    3:'Inverte a lógica do texto. Os plugs não celebravam a beleza: serviam justamente para reduzi-la, como forma de defesa.'
  },
  why:'A resposta não está escrita literalmente e precisa ser inferida do encadeamento. O texto informa que as mulheres da tribo eram consideradas as mais belas da região e que outras tribos tentavam roubá-las constantemente. Diante disso, elas adotaram os plugs nasais para se tornarem menos atraentes. Ou seja, a finalidade era proteção: tornar-se menos desejável reduzia o risco de ser levada. O texto acrescenta ainda que hoje apenas as mulheres idosas os usam, pois a prática desapareceu a partir dos anos 1970.',
  fix:'Em questão de inferência, a resposta não aparece com as mesmas palavras. Ligue causa e consequência entre frases vizinhas.',
  rule:'to steal = roubar · unattractive = não atraente\nnowadays = atualmente · elderly = idosas'
},
{
  id:'P-BA07', s:'Inglês', t:'Body Art', lv:9,
  q:'In the Aztec and Mayan empires, the tongue piercing was related to:',
  o:[
    'self-sacrifice, as a way to clean the body from evil and get closer to the gods',
    'identification of slaves and servants',
    'demonstration of social class',
    'protection against other tribes'
  ], a:0,
  hint:'Cada cultura do texto tem uma finalidade diferente. Procure a que envolve sangue e religião.',
  wrong:{
    1:'Identificar escravos e servos era o uso dos mesopotâmios, segundo o texto.',
    2:'Demonstrar classe social era o uso dos egípcios, com a lógica de quanto mais piercings, mais importante.',
    3:'Proteção contra outras tribos é o caso inferido dos Apatani, com os plugs nasais.'
  },
  why:'O texto afirma que nos impérios asteca e maia o piercing na língua era uma forma de limpar o corpo do mal e das más ações (wrongdoing). Quando o sangue era tirado pelo piercing, isso era considerado um autossacrifício e uma maneira de se aproximar dos deuses e se comunicar melhor com eles. A dificuldade da questão está em não misturar as quatro culturas citadas no mesmo parágrafo.',
  fix:'Monte uma tabela mental: Japão = punição, Maori = cabeça sagrada, Egito = classe social, Mesopotâmia = escravos, Apatani = proteção, Astecas/Maias = religião.',
  rule:'wrongdoing = má ação\nself-sacrifice = autossacrifício\nto draw blood = tirar sangue'
},

/* ==========================================================
   PLASTIC SURGERY (págs. 108 e 109) — text comprehension
   ========================================================== */
{
  id:'P-PS01', s:'Inglês', t:'Plastic Surgery', lv:3,
  q:'According to the text, which is the <b>first</b> country in the ranking of most cosmetic surgeries?',
  o:['USA','Brazil','Japan','Mexico'], a:0,
  hint:'O ranking vai de 1 a 5, e o Brasil aparece em segundo lugar.',
  wrong:{
    1:'O Brasil aparece em SEGUNDO lugar no ranking apresentado pelo livro.',
    2:'O Japão é o terceiro colocado.',
    3:'O México é o quarto colocado, seguido pela Itália em quinto.'
  },
  why:'Segundo as National Plastic Surgery Statistics citadas no livro, o ranking é: 1º USA, 2º Brazil, 3º Japan, 4º Mexico e 5º Italy.',
  fix:'Decore a ordem: Estados Unidos, Brasil, Japão, México, Itália.',
  rule:'1st USA · 2nd Brazil · 3rd Japan\n4th Mexico · 5th Italy'
},
{
  id:'P-PS02', s:'Inglês', t:'Plastic Surgery', lv:3,
  q:'According to the text, which is the <b>most common</b> cosmetic procedure?',
  o:['Breast implant','Liposuction','Nose job','Tummy tuck'], a:0,
  hint:'O pódio do livro coloca esse procedimento no degrau mais alto, em primeiro lugar.',
  wrong:{
    1:'A lipoaspiração aparece em segundo lugar no gráfico.',
    2:'A cirurgia de nariz (nose job) é a terceira colocada.',
    3:'A abdominoplastia (tummy tuck) é a quinta e última da lista.'
  },
  why:'O gráfico do livro apresenta os cinco procedimentos mais comuns nesta ordem: 1º breast implant (ou boob job), 2º liposuction, 3º nose job, 4º eyelid surgery e 5º tummy tuck.',
  fix:'Os nomes informais caem em prova: boob job (implante), nose job (nariz), tummy tuck (abdômen).',
  rule:'1st breast implant · 2nd liposuction\n3rd nose job · 4th eyelid surgery · 5th tummy tuck'
},
{
  id:'P-PS03', s:'Inglês', t:'Plastic Surgery', lv:6,
  ctx:'<b>From the text:</b> <i>"Cosmetic surgery is focused on enhancing a patient\'s appearance while plastic surgery focus on repairing defects to reconstruct a normal function or appearance."</i>',
  q:'According to the text, the difference between cosmetic and plastic surgery is that:',
  o:[
    'cosmetic surgery improves appearance, while plastic surgery repairs defects and reconstructs function',
    'they are exactly the same thing, with two different names',
    'cosmetic surgery is done only on the face, while plastic surgery is done on the body',
    'plastic surgery improves appearance, while cosmetic surgery treats diseases'
  ], a:0,
  hint:'Uma das duas tem objetivo estético e a outra, reconstrutivo. Repare no verbo "to enhance" e no verbo "to repair".',
  wrong:{
    1:'O texto diz explicitamente que são especialidades próximas, mas NÃO iguais: "they are not the same. They have different goals".',
    2:'A distinção do texto não é por região do corpo, e sim por objetivo: melhorar aparência ou reparar defeitos.',
    3:'Inverte as definições. É a cosmetic que melhora a aparência e a plastic que reconstrói função.'
  },
  why:'O texto separa as duas por objetivo. A cosmetic surgery foca em melhorar (enhance) a aparência do paciente. A plastic surgery foca em reparar defeitos para reconstruir uma função ou aparência normal, sendo dedicada à reconstrução de defeitos faciais e corporais decorrentes de distúrbios de nascimento, traumas e doenças.',
  fix:'Cosmetic = enhance (melhorar o que já funciona). Plastic = repair/reconstruct (consertar o que foi danificado).',
  rule:'to enhance = melhorar\nto repair = reparar · to reconstruct = reconstruir\nbirth disorders = distúrbios de nascimento'
},
{
  id:'P-PS04', s:'Inglês', t:'Plastic Surgery', lv:6,
  ctx:'<b>From the text:</b> <i>"A few years ago, cosmetic surgery was too expensive and too dangerous, but the prices have dropped, and so has danger. As a result, cosmetic surgery has become increasingly popular and accessible."</i>',
  q:'According to the text, cosmetic surgery became more popular because:',
  o:[
    'prices and danger have both decreased',
    'doctors started offering it for free',
    'it became obligatory in some countries',
    'it stopped having any kind of risk'
  ], a:0,
  hint:'O verbo "to drop" indica movimento para baixo. E o texto diz que duas coisas caíram.',
  wrong:{
    1:'O texto fala em preços mais baixos e maior acessibilidade, mas em nenhum momento menciona gratuidade.',
    2:'Não há qualquer referência a obrigatoriedade. O texto trata de escolha pessoal influenciada pela mídia.',
    3:'O texto afirma o contrário em seguida: "all surgeries, including cosmetic procedures, carry risk". O risco diminuiu, mas não desapareceu.'
  },
  why:'O texto explica que a cirurgia estética era cara e perigosa demais, mas os preços caíram (the prices have dropped) e o perigo também (and so has danger). Como resultado, tornou-se cada vez mais popular e acessível. A armadilha está na última alternativa: risco menor não significa risco zero.',
  fix:'"to drop" = cair. "increasingly" = cada vez mais. As duas palavras estão no vocabulário da página.',
  rule:'to drop = cair · increasingly = cada vez mais\naccessible = acessível'
},
{
  id:'P-PS05', s:'Inglês', t:'Plastic Surgery', lv:8,
  ctx:'<b>From the text:</b> <i>"People with a history of cardiovascular disease, lung disease, diabetes or obesity have a higher risk of developing complications such as pneumonia, stroke or heart attack. (...) Smoking increases risks and interferes with healing, too."</i>',
  q:'Based on the text, which conclusion is correct?',
  o:[
    'Pre-existing health conditions and smoking both increase the risk of complications',
    'Only smokers can develop complications after surgery',
    'Complications happen only in plastic surgery, never in cosmetic surgery',
    'Anesthesia is the only possible source of complications'
  ], a:0,
  hint:'O trecho lista dois grupos diferentes de fatores de risco. A resposta precisa contemplar os dois.',
  wrong:{
    1:'O texto cita doenças cardiovasculares, pulmonares, diabetes e obesidade como fatores independentes do tabagismo. Fumar é um fator adicional, não o único.',
    2:'O texto afirma justamente que TODAS as cirurgias, incluindo os procedimentos estéticos, envolvem risco.',
    3:'A anestesia é citada como mais uma fonte de complicações ("There are also complications related to anesthesia"), e não como a única.'
  },
  why:'O texto apresenta dois blocos de fatores de risco que se somam. O primeiro é o histórico de saúde: doença cardiovascular, doença pulmonar, diabetes ou obesidade elevam o risco de complicações como pneumonia, AVC (stroke) ou infarto. O segundo é o comportamento: fumar aumenta os riscos e interfere na cicatrização (healing). A palavra "too" ao final indica acréscimo, confirmando que se trata de um fator somado aos anteriores.',
  fix:'Palavras como "also" e "too" indicam soma de informação. Se a alternativa disser "only" (apenas), geralmente está restringindo demais e é falsa.',
  rule:'stroke = AVC · healing = cicatrização\nlung disease = doença pulmonar\nto develop = desenvolver'
},
{
  id:'P-PS06', s:'Inglês', t:'Plastic Surgery', lv:9,
  ctx:'<b>From the text:</b> <i>"Mass media also contributes to the cosmetic surgery boom because it is a social mirror for millions of women, showing what is considered acceptable and beautiful. In fact, the media shows images of people that are unrealistic, and these images are what lots of people feel they should look like."</i>',
  q:'The expression <b>"a social mirror"</b> is used in the text to suggest that the media:',
  o:[
    'reflects and imposes a standard of beauty that people then try to copy',
    'shows society exactly as it really is, without distortion',
    'is used mainly to advertise surgery clinics',
    'reduces the number of people interested in cosmetic surgery'
  ], a:0,
  hint:'Repare na contradição dentro do próprio trecho: é chamado de espelho, mas as imagens são descritas como irreais.',
  wrong:{
    1:'O texto desmente isso na frase seguinte: as imagens mostradas são "unrealistic" (irreais). O espelho aqui é distorcido, não fiel.',
    2:'O texto trata da influência cultural da mídia sobre a autoimagem, e não de publicidade de clínicas.',
    3:'Inverte o argumento. A mídia é apresentada como uma das causas do aumento das cirurgias, não da diminuição.'
  },
  why:'A metáfora exige interpretação. Um espelho devolve uma imagem, e ao chamar a mídia de "espelho social" o texto indica que ela reflete um padrão do que seria aceitável e bonito. Mas a frase seguinte revela a distorção: essas imagens são irreais, e ainda assim muitas pessoas, especialmente adolescentes, sentem que deveriam se parecer com elas. O resultado é a decisão de operar-se em busca de autoestima. Ou seja, o espelho não apenas reflete: ele impõe um modelo a ser copiado.',
  fix:'Em questão sobre metáfora, leia a frase SEGUINTE. O texto quase sempre explica a imagem logo depois.',
  rule:'unrealistic = irreal · self-esteem = autoestima\nto go under the knife = passar por cirurgia'
},
{
  id:'P-PS07', s:'Inglês', t:'Plastic Surgery', lv:10,
  ctx:'<b>Going further (p. 109):</b> <i>"He changed the shape of his nose to the point where it was so narrow that the airways were blocked. Michael Jackson used to say that he suffered from vitiligo, responsible for turning his skin lighter over time, and he was accused of using a bleaching treatment. It seemed that he wanted to look less like himself and more like someone else."</i>',
  q:'Which conclusion is <b>supported</b> by the text?',
  o:[
    'The text reports that he claimed to have vitiligo and that others accused him of bleaching, without stating which version is true',
    'The text proves that Michael Jackson used a bleaching treatment',
    'The text proves that vitiligo was the only cause of his lighter skin',
    'The text states that his nose surgeries had no physical consequences'
  ], a:0,
  hint:'Repare nos verbos: "used to say" e "was accused of". Nenhum dos dois afirma um fato comprovado.',
  wrong:{
    1:'O texto diz que ele foi ACUSADO ("he was accused of"), o que registra uma acusação, não uma comprovação.',
    2:'O texto apresenta o vitiligo como algo que ele dizia ter ("used to say"), sem confirmar que essa foi a única causa.',
    3:'Contradiz o texto: o nariz ficou tão estreito que as vias aéreas foram bloqueadas, o que é uma consequência física concreta.'
  },
  why:'A questão testa a diferença entre o que o texto RELATA e o que ele AFIRMA. "Used to say" indica que essa era a versão dada por ele. "Was accused of" registra uma acusação feita por terceiros. Nenhuma das duas construções afirma um fato provado, e o texto deliberadamente não decide entre as versões — tanto que encerra com "It seemed that", outra marca de impressão, não de certeza. Já a consequência física do nariz é afirmada de forma direta, sem esse tipo de ressalva.',
  fix:'Verbos como "seem", "used to say", "was accused of" e "it is believed" marcam relato, não fato. Alternativa que diz "prova" costuma ser falsa nesses casos.',
  rule:'to seem = parecer · narrow = estreito\nairways = vias aéreas · bleaching = clareamento\nto achieve = alcançar · damage = dano'
}

);

/* ---------- reforço dos tópicos novos (item 54) ---------- */
Object.assign(REFORCO, {
'Time telling':[
  {q:'How do you say <code>10:45</code>?', o:["It's a quarter to eleven","It's a quarter to ten","It's a quarter past ten","It's forty-five past ten"], a:0,
   no:'Passou de 30 minutos, então usa-se TO e a hora SOBE um: faltam 15 minutos para as onze.'},
  {q:'How do you say <code>2:30</code>?', o:["It's half past two","It's half to three","It's thirty past two","It's a quarter past two"], a:0,
   no:'30 minutos é "half past", sempre com a hora que JÁ passou. "half to" não existe em inglês.'}
],
'Sense of time':[
  {q:'Which month comes right before <code>May</code>?', o:['April','June','March','August'], a:0,
   no:'A ordem é March, April, May. Antes de maio vem abril.'},
  {q:'How many years are there in a <b>decade</b>?', o:['Ten','One hundred','Twelve','Five'], a:0,
   no:'Decade = 10 anos. Century = 100 anos. Não troque um pelo outro.'}
],
'Double comparative':[
  {q:'Complete: <code>The queue is getting ___ and ___.</code> (long)', o:['longer / longer','more long / more long','longest / longest','long / long'], a:0,
   no:'"long" é curto: repete-se a forma com ER. Longo seria "more and more + adjetivo".'},
  {q:'Complete: <code>It is becoming ___ and ___ expensive.</code>', o:['more / more','expensiver / expensiver','most / most','the more / the more'], a:0,
   no:'"expensive" é longo: usa-se "more and more" e o adjetivo vai para o fim.'}
],
'Body Art':[
  {q:'Among the Egyptians, more piercings meant:', o:['more social importance','more religious devotion','more years of age','more children'], a:0,
   no:'O texto usa a proporção "the more piercings, the more important they were". Piercing indicava classe social.'},
  {q:'The Maori tattooed the face because they believed the head was:', o:["the body's most sacred part","the easiest part to tattoo","the least important part","a punishment mark"], a:0,
   no:'A razão está logo depois de "because": a cabeça era a parte mais sagrada do corpo.'}
],
'Plastic Surgery':[
  {q:'Cosmetic surgery focuses on ___, while plastic surgery focuses on ___.', o:['enhancing appearance / repairing defects','repairing defects / enhancing appearance','treating diseases / preventing them','the face / the body'], a:0,
   no:'Cosmetic = enhance (melhorar aparência). Plastic = repair/reconstruct (reparar defeito e função).'},
  {q:'According to the text, who has a higher risk of complications?', o:['People with diabetes, obesity or heart and lung disease','Only people over 60','Only smokers','Nobody, since surgery has no risk'], a:0,
   no:'O texto lista histórico de doença cardiovascular, pulmonar, diabetes e obesidade. Fumar é um fator somado, não o único.'}
]
});
