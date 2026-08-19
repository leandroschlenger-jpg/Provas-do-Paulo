/* ============================================================
   ANÁLISE — "Como o Paulo está?" (itens 46 a 50)
   Nunca julga o aluno. Explica o resultado e aponta o próximo passo.
   ============================================================ */

/* tendência: média dos 3 últimos x 3 anteriores */
function trend(){
  const r=S.st.runs;
  if(r.length<3) return {dir:'novo', delta:0, txt:'Sem histórico suficiente'};
  const last=r.slice(-3), prev=r.slice(-6,-3);
  const a=last.reduce((x,y)=>x+y.pct,0)/last.length;
  if(!prev.length) return {dir:'novo', delta:0, txt:'Primeiros resultados'};
  const b=prev.reduce((x,y)=>x+y.pct,0)/prev.length;
  const d=Math.round(a-b);
  if(d>=6)  return {dir:'up',   delta:d, txt:'↑ Evoluindo'};
  if(d<=-6) return {dir:'down', delta:d, txt:'↓ Em queda'};
  return {dir:'flat', delta:d, txt:'→ Estável'};
}

/* indicador geral (item 48) — nunca baseado em uma nota só */
function situation(){
  const runs=S.st.runs;
  if(!runs.length){
    return {key:'novo', ico:'○', cor:'v-muted', nome:'Sem diagnóstico',
            txt:'Faça o primeiro simulado para o sistema começar a medir sua evolução.'};
  }
  const sim   = simAverage(5) || 0;
  const tr    = trend();
  const d     = diffStats();
  const erros = cadernoIds().length;
  const corr  = countCorrigidos();
  const esc   = schoolAverage();
  const seq   = S.st.streak.count;

  let score = 0;
  score += sim * 0.42;                                   // desempenho recente
  score += (tr.dir==='up'?12 : tr.dir==='down'?-12 : 0); // tendência
  score += (d.dificil.n>=8 ? 10 : d.medio.n>=8 ? 5 : 0); // treina em nível alto?
  score += (erros ? Math.min(12, corr/(corr+erros)*12) : 6);
  score += (esc!==null ? (esc-6)*3 : 0);                 // realidade da escola
  score += Math.min(6, seq*1.5);                         // constância

  let k;
  if(score>=78)      k={key:'otimo', ico:'●', cor:'v-green',  nome:'Muito bem'};
  else if(score>=64) k={key:'bom',   ico:'●', cor:'v-green',  nome:'Evoluindo'};
  else if(score>=50) k={key:'aten',  ico:'●', cor:'v-amber',  nome:'Atenção'};
  else if(score>=36) k={key:'rev',   ico:'●', cor:'v-orange', nome:'Precisa revisar'};
  else               k={key:'risco', ico:'●', cor:'v-red',    nome:'Risco de desempenho'};

  k.score=Math.round(score);
  k.txt = {
    otimo:'Desempenho consistente, em nível de dificuldade alto e com erros sendo corrigidos.',
    bom:'A curva está subindo. Dá para elevar a dificuldade com segurança.',
    aten:'O resultado é razoável, mas há oscilação ou erros ainda não revisados.',
    rev:'Antes de treinar mais, vale voltar ao conteúdo. O Caderno de Erros mostra por onde.',
    risco:'O aproveitamento está baixo em vários indicadores. Priorize revisão, não quantidade.'
  }[k.key];
  return k;
}

/* comparação simulado x prova real (item 46) */
function compareSchool(g){
  const dt=g.date;
  const janela=S.st.runs.filter(r=>
    r.subject===g.subject && r.date<=dt && daysBetween(r.date,dt)<=21
  );
  if(!janela.length) return null;
  const sim=Math.round(janela.reduce((a,b)=>a+b.pct,0)/janela.length);
  const real=Math.round(g.score/g.max*100);
  const dif=real-sim;
  let txt, cor;
  if(Math.abs(dif)<=8){
    cor='v-green';
    txt='Previsão dos simulados próxima da nota real. O treino está medindo bem o desempenho.';
  }else if(dif<-8){
    cor='v-amber';
    txt='A performance real ficou abaixo dos simulados. Vale investigar ansiedade, atenção, tempo de prova ou se o treino estava em nível mais fácil que o da escola.';
  }else{
    cor='v-cyan';
    txt='A nota real ficou acima dos simulados. O treino pode estar mais difícil que a prova da escola — o que é um bom sinal.';
  }
  return {sim:sim, real:real, dif:dif, txt:txt, cor:cor, n:janela.length};
}

/* análise textual automática (item 50) */
function analysisText(){
  const out=[];
  const runs=S.st.runs;
  if(!runs.length){
    return ['Ainda não há dados suficientes para uma análise. Faça o primeiro simulado — o sistema passa a acompanhar acertos, erros, dificuldade e evolução a partir daí.'];
  }

  const tr=trend(), sim=simAverage(5), d=diffStats();
  const tops=topicStats();
  const bestT=tops.slice().sort((a,b)=>b.acc-a.acc)[0];
  const worstT=tops.slice().sort((a,b)=>a.acc-b.acc)[0];
  const accH=accuracy('História'), accE=accuracy('Inglês');
  const esc=schoolAverage();

  /* parágrafo 1 — quadro geral e tendência */
  let p1='';
  if(tr.dir==='up')        p1='Paulo está evoluindo nas últimas semanas: a média dos simulados recentes é de '+sim+'%, com alta de '+tr.delta+' pontos em relação aos anteriores. ';
  else if(tr.dir==='down') p1='Houve queda recente no desempenho: a média dos últimos simulados é de '+sim+'%, '+Math.abs(tr.delta)+' pontos abaixo do período anterior. ';
  else if(tr.dir==='flat') p1='O desempenho está estável, com média de '+sim+'% nos simulados recentes. ';
  else                     p1='Os primeiros resultados indicam média de '+sim+'% nos simulados. ';

  if(accH!==null && accE!==null){
    const forte = accH>=accE ? 'História' : 'Inglês';
    const fraca = accH>=accE ? 'Inglês' : 'História';
    const df=Math.abs(accH-accE);
    if(df>=10) p1+='O desempenho em '+forte+' está consistentemente acima de '+fraca+' ('+Math.max(accH,accE)+'% contra '+Math.min(accH,accE)+'%). ';
    else p1+='As duas matérias estão equilibradas ('+accH+'% em História e '+accE+'% em Inglês). ';
  }
  out.push(p1.trim());

  /* parágrafo 2 — leitura por dificuldade */
  let p2='';
  if(d.dificil.n>=6){
    p2='Por nível de dificuldade, o aproveitamento é de '+d.facil.acc+'% no Fácil, '+d.medio.acc+'% no Médio e '+d.dificil.acc+'% no Difícil. ';
    if(d.dificil.acc>=75) p2+='O resultado no nível Difícil confirma domínio real do conteúdo, e não apenas familiaridade com questões diretas. ';
    else if(d.dificil.acc<55) p2+='A diferença entre Fácil e Difícil é grande, o que indica que o conteúdo está memorizado, mas ainda não plenamente compreendido em questões de interpretação. ';
    else p2+='O nível Difícil ainda oscila: é justamente aí que está o espaço de crescimento. ';
  }else if(d.medio.n>=6){
    p2='O treino está concentrado nos níveis Fácil ('+d.facil.acc+'%) e Médio ('+d.medio.acc+'%). Sem questões de nível Difícil, ainda não é possível confirmar domínio profundo do conteúdo. ';
  }else{
    p2='O histórico ainda está concentrado no nível Fácil. Um bom aproveitamento aqui indica memorização, mas não garante desempenho em prova escolar. ';
  }
  out.push(p2.trim());

  /* parágrafo 3 — conteúdo e recomendação */
  let p3='';
  if(worstT && bestT && worstT.t!==bestT.t){
    p3+='Entre os conteúdos, '+bestT.t+' apresenta o melhor aproveitamento ('+bestT.acc+'%), enquanto '+worstT.t+' concentra o maior índice de erro ('+worstT.acc+'%). Recomenda-se priorizar '+worstT.t+' nos próximos dois treinos. ';
  }
  const pend=cadernoIds().length;
  if(pend) p3+='Há '+pend+' '+(pend===1?'questão pendente':'questões pendentes')+' no Caderno de Erros aguardando revisão. ';
  if(esc!==null){
    const simN=Math.round((sim||0)/10*10)/10;
    p3+='A média das provas reais da escola está em '+esc.toFixed(1).replace('.',',')+', frente a '+sim+'% nos simulados. ';
    if(esc*10 < sim-12) p3+='A distância entre os dois indica que o desempenho na escola não está acompanhando o treino — vale observar condições de prova, tempo e atenção. ';
  }
  if(p3) out.push(p3.trim());

  return out;
}
