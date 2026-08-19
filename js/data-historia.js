/* ============================================================
   BANCO DE QUESTÕES — HISTÓRIA (7º ano)
   Conteúdos: Grandes Navegações, Chegada dos portugueses,
   Capitanias Hereditárias, Governo-Geral, Economia Açucareira.

   Escala interna de dificuldade (lv): 1..10
     1-3  = FÁCIL   (fixação, memorização, reconhecimento)
     4-6  = MÉDIO   (interpretação, aplicação, comparação)
     7-10 = DIFÍCIL (inferência, causa/consequência, pegadinha legítima)

   Campos:
     wrong{i} = por que ESSA alternativa escolhida está errada
     why      = por que a correta está correta (conceito em profundidade)
     fix      = como lembrar disso na prova
     hint     = dica da 2ª tentativa (não entrega a resposta)
   ============================================================ */

const HISTORIA = [

/* ---------------- FÁCIL (lv 2-3) ---------------- */
{
  id:'H-F01', s:'História', t:'Chegada dos portugueses', lv:2,
  q:'Em que ano a frota de Pedro Álvares Cabral chegou ao território que hoje corresponde ao Brasil?',
  o:['1492','1500','1502','1534'], a:1,
  hint:'É o ano que marca a virada do século XV para o XVI, oito anos depois da viagem de Colombo.',
  wrong:{
    0:'1492 é o ano em que Cristóvão Colombo chegou à América, a serviço da Espanha. É um marco importante, mas de outra viagem e de outro reino.',
    2:'1502 é posterior à chegada de Cabral. Nessa época já havia expedições de reconhecimento do litoral, mas o marco inicial já tinha acontecido.',
    3:'1534 é o ano de criação das Capitanias Hereditárias, ou seja, 34 anos depois da chegada — já é a fase de ocupação, não a de chegada.'
  },
  why:'A frota comandada por Cabral aportou no litoral do atual sul da Bahia em abril de 1500, durante o auge da expansão marítima portuguesa. A data marca o início oficial da presença portuguesa no território.',
  fix:'Fixe a linha do tempo em três âncoras: 1500 chegada → 1534 capitanias → 1549 Governo-Geral. Quase toda questão de cronologia sai desse trio.'
},
{
  id:'H-F02', s:'História', t:'Capitanias Hereditárias', lv:2,
  q:'Como eram chamados os responsáveis pela administração de cada capitania?',
  o:['Bandeirantes','Donatários','Jesuítas','Vice-reis'], a:1,
  hint:'O nome vem do verbo "doar" — a terra era doada a eles pelo rei.',
  wrong:{
    0:'Bandeirantes eram os homens que organizavam expedições ao interior (as bandeiras), sobretudo em busca de indígenas para escravizar e de metais preciosos. Atuavam depois e em outra função.',
    2:'Jesuítas eram religiosos da Companhia de Jesus, responsáveis pela catequese dos indígenas e pela educação. Tinham papel religioso, não administrativo da capitania.',
    3:'Vice-rei é um cargo posterior, ligado à administração centralizada da colônia, e não ao sistema de doação de terras.'
  },
  why:'O rei doava uma faixa de terra por meio da carta de doação, e quem a recebia era chamado de donatário. Ele ficava encarregado de povoar, defender e explorar economicamente aquela capitania.',
  fix:'Doação → donatário. A palavra guarda a própria explicação.'
},
{
  id:'H-F03', s:'História', t:'Capitanias Hereditárias', lv:3,
  q:'Em que ano foi criado o sistema de Capitanias Hereditárias?',
  o:['1500','1534','1549','1580'], a:1,
  hint:'Aconteceu na primeira metade do século XVI, cerca de três décadas depois da chegada e quinze anos antes do Governo-Geral.',
  wrong:{
    0:'1500 é a chegada de Cabral. Nos primeiros trinta anos Portugal praticamente não ocupou o território: apenas explorava pau-brasil por meio de feitorias no litoral.',
    2:'1549 é a criação do Governo-Geral, que veio justamente porque as capitanias, criadas antes, tiveram resultado irregular.',
    3:'1580 é o início da União Ibérica, quando Portugal passou ao domínio espanhol — muito depois e sem relação com a criação das capitanias.'
  },
  why:'Em 1534, sob Dom João III, a Coroa dividiu o litoral em quinze grandes faixas de terra e as entregou a donatários. Foi a primeira tentativa organizada de ocupar efetivamente o território.',
  fix:'1534 é o meio do trio: 1500 (chega) → 1534 (divide) → 1549 (centraliza).'
},
{
  id:'H-F04', s:'História', t:'Capitanias Hereditárias', lv:2,
  q:'O termo "hereditária" indica que a capitania:',
  o:['Podia ser transmitida aos herdeiros do donatário','Durava apenas um ano','Pertencia aos povos indígenas','Era administrada pela Igreja'], a:0,
  hint:'Pense em uma palavra do dia a dia que vem da mesma raiz: herança.',
  wrong:{
    1:'Ao contrário: o caráter hereditário garantia continuidade a longo prazo. Era exatamente o oposto de uma concessão temporária.',
    2:'As terras foram doadas pela Coroa portuguesa a nobres e comerciantes portugueses, desconsiderando a presença dos povos indígenas que já viviam ali.',
    3:'A Igreja tinha forte atuação na colônia através da catequese, mas a administração da capitania era responsabilidade do donatário.'
  },
  why:'Hereditária significa que o direito de administrar a capitania passava de pai para filho. Essa garantia servia de atrativo: sem ela, dificilmente alguém investiria o próprio dinheiro em um território distante e desconhecido.',
  fix:'Hereditária = herança = passa para o filho. O objetivo era atrair investidor com garantia de longo prazo.'
},
{
  id:'H-F05', s:'História', t:'Grandes Navegações', lv:3,
  q:'Qual era o principal objetivo das Grandes Navegações portuguesas?',
  o:['Encontrar novas rotas comerciais para o Oriente','Encerrar o comércio marítimo europeu','Colonizar imediatamente a América','Combater a expansão da Inglaterra'], a:0,
  hint:'O que a Europa queria comprar ficava do outro lado do mundo, e o caminho terrestre estava bloqueado.',
  wrong:{
    1:'As navegações ampliaram enormemente o comércio marítimo, em vez de encerrá-lo. Foi o período de formação das primeiras grandes rotas oceânicas.',
    2:'A colonização da América não era o objetivo inicial — foi uma consequência. Portugal buscava chegar às Índias; a América apareceu no caminho.',
    3:'A Inglaterra ainda não era potência marítima nesse momento. A principal rivalidade portuguesa era com a Espanha.'
  },
  why:'As especiarias asiáticas tinham altíssimo valor na Europa, mas as rotas terrestres eram controladas por intermediários. Portugal buscou um caminho marítimo próprio contornando a África para comprar direto na fonte e lucrar muito mais.',
  fix:'Navegação = buscar caminho novo para comprar especiaria mais barata. Comércio primeiro, colônia depois.'
},
{
  id:'H-F06', s:'História', t:'Povos indígenas', lv:2,
  q:'Antes da chegada dos portugueses, o território que hoje é o Brasil era habitado por:',
  o:['Ninguém','Diversos povos indígenas, com línguas e culturas variadas','Apenas colonos espanhóis','Somente comerciantes africanos'], a:1,
  hint:'A resposta certa fala em pluralidade, não em um único grupo.',
  wrong:{
    0:'O território estava densamente povoado. As estimativas indicam milhões de habitantes distribuídos por centenas de povos distintos em 1500.',
    2:'Os espanhóis ocuparam outras áreas da América. No território do futuro Brasil não havia colônia espanhola estabelecida em 1500.',
    3:'A vinda forçada de africanos escravizados começou depois, ligada à economia açucareira, e não antes da chegada portuguesa.'
  },
  why:'Viviam ali centenas de povos com línguas, organizações sociais e modos de vida diferentes entre si — Tupinambás, Guaranis, Jês e muitos outros. Falar em "os índios" como um grupo único é uma simplificação que apaga essa diversidade.',
  fix:'Não era vazio nem uniforme: era povoado e diverso. Essa ideia derruba metade das alternativas erradas do tema.'
},
{
  id:'H-F07', s:'História', t:'Economia açucareira', lv:3,
  q:'Qual produto se tornou a base da economia colonial brasileira no século XVI?',
  o:['O café','O açúcar','O ouro','A borracha'], a:1,
  hint:'Portugal já tinha experiência com esse cultivo nas ilhas do Atlântico, como a Madeira.',
  wrong:{
    0:'O café só se tornou o principal produto brasileiro no século XIX, mais de duzentos anos depois. É o erro cronológico mais comum nesse tema.',
    2:'A mineração de ouro ganhou força no século XVIII, na região das Minas Gerais. No século XVI ainda não havia sido encontrada em grande escala.',
    3:'A borracha foi importante no final do século XIX e início do XX, na Amazônia. Fora de contexto para o período colonial inicial.'
  },
  why:'O açúcar tinha alto valor na Europa e Portugal já dominava a técnica de produção. O litoral nordestino oferecia clima quente e úmido e solo favorável, o que tornou o engenho o centro da economia colonial.',
  fix:'Ordem dos ciclos econômicos: pau-brasil → açúcar (XVI) → ouro (XVIII) → café (XIX). Se a questão fala em século XVI, é açúcar.'
},
{
  id:'H-F08', s:'História', t:'Capitanias Hereditárias', lv:3,
  q:'Quais capitanias são apontadas como as de maior êxito inicial?',
  o:['Pernambuco e São Vicente','Goiás e Mato Grosso','Amazonas e Acre','Minas Gerais e Rio de Janeiro'], a:0,
  hint:'Uma fica no litoral nordestino e a outra no litoral do atual estado de São Paulo. As duas prosperaram com açúcar.',
  wrong:{
    1:'Goiás e Mato Grosso ficam no interior do continente e só foram ocupados de forma significativa no século XVIII, com as bandeiras e a mineração.',
    2:'A região amazônica não fazia parte das capitanias de 1534 e teve ocupação portuguesa efetiva bem mais tarde.',
    3:'Minas Gerais nem existia como região colonizada no século XVI; sua ocupação veio com o ouro, no século XVIII.'
  },
  why:'Pernambuco, sob Duarte Coelho, e São Vicente, sob Martim Afonso de Sousa, foram as únicas que se firmaram. Ambas conseguiram implantar engenhos de açúcar, estabelecer comércio regular com Portugal e manter relações menos conflituosas com povos indígenas vizinhos.',
  fix:'Duas que deram certo: Pernambuco (nordeste) e São Vicente (sudeste). As demais fracassaram ou vegetaram.'
},
{
  id:'H-F09', s:'História', t:'Governo-Geral', lv:3,
  q:'Em que ano foi criado o Governo-Geral do Brasil?',
  o:['1500','1534','1549','1822'], a:2,
  hint:'Veio depois das capitanias, como resposta aos problemas delas.',
  wrong:{
    0:'1500 é a chegada de Cabral, quando ainda não havia qualquer estrutura administrativa portuguesa no território.',
    1:'1534 é a criação das capitanias. O Governo-Geral surgiu justamente porque esse modelo anterior não deu o resultado esperado.',
    3:'1822 é a Independência do Brasil, quase trezentos anos depois. Contexto histórico completamente diferente.'
  },
  why:'Em 1549, Tomé de Sousa chegou como primeiro governador-geral, com sede em Salvador. A Coroa passou a exercer autoridade central sobre as capitanias, sem extingui-las, para coordenar defesa, justiça e arrecadação.',
  fix:'1549 = centralizar. O Governo-Geral não apagou as capitanias: colocou um chefe acima delas.'
},

/* ---------------- MÉDIO (lv 4-6) ---------------- */
{
  id:'H-M01', s:'História', t:'Capitanias Hereditárias', lv:5,
  q:'Por que a Coroa portuguesa optou por criar as Capitanias Hereditárias em vez de administrar o território diretamente?',
  o:[
    'Porque pretendia conceder autonomia política à colônia',
    'Porque não dispunha de recursos suficientes para ocupar sozinha um território tão extenso e transferiu o custo a particulares',
    'Porque a Espanha exigiu a divisão do território em faixas',
    'Porque a Igreja determinou que a terra fosse repartida entre religiosos'
  ], a:1,
  hint:'Pense no bolso da Coroa: ela queria o território ocupado, mas quem deveria pagar por isso?',
  wrong:{
    0:'Autonomia política era exatamente o que Portugal queria evitar. O sistema tinha o objetivo oposto: garantir a presença e o controle português sobre a terra.',
    2:'A Espanha não interferia na organização interna do território português. A divisão entre os dois reinos já estava definida desde o Tratado de Tordesilhas, em 1494.',
    3:'A Igreja atuava na catequese e teve enorme influência cultural, mas não definiu o modelo administrativo de ocupação territorial.'
  },
  why:'Portugal estava financeiramente comprometido com o comércio nas Índias, que dava lucro imediato, enquanto a América ainda era um investimento incerto. Doando faixas de terra a particulares, a Coroa conseguia ocupar o território sem gastar do próprio cofre: o donatário arcava com navios, colonos e defesa, e em troca recebia terras e privilégios.',
  fix:'Capitania = dividir território + dividir custo + ocupar sem gastar. Três palavras: dividir, custo, ocupar.'
},
{
  id:'H-M02', s:'História', t:'Chegada dos portugueses', lv:5,
  q:'Por que muitos historiadores evitam a expressão "descobrimento do Brasil"?',
  o:[
    'Porque Cabral nunca esteve no território americano',
    'Porque o território já era habitado por milhões de pessoas, e "descobrir" adota apenas o ponto de vista europeu',
    'Porque a chegada ocorreu na verdade no século XVII',
    'Porque quem chegou primeiro foram os espanhóis'
  ], a:1,
  hint:'A crítica não é sobre a data nem sobre quem chegou. É sobre de quem é o olhar embutido na palavra.',
  wrong:{
    0:'A presença de Cabral é amplamente documentada, inclusive pela carta de Pero Vaz de Caminha. A crítica dos historiadores é conceitual, não factual.',
    2:'A data de 1500 não está em disputa. O que se discute é o significado da palavra usada para nomear o acontecimento.',
    3:'Ainda que houvesse navegações espanholas pela região, o problema apontado permanece o mesmo: qualquer chegada europeia não "descobre" um lugar já habitado.'
  },
  why:'Dizer que algo foi descoberto pressupõe que antes era desconhecido ou inexistente. Mas o território era conhecido e ocupado havia milhares de anos por seus habitantes. A palavra, portanto, narra o fato apenas pela perspectiva de quem chegou, apagando quem já estava. Por isso muitos preferem "chegada dos portugueses" ou "encontro entre povos" — este último também discutido, por suavizar a violência envolvida.',
  fix:'"Descobrir" = só existia quando o europeu viu. Se a alternativa der voz a quem já morava lá, ela tende a ser a certa.'
},
{
  id:'H-M03', s:'História', t:'Capitanias Hereditárias', lv:5,
  q:'A maior parte das capitanias não prosperou. Qual conjunto de fatores melhor explica esse resultado?',
  o:[
    'Excesso de indústrias e de mão de obra qualificada',
    'Falta de recursos dos donatários, grandes distâncias, dificuldade de comunicação e conflitos com povos indígenas',
    'Proibição real de plantar cana-de-açúcar na colônia',
    'Concorrência das ferrovias e das estradas coloniais'
  ], a:1,
  hint:'Reúna três problemas práticos: dinheiro, distância e conflito.',
  wrong:{
    0:'Não havia indústria na colônia no século XVI — a economia era agrária e voltada à exportação. Mão de obra qualificada era justamente o que faltava.',
    2:'A Coroa incentivava a produção de açúcar, pois era ela que dava lucro. Proibi-la seria contrário ao próprio objetivo do sistema.',
    3:'Ferrovias são do século XIX. Alternativas com tecnologia fora do período são um sinal claro de erro em questões de História.'
  },
  why:'Os donatários eram, em geral, nobres de recursos limitados, e manter uma capitania exigia capital alto e contínuo. Some-se a isso a travessia atlântica demorada, que tornava qualquer pedido de socorro lento, e a resistência dos povos indígenas à ocupação de suas terras. Sem apoio direto da Coroa, a maioria das capitanias não conseguiu se sustentar.',
  fix:'Três causas do fracasso: pouco dinheiro, muita distância, muito conflito. E cuidado com alternativa que cita ferrovia ou indústria: é anacronismo.'
},
{
  id:'H-M04', s:'História', t:'Governo-Geral', lv:6,
  q:'Qual é a relação entre o desempenho das Capitanias Hereditárias e a criação do Governo-Geral?',
  o:[
    'O Governo-Geral extinguiu as capitanias e devolveu as terras aos indígenas',
    'O Governo-Geral surgiu para centralizar a administração diante dos resultados irregulares das capitanias, que continuaram existindo',
    'O Governo-Geral foi criado antes das capitanias, para prepará-las',
    'As capitanias prosperaram tanto que o Governo-Geral se tornou desnecessário'
  ], a:1,
  hint:'Atenção à palavra "continuaram". O novo modelo somou-se ao antigo em vez de apagá-lo.',
  wrong:{
    0:'As capitanias não foram extintas em 1549, e em nenhum momento a Coroa cogitou devolver terras aos povos indígenas — a lógica colonial era exatamente a oposta.',
    2:'A ordem cronológica está invertida: capitanias em 1534, Governo-Geral em 1549. O segundo é resposta ao primeiro, não sua preparação.',
    3:'A maioria das capitanias teve desempenho fraco. Foi justamente esse insucesso que tornou a centralização necessária.'
  },
  why:'Com apenas duas capitanias bem-sucedidas, a Coroa concluiu que a ocupação apenas por iniciativa privada era insuficiente, ainda mais diante de ameaças estrangeiras no litoral. O Governo-Geral criou uma autoridade central em Salvador, com funções de defesa, justiça e arrecadação, sobreposta às capitanias — que permaneceram, agora subordinadas.',
  fix:'Não foi substituição, foi sobreposição: a Coroa colocou um chefe acima das capitanias em vez de acabar com elas.'
},
{
  id:'H-M05', s:'História', t:'Capitanias Hereditárias', lv:6,
  q:'Sobre a condição jurídica do donatário, é correto afirmar que ele:',
  o:[
    'Tornava-se proprietário absoluto da capitania, podendo vendê-la a quem quisesse',
    'Recebia o direito de administrar e explorar a terra, mas a propriedade permanecia com a Coroa',
    'Era apenas um funcionário assalariado, sem direitos sobre a terra',
    'Governava com poderes iguais aos do rei dentro da capitania'
  ], a:1,
  hint:'Existe diferença entre poder usar uma coisa e ser dono dela.',
  wrong:{
    0:'A capitania não podia ser vendida livremente. O donatário tinha o direito de administrá-la e transmiti-la por herança, o que é bem diferente de propriedade plena.',
    2:'Ele não recebia salário. Seu ganho vinha da exploração econômica da própria capitania — e o investimento inicial saía do bolso dele.',
    3:'Seus poderes eram amplos, mas delimitados pelo foral e sempre subordinados ao rei. Nenhum donatário tinha autoridade equivalente à real.'
  },
  why:'Dois documentos definiam a relação. A carta de doação concedia a posse e o direito de administrar, transmissível aos herdeiros. O foral estabelecia os tributos devidos à Coroa e os direitos e deveres dos colonos. Ou seja: o donatário administrava em nome do rei, dentro de regras fixadas por ele, e a propriedade última do território continuava sendo da Coroa.',
  fix:'Carta de doação = poder de administrar. Foral = as regras e os impostos. Donatário administra, o rei continua dono.'
},
{
  id:'H-M06', s:'História', t:'Economia açucareira', lv:5,
  q:'Por que a produção açucareira se concentrou inicialmente no litoral do Nordeste?',
  o:[
    'Porque era a única região com rios navegáveis',
    'Porque reunia solo e clima favoráveis à cana e ficava mais próxima dos portos europeus',
    'Porque a Coroa proibiu o plantio nas demais regiões',
    'Porque havia minas de ouro próximas aos engenhos'
  ], a:1,
  hint:'Junte duas vantagens de natureza diferente: uma da natureza, outra do mapa.',
  wrong:{
    0:'Rios navegáveis existiam em várias regiões e não foram o fator decisivo. O que pesou foi a combinação de condições naturais com posição estratégica.',
    2:'Não houve proibição. A cana foi plantada também em São Vicente; o que mudou foi a escala alcançada no Nordeste.',
    3:'O ouro só seria encontrado em quantidade no século XVIII, em Minas Gerais, e não tem relação com a localização dos engenhos.'
  },
  why:'O litoral nordestino tinha clima quente e úmido e solo de massapê, muito fértil para a cana. Além disso, é o ponto do território mais próximo da Europa, o que reduzia tempo e custo de transporte do açúcar até o mercado consumidor. Natureza e geografia se somaram.',
  fix:'Nordeste = massapê + calor + menor distância até a Europa. Sempre dois motivos: solo/clima e proximidade.'
},
{
  id:'H-M07', s:'História', t:'Grandes Navegações', lv:5,
  q:'O Tratado de Tordesilhas (1494) foi assinado antes mesmo da chegada de Cabral ao território brasileiro. O que isso indica?',
  o:[
    'Que Portugal e Espanha já disputavam previamente terras ainda não exploradas, dividindo o mundo por acordo',
    'Que o Brasil já era conhecido e mapeado em detalhe por Portugal',
    'Que o tratado foi assinado por engano, sem efeito prático',
    'Que a Espanha havia desistido de qualquer terra a oeste'
  ], a:0,
  hint:'O tratado divide algo que ainda não tinha sido percorrido. O que os dois reinos estavam realmente repartindo?',
  wrong:{
    1:'O tratado indica interesse e expectativa, não conhecimento detalhado. Não há prova de que Portugal tivesse o litoral mapeado antes de 1500.',
    2:'O tratado teve enormes efeitos práticos: definiu por séculos os limites de atuação de cada reino na América.',
    3:'É o contrário: a Espanha ficou justamente com as terras a oeste da linha, onde construiu a maior parte de seu império americano.'
  },
  why:'Assinado sob mediação do papa, o tratado traçou uma linha imaginária a 370 léguas a oeste de Cabo Verde: o que estivesse a leste seria português, e a oeste, espanhol. Assinar isso antes de conhecer as terras mostra que a lógica da época era repartir antecipadamente um mundo que os europeus sequer haviam percorrido — e sem considerar quem já vivia nele.',
  fix:'Tordesilhas 1494 vem ANTES de 1500. Dividiram o mapa antes de conhecer o território.'
},
{
  id:'H-M08', s:'História', t:'Chegada dos portugueses', lv:4,
  q:'Nas primeiras décadas após 1500, a principal atividade portuguesa no território foi:',
  o:[
    'A fundação imediata de grandes cidades no interior',
    'A extração do pau-brasil, feita a partir de feitorias no litoral com trabalho indígena obtido por escambo',
    'A mineração de ouro e diamantes',
    'A instalação de universidades e centros administrativos'
  ], a:1,
  hint:'A primeira riqueza explorada deu nome ao próprio país.',
  wrong:{
    0:'A ocupação do interior demorou muito. Nas primeiras décadas a presença portuguesa era rara e restrita a pontos do litoral.',
    2:'Ouro e diamantes só apareceram em quantidade no século XVIII. É o erro cronológico mais frequente nesse conteúdo.',
    3:'Portugal proibiu a criação de universidades na colônia durante todo o período colonial, justamente para manter a dependência em relação à metrópole.'
  },
  why:'Entre 1500 e 1530 Portugal manteve apenas feitorias no litoral, de onde extraía o pau-brasil, usado para produzir corante vermelho valorizado na Europa. O trabalho era feito por indígenas em troca de objetos como espelhos e ferramentas — o escambo. Não havia povoamento, porque o interesse português ainda estava concentrado no comércio com as Índias.',
  fix:'Primeiros 30 anos: feitoria, pau-brasil, escambo, litoral. Nada de cidade, mina ou universidade.'
},
{
  id:'H-M09', s:'História', t:'Cronologia colonial', lv:4,
  q:'Qual sequência cronológica está correta?',
  o:[
    'Tordesilhas (1494) → chegada portuguesa (1500) → capitanias (1534) → Governo-Geral (1549)',
    'Chegada portuguesa (1500) → Tordesilhas (1494) → Governo-Geral (1549) → capitanias (1534)',
    'Capitanias (1534) → chegada portuguesa (1500) → Tordesilhas (1494) → Governo-Geral (1549)',
    'Governo-Geral (1549) → capitanias (1534) → chegada portuguesa (1500) → Tordesilhas (1494)'
  ], a:0,
  hint:'Basta ordenar os números do menor para o maior e conferir se a lógica dos fatos acompanha.',
  wrong:{
    1:'A sequência coloca 1494 depois de 1500 e 1534 depois de 1549. Os números estão fora de ordem.',
    2:'Começa por 1534 e depois volta para 1500 e 1494, invertendo a ordem dos acontecimentos.',
    3:'Está na ordem decrescente, ou seja, do mais recente para o mais antigo — o inverso do que a questão pede.'
  },
  why:'A sequência correta acompanha tanto os números quanto a lógica dos fatos: primeiro os reinos dividem o mundo por acordo (1494), depois Portugal chega ao território (1500), em seguida tenta ocupá-lo pela iniciativa privada (1534) e, diante dos resultados fracos, centraliza a administração (1549).',
  fix:'Decore os quatro números em ordem: 1494, 1500, 1534, 1549. Divide → chega → reparte → centraliza.'
},

/* ---------------- DIFÍCIL (lv 7-10) ---------------- */
{
  id:'H-D01', s:'História', t:'Capitanias Hereditárias', lv:8,
  ctx:'A <b>carta de doação</b> concedia ao donatário a posse e o direito de administrar a capitania, transmissível a seus herdeiros. O <b>foral</b>, documento distinto, estabelecia os tributos devidos à Coroa, os direitos dos colonos e os limites da autoridade do donatário.',
  q:'Com base na distinção entre os dois documentos, é correto concluir que o sistema de capitanias:',
  o:[
    'Concedia ao donatário poder ilimitado, já que ele podia legislar livremente sobre sua capitania',
    'Descentralizava a execução da colonização sem abrir mão do controle da Coroa, que fixava previamente as regras e a arrecadação',
    'Transferia definitivamente a soberania portuguesa sobre o território aos donatários',
    'Tornava o donatário um simples arrecadador de impostos, sem autonomia administrativa'
  ], a:1,
  hint:'Repare que um documento dá poder e o outro impõe limites. O que resulta quando os dois existem ao mesmo tempo?',
  wrong:{
    0:'O foral existia precisamente para impedir isso. Ao fixar tributos e limites de autoridade, ele estabelecia de antemão até onde ia o poder do donatário.',
    2:'Soberania nunca foi transferida. O donatário administrava em nome do rei, e a Coroa mantinha a propriedade última do território e o poder de retomá-lo.',
    3:'Ele tinha ampla autonomia administrativa: podia fundar vilas, distribuir sesmarias, nomear autoridades locais e organizar a defesa. Reduzi-lo a arrecadador subestima suas atribuições.'
  },
  why:'Os dois documentos formam um par deliberado. A carta de doação transfere a execução e o custo da colonização à iniciativa privada, resolvendo o problema financeiro da Coroa. O foral, no mesmo movimento, garante que essa delegação não vire independência: define o quanto o rei receberá e onde termina a autoridade do donatário. O resultado é uma descentralização administrativa com centralização do poder político — modelo que a Coroa reforçaria em 1549 com o Governo-Geral.',
  fix:'Carta dá poder, foral põe coleira. Delegar execução ≠ abrir mão do controle. Essa distinção derruba as alternativas extremas ("poder ilimitado" e "simples arrecadador").'
},
{
  id:'H-D02', s:'História', t:'Governo-Geral', lv:9,
  ctx:'Na década de 1540, além do desempenho irregular das capitanias, embarcações francesas frequentavam o litoral e comerciavam pau-brasil diretamente com povos indígenas, sem reconhecer os direitos portugueses sobre a região.',
  q:'Considerando o texto e o contexto do período, a criação do Governo-Geral em 1549 é mais bem explicada por:',
  o:[
    'Uma decisão exclusivamente econômica, voltada a aumentar a produção de açúcar',
    'A combinação entre a fragilidade administrativa do modelo anterior e a necessidade de afirmar a posse portuguesa diante da presença estrangeira',
    'Uma exigência do Tratado de Tordesilhas, que previa a criação de um governo central',
    'A pressão dos donatários bem-sucedidos, que pediam mais autonomia'
  ], a:1,
  hint:'O texto acrescenta um fator que não é interno à colônia. Junte-o ao problema que você já conhecia.',
  wrong:{
    0:'A economia pesava, mas reduzir a decisão a isso ignora o dado central do texto: a presença francesa era um problema de soberania, não de produtividade.',
    2:'Tordesilhas apenas traçou a linha divisória entre Portugal e Espanha. Não estabelecia nenhuma forma de organização administrativa das colônias.',
    3:'Autonomia era o oposto do que o Governo-Geral trouxe. Ele impôs uma autoridade acima dos donatários, restringindo o poder que tinham.'
  },
  why:'A questão exige cruzar duas causas. Internamente, o modelo de capitanias mostrou-se incapaz de garantir ocupação sistemática, pois dependia da capacidade financeira de cada donatário. Externamente, a ausência de ocupação efetiva era um convite: pela lógica da época, terra não ocupada podia ser reclamada por outro reino, e os franceses agiam exatamente nessa brecha. Centralizar a administração respondia aos dois problemas ao mesmo tempo — organizava a colônia por dentro e sinalizava posse por fora.',
  fix:'Governo-Geral tem duas causas, não uma: falha interna (capitanias) + ameaça externa (franceses). Quando a questão difícil oferece uma causa só, desconfie.'
},
{
  id:'H-D03', s:'História', t:'Economia açucareira', lv:9,
  q:'A economia açucareira colonial costuma ser descrita como um sistema integrado. Qual alternativa expressa corretamente essa integração?',
  o:[
    'Pequenas propriedades diversificadas, mão de obra assalariada e venda no mercado interno',
    'Grande propriedade, monocultura de exportação e trabalho escravizado, elementos que se sustentavam mutuamente',
    'Grande propriedade, policultura de subsistência e trabalho indígena livre',
    'Propriedade coletiva indígena, produção artesanal e troca por escambo'
  ], a:1,
  hint:'Procure a alternativa em que os três elementos se reforçam. Um sistema exportador exige escala; escala exige terra e braços.',
  wrong:{
    0:'Praticamente o oposto do que ocorreu. A produção era concentrada em grandes engenhos, voltada ao mercado externo e baseada em trabalho forçado, não assalariado.',
    2:'A produção era monocultora, não policultora, e o trabalho não era livre. A ideia de "trabalho indígena livre" contraria a escravização indígena e depois africana que sustentou os engenhos.',
    3:'O escambo caracterizou a fase inicial do pau-brasil, não a economia açucareira, que era organizada em grandes unidades produtivas voltadas à exportação.'
  },
  why:'Os três elementos não são somente coexistentes: cada um exige os outros. Produzir para o mercado europeu impunha escala, e escala exigia grandes extensões de terra, o latifúndio. Grandes extensões de monocultura exigiam enorme quantidade de trabalho contínuo e barato, obtido pela escravização — primeiro indígena, depois majoritariamente africana. Retirar um dos pilares desmontaria os outros dois. É por isso que se fala em sistema, e não em uma lista de características independentes.',
  fix:'Tripé do açúcar: latifúndio + monocultura + escravidão, os três amarrados pelo mercado externo. Se a alternativa citar "pequena propriedade" ou "trabalho livre", está fora.'
},
{
  id:'H-D04', s:'História', t:'Capitanias Hereditárias', lv:8,
  q:'Capitania hereditária e sesmaria são conceitos frequentemente confundidos. A distinção correta entre eles é:',
  o:[
    'São sinônimos: ambos designam a doação de terras pela Coroa a um donatário',
    'A capitania era uma grande faixa de território com atribuições administrativas; a sesmaria era um lote de terra concedido para cultivo, distribuído inclusive pelo próprio donatário',
    'A sesmaria era maior que a capitania e podia englobar várias delas',
    'A capitania era destinada ao cultivo e a sesmaria à defesa militar do litoral'
  ], a:1,
  hint:'Um dos dois vem com poder de governar. O outro vem com obrigação de plantar. E um cabe dentro do outro.',
  wrong:{
    0:'Não são sinônimos. A capitania envolvia atribuições de governo, enquanto a sesmaria era uma concessão de terra para produção, sem poder administrativo.',
    2:'A relação de tamanho é inversa: as sesmarias eram lotes distribuídos dentro dos limites de uma capitania.',
    3:'As funções estão trocadas e distorcidas. A capitania é que reunia atribuições administrativas e de defesa; a sesmaria destinava-se ao cultivo.'
  },
  why:'A capitania era uma unidade de administração: quem a recebia ganhava poder de fundar vilas, nomear autoridades, organizar a defesa e distribuir terras. A sesmaria era uma dessas terras distribuídas — um lote entregue a um colono com a obrigação de torná-lo produtivo em prazo determinado, sob pena de perdê-lo. Portanto, a sesmaria está dentro da capitania, e o donatário era justamente quem podia concedê-la. Confundir os dois é tratar como iguais um instrumento de governo e um instrumento de povoamento agrícola.',
  fix:'Capitania = governar (grande, com poder). Sesmaria = plantar (lote, dentro da capitania). Quem dá sesmaria é o donatário da capitania.'
},
{
  id:'H-D05', s:'História', t:'Chegada dos portugueses', lv:9,
  ctx:'Um historiador afirma: "Substituir <i>descobrimento</i> por <i>encontro</i> corrige um problema, mas cria outro, pois sugere reciprocidade entre partes que não estavam em condições equivalentes."',
  q:'A crítica do historiador à palavra "encontro" se apoia em qual argumento?',
  o:[
    'Em que os povos indígenas não estavam presentes no litoral em 1500',
    'Em que o termo sugere um contato entre iguais e assim atenua a violência, a imposição e o desequilíbrio de poder que marcaram o processo',
    'Em que "encontro" é impreciso quanto à data exata do acontecimento',
    'Em que apenas a palavra "descobrimento" é aceita pela historiografia atual'
  ], a:1,
  hint:'A objeção não é sobre data nem sobre presença. É sobre o que a palavra sugere quanto à relação entre os dois lados.',
  wrong:{
    0:'Contradiz o próprio argumento. A crítica só faz sentido porque havia populações presentes; é a relação entre elas e os portugueses que está em discussão.',
    2:'A questão levantada é de significado, não de cronologia. A data de 1500 não está em disputa em nenhum dos termos.',
    3:'O texto não defende o retorno a "descobrimento" — ele aponta que essa palavra tem um problema e que a substituta tem outro. É justamente isso que torna a alternativa 2 a única compatível.'
  },
  why:'A crítica opera em dois níveis. "Descobrimento" foi rejeitado por adotar o olhar europeu, como se a terra passasse a existir ao ser vista. "Encontro" corrige esse ponto, mas introduz outro: a palavra evoca um contato equilibrado entre partes semelhantes, quando o processo envolveu invasão, imposição religiosa, escravização e mortandade por doenças. Ou seja, um termo apaga quem já estava; o outro suaviza o que aconteceu com quem já estava. Perceber isso exige ler o que o texto critica sem transformá-lo em defesa do termo anterior.',
  fix:'Descobrimento = apaga quem estava. Encontro = suaviza o que houve. Criticar um termo não significa aprovar o outro — essa é a pegadinha.'
},
{
  id:'H-D06', s:'História', t:'Economia açucareira', lv:10,
  q:'Por que o pau-brasil não gerou povoamento estável, enquanto o açúcar produziu uma sociedade colonial fixa?',
  o:[
    'Porque o pau-brasil tinha valor comercial insignificante na Europa',
    'Porque a extração do pau-brasil era coleta itinerante de um recurso nativo, enquanto o açúcar exigia plantio, engenho e mão de obra permanentes, fixando pessoas ao território',
    'Porque a Coroa proibiu a permanência de colonos durante o ciclo do pau-brasil',
    'Porque o açúcar era consumido internamente e o pau-brasil, exportado'
  ], a:1,
  hint:'Compare o que cada atividade exige para funcionar: uma você recolhe e vai embora; a outra você precisa construir e manter.',
  wrong:{
    0:'O pau-brasil era valioso, pois fornecia corante vermelho muito procurado na Europa. O que o diferencia não é o valor, e sim o tipo de exploração que ele exigia.',
    2:'Não houve proibição. A ausência de povoamento decorria da própria natureza da atividade, que não requeria permanência, e do foco português no comércio com as Índias.',
    3:'Ambos eram exportados. O açúcar foi por muito tempo o principal produto de exportação da colônia, e não um item de consumo interno.'
  },
  why:'A comparação revela como a forma de explorar determina a forma de ocupar. O pau-brasil já existia na mata: bastava cortar, embarcar e seguir para outro trecho de litoral quando a área se esgotava — atividade extrativa, itinerante, que dispensava estrutura fixa e usava trabalho indígena temporário via escambo. O açúcar inverte tudo: é preciso desmatar, plantar, esperar o ciclo da cana, construir o engenho com moenda e casa de caldeiras, e garantir trabalho contínuo. Isso exige terra delimitada, investimento alto e gente permanente. Nasce daí a sociedade do engenho, com senhor, escravizados, vilas e hierarquia — ou seja, a estrutura colonial estável.',
  fix:'Extrair ≠ produzir. Extrair permite ir embora; produzir obriga a ficar. Essa é a chave para comparar qualquer par de ciclos econômicos.'
},
{
  id:'H-D07', s:'História', t:'Capitanias Hereditárias', lv:7,
  q:'Assinale a alternativa que NÃO corresponde a uma dificuldade enfrentada pelas capitanias hereditárias no século XVI.',
  o:[
    'Recursos financeiros insuficientes por parte dos donatários',
    'Concorrência das indústrias têxteis instaladas na colônia',
    'Grandes distâncias e lentidão da comunicação com Portugal',
    'Resistência dos povos indígenas à ocupação de suas terras'
  ], a:1,
  hint:'Três alternativas descrevem o século XVI. Uma descreve um mundo que ainda não existia na colônia.',
  wrong:{
    0:'Essa foi uma dificuldade real e central: manter uma capitania exigia capital que a maioria dos donatários não possuía.',
    2:'Também foi um obstáculo concreto. A travessia atlântica levava semanas, o que inviabilizava socorro rápido em caso de ataque ou crise.',
    3:'Igualmente real. A ocupação avançava sobre territórios habitados, e a resistência indígena foi determinante no fracasso de várias capitanias.'
  },
  why:'A questão pede a exceção, e a exceção é o anacronismo. Não havia indústria têxtil na colônia no século XVI: Portugal restringia deliberadamente qualquer manufatura para manter a colônia como fornecedora de matéria-prima e compradora de produtos da metrópole. Já as outras três — falta de recursos, distância e conflito — aparecem em toda a documentação do período como as causas do insucesso.',
  fix:'Em questão de "NÃO corresponde", procure o anacronismo: indústria, ferrovia, universidade ou moeda digital no século XVI é sempre a resposta.'
},
{
  id:'H-D08', s:'História', t:'Grandes Navegações', lv:8,
  q:'Portugal foi pioneiro na expansão marítima europeia. Qual conjunto de fatores melhor explica esse pioneirismo?',
  o:[
    'Superioridade militar terrestre e maior população que os demais reinos europeus',
    'Centralização política precoce, posição geográfica atlântica, experiência náutica acumulada e apoio da burguesia comercial',
    'Ausência de interesse dos demais reinos europeus pelo comércio de especiarias',
    'Domínio exclusivo das rotas terrestres que ligavam a Europa à Ásia'
  ], a:1,
  hint:'A resposta certa soma fatores de naturezas diferentes: político, geográfico, técnico e econômico.',
  wrong:{
    0:'Portugal era um reino pequeno e pouco populoso, e seu pioneirismo não veio de força terrestre. Foi justamente no mar que compensou essa limitação.',
    2:'O interesse pelas especiarias era geral na Europa. Espanha, França, Inglaterra e as cidades italianas disputavam esse comércio intensamente.',
    3:'As rotas terrestres eram controladas por intermediários no Oriente Médio e pelas cidades italianas. Foi exatamente por não controlá-las que Portugal buscou um caminho marítimo alternativo.'
  },
  why:'Nenhum fator isolado explica o pioneirismo. Portugal completou sua unificação política antes de outros reinos, o que permitiu ao Estado planejar e financiar viagens de longo prazo. Sua posição no extremo oeste da Europa dava saída direta para o Atlântico. Séculos de pesca e navegação costeira acumularam conhecimento náutico, aperfeiçoado com instrumentos como a caravela e o astrolábio. E havia uma burguesia comercial interessada em lucrar, disposta a financiar as expedições junto com a Coroa. É a convergência desses quatro elementos que produz o pioneirismo.',
  fix:'Quatro razões: Estado unido cedo + saída para o Atlântico + saber navegar + dinheiro da burguesia. Alternativa com um motivo só costuma ser insuficiente.'
}

];
