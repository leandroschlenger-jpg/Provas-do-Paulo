/* ============================================================
   BANCO DE REFORÇO — "Testar se entendi" (item 54)
   Após a explicação de um erro, o sistema oferece uma NOVA
   questão sobre o MESMO conceito, com enunciado diferente.
   Serve para verificar se houve aprendizado real.
   ============================================================ */

const REFORCO = {

'Capitanias Hereditárias':[
  {
    q:'Qual problema da Coroa portuguesa o sistema de Capitanias ajudava a reduzir?',
    o:['A falta de recursos para ocupar sozinha um território enorme','O excesso de impostos cobrados na Europa','A ausência de rotas marítimas conhecidas','A superpopulação das capitanias'], a:0,
    no:'O sistema nasceu de um problema de dinheiro e escala: a Coroa queria ocupar sem pagar a conta, então transferiu o custo a particulares.'
  },
  {
    q:'Se o donatário não era o proprietário pleno da terra, o que exatamente ele recebia?',
    o:['O direito de administrar e explorar a capitania, dentro das regras da Coroa','A soberania completa sobre o território','Um salário anual pago pelo rei','A propriedade definitiva, com direito de venda livre'], a:0,
    no:'Ele recebia posse e administração pela carta de doação, sempre limitadas pelo foral. A propriedade última seguia sendo da Coroa.'
  }
],

'Chegada dos portugueses':[
  {
    q:'Qual crítica central é feita à palavra "descobrimento"?',
    o:['Ela adota apenas o ponto de vista europeu e ignora quem já habitava o território','Ela indica a data errada do acontecimento','Ela atribui a chegada aos espanhóis','Ela exagera a importância do comércio de especiarias'], a:0,
    no:'"Descobrir" pressupõe que o lugar não existia antes de ser visto por um europeu. A crítica é sobre o olhar embutido na palavra, não sobre a data.'
  },
  {
    q:'O que os portugueses fizeram no território nas três primeiras décadas após 1500?',
    o:['Mantiveram feitorias no litoral e extraíram pau-brasil por escambo','Fundaram cidades no interior e universidades','Iniciaram a mineração de ouro','Construíram engenhos de açúcar em larga escala'], a:0,
    no:'Foi uma fase de extração, não de povoamento: feitoria no litoral, pau-brasil e escambo com indígenas.'
  }
],

'Governo-Geral':[
  {
    q:'O que aconteceu com as capitanias após a criação do Governo-Geral em 1549?',
    o:['Continuaram existindo, agora subordinadas a uma autoridade central','Foram todas extintas imediatamente','Tornaram-se países independentes','Foram transferidas para a Espanha'], a:0,
    no:'O Governo-Geral não substituiu as capitanias: sobrepôs-se a elas, criando um chefe acima dos donatários.'
  },
  {
    q:'Além do desempenho fraco das capitanias, que outro fator motivou a centralização de 1549?',
    o:['A presença de embarcações estrangeiras comerciando no litoral','A falta de mão de obra na Europa','O fim do Tratado de Tordesilhas','A descoberta de ouro em Minas Gerais'], a:0,
    no:'A ameaça externa, sobretudo francesa, tornava urgente afirmar posse — terra sem ocupação efetiva podia ser reclamada por outro reino.'
  }
],

'Economia açucareira':[
  {
    q:'Quais três elementos formam o tripé da economia açucareira colonial?',
    o:['Latifúndio, monocultura de exportação e trabalho escravizado','Pequena propriedade, policultura e trabalho assalariado','Mineração, comércio interno e artesanato','Extrativismo, escambo e feitorias'], a:0,
    no:'Os três se sustentam mutuamente: exportar exige escala, escala exige terra, e terra em monocultura exige trabalho forçado contínuo.'
  },
  {
    q:'Por que o açúcar fixou população no território e o pau-brasil não?',
    o:['Porque o açúcar exigia plantio, engenho e trabalho permanentes','Porque o pau-brasil não tinha valor na Europa','Porque a Coroa proibiu a permanência durante o pau-brasil','Porque o açúcar era vendido apenas no mercado interno'], a:0,
    no:'Extrair permite ir embora; produzir obriga a ficar. O engenho exige estrutura fixa, investimento e gente permanente.'
  }
],

'Grandes Navegações':[
  {
    q:'O que Portugal buscava principalmente ao lançar-se ao mar no século XV?',
    o:['Uma rota marítima própria para comprar especiarias direto na fonte','Colonizar imediatamente a América','Combater o poder naval inglês','Encerrar o comércio com o Oriente'], a:0,
    no:'O objetivo era comercial: contornar os intermediários das rotas terrestres e lucrar mais com as especiarias.'
  },
  {
    q:'O Tratado de Tordesilhas foi assinado em 1494. O que isso revela?',
    o:['Que Portugal e Espanha repartiam terras antes mesmo de conhecê-las','Que o Brasil já estava totalmente mapeado','Que a Espanha desistiu das terras a oeste','Que o tratado não teve efeito prático'], a:0,
    no:'Dividiram o mapa antes de percorrer o território — e sem considerar quem já vivia nele.'
  }
],

'Povos indígenas':[
  {
    q:'Qual afirmação descreve corretamente o território brasileiro em 1500?',
    o:['Era habitado por centenas de povos, com línguas e culturas distintas','Estava praticamente desabitado','Era ocupado por colonos espanhóis','Tinha um único povo indígena unificado'], a:0,
    no:'Nem vazio, nem uniforme: milhões de pessoas distribuídas em centenas de povos diferentes entre si.'
  }
],

'Cronologia colonial':[
  {
    q:'Coloque em ordem: Governo-Geral, chegada portuguesa, Tordesilhas, capitanias.',
    o:['Tordesilhas, chegada, capitanias, Governo-Geral','Chegada, Tordesilhas, capitanias, Governo-Geral','Capitanias, chegada, Governo-Geral, Tordesilhas','Governo-Geral, capitanias, chegada, Tordesilhas'], a:0,
    no:'1494 → 1500 → 1534 → 1549. Divide o mapa, chega, reparte a terra, centraliza o governo.'
  }
],

'Comparatives':[
  {
    q:'Complete: <code>My sister is ___ than me.</code>',
    o:['taller','tallest','more tall','the taller'], a:0,
    no:'"tall" é curto: recebe ER e fecha com "than". Adjetivo curto nunca usa "more".'
  },
  {
    q:'Complete: <code>This exercise is ___ than the previous one.</code> (difficult)',
    o:['more difficult','difficulter','the most difficult','as difficult'], a:0,
    no:'"difficult" é longo (3 sílabas): usa "more ... than". Longos não recebem ER.'
  }
],

'Superlatives':[
  {
    q:'Complete: <code>This is ___ book in the library.</code>',
    o:['the most interesting','more interesting','the more interesting','most interesting'], a:0,
    no:'"in the library" define um grupo → superlativo. Adjetivo longo pede "the most".'
  },
  {
    q:'Qual é o superlativo de <code>bad</code>?',
    o:['the worst','worse','the worse','the baddest'], a:0,
    no:'bad → worse (than) → the worst (in/of). O S vem antes do T: worse compara, worst encerra.'
  }
],

'Equality':[
  {
    q:'Complete: <code>He is ___ his brother.</code> (strong, igualdade)',
    o:['as strong as','as stronger as','more strong as','as strong than'], a:0,
    no:'Entre dois "as", o adjetivo fica na forma base. E "as" sempre fecha com "as", nunca com "than".'
  }
],

'Inferiority':[
  {
    q:'Complete: <code>This racket is ___ that one.</code> (expensive, inferioridade)',
    o:['less expensive than','least expensive than','as less expensive as','more less expensive than'], a:0,
    no:'Inferioridade entre dois: "less + adjetivo + than". Com "the least" seria o menor de um grupo.'
  }
],

'Irregular forms':[
  {
    q:'Complete: <code>My grades are ___ than last month, but not the worst of the year.</code>',
    o:['worse','worst','the worst','bader'], a:0,
    no:'Há "than" na frase → comparativo → worse. "worst" só aparece com "the" e um grupo de referência.'
  },
  {
    q:'Qual forma completa corretamente: <code>She plays ___ than me.</code> (good)',
    o:['better','best','the best','gooder'], a:0,
    no:'good → better → the best. Com "than", só cabe o comparativo: better.'
  }
],

'Color Idioms':[
  {
    q:'Which idiom means "very rarely"?',
    o:['once in a blue moon','out of the blue','feel blue','green with envy'], a:0,
    no:'Mesma cor, sentidos diferentes: blue moon = frequência, out of the blue = surpresa, feel blue = tristeza.'
  },
  {
    q:'<code>"He appeared out of the blue."</code> This means he appeared:',
    o:['unexpectedly','sadly','frequently','slowly'], a:0,
    no:'"Out of the blue" trata de surpresa: algo que acontece sem nenhum aviso prévio.'
  }
],

'Identificação de erro':[
  {
    q:'Which sentence contains an error?',
    o:['She is more taller than her cousin.','She is taller than her cousin.','She is the tallest in her class.','She is not as tall as her cousin.'], a:0,
    no:'"more taller" acumula duas marcas de comparativo. Basta "taller than" — nunca os dois juntos.'
  }
],

'Transformação':[
  {
    q:'<code>Beto is faster than Ana.</code> Which sentence keeps the same meaning?',
    o:['Ana is not as fast as Beto.','Ana is faster than Beto.','Beto is as fast as Ana.','Beto is less fast than Ana.'], a:0,
    no:'"not as X as" coloca o sujeito abaixo do outro. Ao reescrever, confira sempre quem ficou na posição superior.'
  }
],

'Estruturas comparativas':[
  {
    q:'Complete: <code>___ he trains, ___ he plays.</code>',
    o:['The more / the better','More / better','The most / the best','The more / the best'], a:0,
    no:'Estrutura de proporção: "the + comparativo, the + comparativo". Os dois artigos são obrigatórios.'
  }
]

};
