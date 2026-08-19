/* ============================================================
   QUIZ — execução do simulado
   Fluxo por questão (item 53):
     1ª tentativa errada  → DICA, sem revelar resposta
     2ª tentativa errada  → explicação completa em 4 blocos (item 51)
     depois da explicação → "Testar se entendi" (item 54)

   Placar do simulado conta apenas acertos de PRIMEIRA tentativa.
   Acerto na segunda rende XP reduzido e registra evolução,
   mas não vira ponto — senão o número perderia significado (item 63).
   ============================================================ */

const Q = { run:null };

function shuffle(a){
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function norm(t){
  return String(t).toLowerCase().trim()
    .normalize('NFD').replace(new RegExp('[\u0300-\u036f]','g'),'')
    .replace(/[.!?;,]+$/,'').replace(/\s+/g,' ');
}

/* ---------- seleção das questões ---------- */
function pickQuestions(opt){
  let pool = BANK.filter(q=>{
    if(opt.boss) return q.lv>=8;
    const d=DIFFS[opt.diff];
    if(q.lv<d.lv[0] || q.lv>d.lv[1]) return false;
    if(opt.subject && q.s!==opt.subject) return false;
    return true;
  });
  if(opt.topics && opt.topics.length){
    const t=pool.filter(q=>opt.topics.includes(q.t));
    if(t.length>=4) pool=t;
  }
  /* prioriza: erro pendente > nunca vista > vista há mais tempo */
  pool.forEach(q=>{
    const r=S.st.q[q.id], stt=qstatus(q.id);
    q._w = stt==='errado' ? 0 : stt==='corrigido' ? 1 : !r ? 2 : 3 + (r.ok||0);
    q._r = Math.random();
  });
  pool.sort((a,b)=> a._w-b._w || a._r-b._r);
  const n=Math.min(opt.n||12, pool.length);
  const sel=pool.slice(0,n);
  if(opt.boss){ // boss mistura as matérias
    const h=sel.filter(q=>q.s==='História'), e=sel.filter(q=>q.s==='Inglês');
    if(!h.length || !e.length){
      const other=BANK.filter(q=>q.lv>=8 && !sel.includes(q));
      shuffle(other); sel.splice(-2,2,...other.slice(0,2));
    }
  }
  return shuffle(sel);
}

/* ---------- embaralha alternativas (substitui as "4 versões") ---------- */
function prepare(q){
  if(q.type==='text') return {q:q, opts:null, map:null, ansPos:null};
  const idx=q.o.map((_,i)=>i); shuffle(idx);
  return {q:q, opts:idx.map(i=>q.o[i]), map:idx, ansPos:idx.indexOf(q.a)};
}

/* ---------- inicia ---------- */
function startQuiz(opt){
  const list=pickQuestions(opt);
  if(!list.length){ toast('Nenhuma questão disponível para esse filtro'); return; }
  Q.run={
    opt:opt, items:list.map(prepare), idx:0,
    state:{}, right:0, xp:0, answered:0, startedAt:Date.now()
  };
  S.touchStreak();
  renderQuestion();
}

/* ---------- render da questão ---------- */
function renderQuestion(){
  const R=Q.run, it=R.items[R.idx], q=it.q;
  const st=R.state[q.id] || (R.state[q.id]={tries:0, done:false, ok1:false, sel:null});
  const dk = R.opt.boss ? 'boss' : diffOf(q.lv);
  const D=DIFFS[dk];

  let h='<div class="stack">';

  /* cabeçalho de progresso */
  h+='<div class="qhead"><div class="qprog">'
   + '<div class="qprog-t"><span>Questão <b class="num">'+(R.idx+1)+'</b> de <b class="num">'+R.items.length+'</b></span>'
   + '<span class="num">'+R.right+' ✓</span></div>'
   + '<div class="qprog-b"><i style="width:'+(R.idx/R.items.length*100)+'%"></i></div>'
   + '</div><button class="btn sm ghost" onclick="abortQuiz()">Sair</button></div>';

  /* card */
  h+='<div class="qcard">';
  h+='<div class="qmeta"><span class="tag '+(q.s==='História'?'hist':'eng')+'">'+q.s+'</span>'
   + '<span class="tag '+D.cls+'">'+D.nome+'</span>'
   + '<span class="tag">'+q.t+'</span>'
   + '<span class="tag" title="nível interno de dificuldade">LV '+q.lv+'</span></div>';

  if(q.ctx) h+='<div class="qctx">'+q.ctx+'</div>';
  h+='<div class="qtext">'+q.q+'</div>';

  if(it.opts){
    h+='<div class="opts" id="opts">';
    it.opts.forEach((o,i)=>{
      h+='<label class="opt" data-i="'+i+'" onclick="selOpt('+i+')">'
       + '<span class="opt-k">'+'ABCD'[i]+'</span><span>'+o+'</span></label>';
    });
    h+='</div>';
  }else{
    h+='<input class="tinput" id="tans" type="text" autocomplete="off" autocapitalize="off" '
     + 'spellcheck="false" placeholder="Digite sua resposta" onkeydown="if(event.key===\'Enter\')checkAnswer()">';
  }

  h+='<div id="fbzone"></div>';
  h+='<div class="btnrow mt" id="actzone">'
   + '<button class="btn primary wide" onclick="checkAnswer()">Verificar resposta</button></div>';
  h+='</div></div>';

  document.getElementById('view').innerHTML=h;
  window.scrollTo(0,0);
}

function selOpt(i){
  const R=Q.run, q=R.items[R.idx].q, st=R.state[q.id];
  if(st.done) return;
  st.sel=i;
  document.querySelectorAll('#opts .opt').forEach(el=>{
    el.classList.toggle('sel', Number(el.dataset.i)===i);
  });
}

/* ---------- verificação ---------- */
function checkAnswer(){
  const R=Q.run, it=R.items[R.idx], q=it.q, st=R.state[q.id];
  if(st.done) return;
  const fb=document.getElementById('fbzone');
  let ok=false, chosen=null;

  if(it.opts){
    if(st.sel===null){ fb.innerHTML='<div class="fb warn">Escolha uma alternativa antes de verificar.</div>'; return; }
    chosen=it.map[st.sel];
    ok = chosen===q.a;
  }else{
    const v=document.getElementById('tans').value;
    if(!v.trim()){ fb.innerHTML='<div class="fb warn">Digite uma resposta antes de verificar.</div>'; return; }
    ok = q.ans.some(a=>norm(a)===norm(v));
    chosen=v;
  }

  st.tries++;

  if(ok){
    st.done=true;
    const first = st.tries===1;
    if(first){ st.ok1=true; R.right++; S.st.combo++; }
    else { S.st.combo=0; }
    if(S.st.combo>S.st.comboBest) S.st.comboBest=S.st.combo;

    const wasWrong = ['errado','corrigido'].includes(qstatus(q.id));
    let xp = first ? awardQuestionXp(q, wasWrong) : Math.round(baseXp(q.lv)*0.4);
    if(!first) addXp(xp, q.s);
    if(R.opt.boss) { const extra=Math.round(xp*0.5); addXp(extra,q.s); xp+=extra; }
    R.xp+=xp;

    recordAnswer(q.id, first, chosen);
    lockOptions(it, chosen);
    fb.innerHTML='<div class="fb ok">'+(first?pickMsg(GOOD):'Correto na segunda tentativa. O importante é que o raciocínio chegou lá.')
      +' <span class="xp">+'+xp+' XP</span></div>'
      + (first?'':explainHTML(q, null, true));
    nextButton();
    return;
  }

  /* ERRO */
  if(st.tries===1 && q.hint){
    S.st.combo=0;
    fb.innerHTML='<div class="fb no">'+pickMsg(BAD)+'</div>'
      + '<div class="fb hintbox"><b>Dica:</b> '+q.hint+'</div>';
    if(it.opts){
      const el=document.querySelector('#opts .opt[data-i="'+st.sel+'"]');
      if(el){ el.classList.add('wrong'); el.style.pointerEvents='none'; }
      st.sel=null;
    }else{
      document.getElementById('tans').value='';
      document.getElementById('tans').focus();
    }
    document.getElementById('actzone').innerHTML=
      '<button class="btn primary wide" onclick="checkAnswer()">Tentar de novo</button>';
    return;
  }

  /* segunda tentativa errada → explicação completa */
  st.done=true; S.st.combo=0;
  recordAnswer(q.id, false, chosen);
  lockOptions(it, chosen);
  fb.innerHTML='<div class="fb no">Vamos entender o motivo — é aqui que o ponto se ganha na próxima.</div>'
    + explainHTML(q, chosen, false);
  nextButton();
}

function lockOptions(it, chosen){
  if(!it.opts) return;
  document.querySelectorAll('#opts .opt').forEach(el=>{
    const orig=it.map[Number(el.dataset.i)];
    el.classList.add('lock'); el.style.pointerEvents='none';
    if(orig===it.q.a) el.classList.add('right');
    else if(orig===chosen) el.classList.add('wrong');
  });
}

/* ---------- explicação em 4 blocos (itens 51 e 52) ---------- */
function explainHTML(q, chosen, wasRight){
  const correta = q.type==='text' ? q.ans[0] : q.o[q.a];
  let porque;
  if(wasRight){
    porque=null;
  }else if(q.type==='text'){
    porque = q.wrongGeneric || 'A forma escrita não corresponde à estrutura pedida pelo enunciado.';
    if(chosen) porque='Você respondeu <b>"'+String(chosen).replace(/</g,'&lt;')+'"</b>. '+porque;
  }else{
    porque = (q.wrong && q.wrong[chosen]) || 'Essa alternativa não atende ao que o enunciado pede.';
    porque = 'Você marcou <b>"'+q.o[chosen]+'"</b>. '+porque;
  }

  let h='<div class="explain"><div class="ex-h">Explicação completa</div><div class="ex-b">';
  if(porque){
    h+='<div class="ex-s ex-1"><h4><span class="n">1</span>Por que sua resposta está errada</h4><p>'+porque+'</p></div>';
  }
  h+='<div class="ex-s ex-2"><h4><span class="n">'+(porque?'2':'1')+'</span>Qual é a resposta correta</h4><p><b>'+correta+'</b></p></div>';
  h+='<div class="ex-s ex-3"><h4><span class="n">'+(porque?'3':'2')+'</span>Por que ela está correta</h4><p>'+q.why+'</p></div>';
  h+='<div class="ex-s ex-4"><h4><span class="n">'+(porque?'4':'3')+'</span>Como lembrar disso na prova</h4><p>'+q.fix+'</p>';
  if(q.rule) h+='<div class="rulebox"><b>Regra rápida</b>\n'+q.rule+'</div>';
  h+='</div></div></div>';

  if(REFORCO[q.t] && REFORCO[q.t].length && !wasRight){
    h+='<div class="btnrow mt"><button class="btn wide" onclick="showReforco(\''+q.id+'\')">'
     + '◈ Testar se entendi</button></div><div id="refzone"></div>';
  }
  return h;
}

/* ---------- pergunta de reforço (item 54) ---------- */
function showReforco(qid){
  const q=BYID[qid], bank=REFORCO[q.t];
  if(!bank || !bank.length) return;
  const r=bank[Math.floor(Math.random()*bank.length)];
  const idx=r.o.map((_,i)=>i); shuffle(idx);
  Q.ref={r:r, map:idx, ans:idx.indexOf(r.a), sel:null, topic:q.t};
  let h='<div class="qcard mt" style="border-color:var(--line2)">'
   + '<div class="qmeta"><span class="tag ok">Reforço</span><span class="tag">'+q.t+'</span></div>'
   + '<div class="qtext">'+r.q+'</div><div class="opts" id="refopts">';
  idx.forEach((oi,i)=>{
    h+='<label class="opt" data-i="'+i+'" onclick="selRef('+i+')"><span class="opt-k">'+'ABCD'[i]+'</span><span>'+r.o[oi]+'</span></label>';
  });
  h+='</div><div id="reffb"></div>'
   + '<div class="btnrow mt" id="refact"><button class="btn primary wide" onclick="checkRef()">Verificar</button></div></div>';
  document.getElementById('refzone').innerHTML=h;
  document.getElementById('refzone').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function selRef(i){
  if(Q.ref.done) return;
  Q.ref.sel=i;
  document.querySelectorAll('#refopts .opt').forEach(el=>el.classList.toggle('sel',Number(el.dataset.i)===i));
}
function checkRef(){
  const R=Q.ref; if(!R || R.done) return;
  const fb=document.getElementById('reffb');
  if(R.sel===null){ fb.innerHTML='<div class="fb warn">Escolha uma alternativa.</div>'; return; }
  R.done=true;
  const ok=R.sel===R.ans;
  document.querySelectorAll('#refopts .opt').forEach(el=>{
    const i=Number(el.dataset.i);
    el.classList.add('lock'); el.style.pointerEvents='none';
    if(i===R.ans) el.classList.add('right');
    else if(i===R.sel) el.classList.add('wrong');
  });
  let xp=0;
  if(ok){
    const stamp='ref:'+R.topic+':'+today();
    if(!S.st.missionsDone.includes(stamp)){ S.st.missionsDone.push(stamp); xp=15; addXp(xp); Q.run.xp+=xp; }
    fb.innerHTML='<div class="fb ok">Entendeu de verdade. O conceito ficou.'+(xp?' <span class="xp">+'+xp+' XP</span>':'')+'</div>';
  }else{
    fb.innerHTML='<div class="fb no">Ainda não. '+R.r.no+'</div>';
  }
  document.getElementById('refact').innerHTML='';
  S.save();
}

/* ---------- registro da resposta ---------- */
function recordAnswer(id, ok, given){
  const r=qrec(id);
  r.seen++; if(ok) r.ok++; else r.ko++;
  r.given=given;
  r.hist.push({d:today(), ok:ok});
  S.st.daily.answered++;
  Q.run.answered++;
  S.save();
}

function nextButton(){
  const R=Q.run, last=R.idx>=R.items.length-1;
  document.getElementById('actzone').innerHTML=
    '<button class="btn primary wide" onclick="'+(last?'finishQuiz()':'nextQuestion()')+'">'
    + (last?'Finalizar simulado':'Próxima questão')+'</button>';
  updateTopbar();
}
function nextQuestion(){ Q.run.idx++; renderQuestion(); }
function abortQuiz(){
  if(!confirm('Sair do simulado? As questões já respondidas ficam registradas, mas o placar final não será computado.')) return;
  Q.run=null; S.save(); go('home');
}

/* ---------- mensagens ---------- */
const GOOD=[
  'Acertou. Leitura limpa, decisão rápida.',
  'Correto. Esse ponto foi de primeira bola.',
  'Boa. Capítulo avançado sem filler.',
  'Acertou. Sólido como troca longa bem construída.',
  'Correto. Sem hesitação.'
];
const BAD=[
  'Ainda não. Olha a dica e refaz o raciocínio.',
  'Erro não forçado. Ajusta a leitura e joga o próximo ponto.',
  'Passou perto. Sem drama — tem mais uma tentativa.',
  'Plot twist ruim. Volta uma casa com a dica.',
  'Não foi dessa vez. A dica abaixo estreita o caminho.'
];
function pickMsg(a){ return a[Math.floor(Math.random()*a.length)]; }

/* ============================================================
   RESULTADO
   ============================================================ */
function finishQuiz(){
  const R=Q.run;
  const total=R.items.length, right=R.right;
  const pct=Math.round(right/total*100);
  const dk=R.opt.boss?'boss':R.opt.diff;

  /* bônus de simulado (item 40) */
  let bonus=0, bonusTxt=[];
  if(pct===100){ bonus+=350; bonusTxt.push('100% — bônus especial +350'); }
  else if(pct>=90){ bonus+=200; bonusTxt.push('Acima de 90% — bônus +200'); }
  else if(pct>=80){ bonus+=100; bonusTxt.push('Acima de 80% — bônus +100'); }

  const prevBest=Math.max(0,...S.st.runs.filter(r=>r.diff===dk && r.subject===R.opt.subject).map(r=>r.pct),0);
  if(prevBest && pct>prevBest){ bonus+=150; bonusTxt.push('Superou seu melhor resultado — bônus de evolução +150'); }

  if(R.opt.boss && pct>=70){
    bonus+=500; bonusTxt.push('Boss derrotado — +500');
    S.st.boss.defeated++;
  }
  if(R.opt.boss && pct>S.st.boss.best) S.st.boss.best=pct;

  /* bônus vale conforme o nível enfrentado: 100% no Fácil não pode
     valer o mesmo que 100% no Difícil (itens 40 e 63) */
  const mult={facil:0.4, medio:0.8, dificil:1.2, boss:1.5, revisao:0.8}[dk] || 1;
  bonus=Math.round(bonus*mult);

  /* e o bônus do Fácil também consome o teto diário, senão dava para
     farmar XP repetindo o mesmo simulado fácil o dia inteiro */
  if(dk==='facil'){
    const room=Math.max(0, 200-S.st.daily.easyXp);
    if(bonus>room){ bonus=room; bonusTxt.push('teto diário do nível Fácil atingido'); }
    S.st.daily.easyXp+=bonus;
  }

  addXp(bonus, R.opt.subject);
  R.xp+=bonus;

  const lvBefore=playerLevel().lvl;
  S.st.runs.push({date:today(), subject:R.opt.subject||'Misto', diff:dk, pct:pct, right:right, total:total, xp:R.xp});
  S.st.weekly.runs++;
  const missionsDone=checkMissions();
  const achs=checkAchievements();
  const lvAfter=playerLevel().lvl;
  S.save();

  /* mensagem final */
  let msg;
  if(R.opt.boss && pct>=70) msg='Boss derrotado. Você sustentou o nível mais alto do sistema do começo ao fim.';
  else if(R.opt.boss) msg='O Boss resistiu. Precisa de 70% para derrubá-lo — revise os erros e volte.';
  else if(pct===100) msg='Perfeito. Zero filler, zero desperdício. Pode encerrar o arco.';
  else if(pct>=90) msg='Excelente. Nível de quem chega no tie-break sabendo exatamente o que fazer.';
  else if(pct>=80) msg='Muito bom. Meta batida. Agora vale revisar apenas os erros.';
  else if(pct>=70) msg='Bom resultado. Faltou consistência em alguns pontos. Revise e suba a dificuldade depois.';
  else if(pct>=60) msg='Tem base, mas ainda está deixando ponto simples na mesa. Mais uma rodada.';
  else msg='Hora de revisar antes de insistir. Estudo bom também sabe voltar ao capítulo anterior.';

  const cor = pct>=80?'var(--green)':pct>=60?'var(--amber)':'var(--red)';
  const corC= pct>=80?'v-green':pct>=60?'v-amber':'v-red';

  let h='<div class="stack">';
  h+='<div class="panel result">'
   + '<div class="lbl">Placar final</div>'
   + '<div class="big '+corC+'">'+pct+'%</div>'
   + '<div class="rbar"><i style="width:0;background:'+cor+'" id="rb"></i></div>'
   + '<div class="rmsg"><b class="num">'+right+' de '+total+'</b> acertos de primeira tentativa.</div>'
   + '<p class="rmsg mt">'+msg+'</p>'
   + '<div class="xpgain">+'+R.xp+' XP</div>';
  if(bonusTxt.length) h+='<div class="dimtxt mt">'+bonusTxt.join(' · ')+'</div>';
  h+='</div>';

  if(lvAfter>lvBefore){
    h+='<div class="panel" style="border-color:rgba(34,211,238,.45)"><div class="situ">'
     + '<div class="situ-l v-cyan">▲</div><div class="situ-b">'
     + '<strong>Subiu para o nível '+lvAfter+'</strong>'
     + '<span>Novo rank: '+levelInfo(lvAfter).nome+'</span></div></div></div>';
  }
  if(missionsDone.length){
    h+='<div class="panel"><div class="panel-t">Missões concluídas</div>';
    missionsDone.forEach(m=>{ h+='<div class="miss done"><div class="miss-i">'+m.ico+'</div><div class="miss-b"><strong>'+m.nome+'</strong><small>'+m.desc+'</small></div><div class="miss-x">+'+m.xp+' XP</div></div>'; });
    h+='</div>';
  }
  if(achs.length){
    h+='<div class="panel"><div class="panel-t">Conquistas desbloqueadas</div><div class="badges">';
    achs.forEach(a=>{ h+='<div class="badge on"><span class="bi">'+a.ico+'</span><div class="bn">'+a.nome+'</div><div class="bd">'+a.desc+'</div></div>'; });
    h+='</div></div>';
  }

  const pend=cadernoIds().length;
  if(pend){
    h+='<div class="panel"><div class="panel-t">Próximo passo</div>'
     + '<p class="page-sub">Você tem <b>'+pend+'</b> '+(pend===1?'questão pendente':'questões pendentes')+' no Caderno de Erros. Rever agora vale mais XP do que fazer outro simulado.</p>'
     + '<div class="btnrow mt"><button class="btn primary" onclick="go(\'caderno\')">Abrir Caderno de Erros</button>'
     + '<button class="btn" onclick="go(\'treinar\')">Novo treino</button></div></div>';
  }else{
    h+='<div class="btnrow"><button class="btn primary" onclick="go(\'treinar\')">Novo treino</button>'
     + '<button class="btn" onclick="go(\'home\')">Voltar ao início</button></div>';
  }
  h+='</div>';

  document.getElementById('view').innerHTML=h;
  window.scrollTo(0,0);
  setTimeout(()=>{ const b=document.getElementById('rb'); if(b) b.style.width=pct+'%'; },80);
  Q.run=null;
  updateTopbar();
  if(achs.length) toast(achs[0].ico+' '+achs[0].nome+' desbloqueado','gold');
  else if(lvAfter>lvBefore) toast('▲ Nível '+lvAfter+' — '+levelInfo(lvAfter).nome,'up');
}

/* ---------- revisão a partir do caderno ---------- */
function reviewFromCaderno(){
  const ids=cadernoIds();
  if(!ids.length){ toast('Nenhum erro pendente para revisar'); return; }
  const list=shuffle(ids.map(id=>BYID[id]).filter(Boolean)).slice(0,12);
  Q.run={opt:{diff:'revisao', subject:null, review:true}, items:list.map(prepare),
         idx:0, state:{}, right:0, xp:0, answered:0, startedAt:Date.now()};
  S.touchStreak();
  renderQuestion();
}
