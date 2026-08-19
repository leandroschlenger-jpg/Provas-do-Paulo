/* ============================================================
   PAINÉIS — todas as telas fora do quiz
   ============================================================ */

function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function statCard(label, value, sub, cls){
  return '<div class="stat"><div class="stat-l">'+label+'</div>'
       + '<div class="stat-v '+(cls||'')+'">'+value+'</div>'
       + (sub?'<div class="stat-s">'+sub+'</div>':'')+'</div>';
}
function bar(label, val, cor){
  return '<div class="mbar"><div class="mbar-t"><span>'+label+'</span><b>'+(val===null?'—':val+'%')+'</b></div>'
       + '<div class="mbar-b"><i style="width:'+(val||0)+'%;background:'+cor+'"></i></div></div>';
}

/* ============================================================
   HOME (item 60)
   ============================================================ */
function viewHome(){
  const pl=playerLevel(), xp=xpProgress(), info=levelInfo(pl.lvl);
  const rec=recommendation(), bu=bossUnlocked();
  const sit=situation(), tr=trend();
  const sim=simAverage(5), esc9=schoolAverage();
  const pend=cadernoIds().length;

  let h='<div class="stack">';

  /* HERO */
  h+='<div class="hero"><div class="hero-top"><div>'
   + '<div class="hero-name">PAULO</div>'
   + '<div class="hero-rank">'+info.nome+'</div>'
   + '</div><div class="lvl-badge"><div><b>'+pl.lvl+'</b><span>LEVEL</span></div></div></div>';

  h+='<div class="xpwrap"><div class="xpbar"><i id="hx" style="width:0"></i></div>'
   + '<div class="xpmeta"><span>XP <b>'+S.st.xp.toLocaleString('pt-BR')+'</b>'
   + (xp.max?'':' / <b>'+xp.next.toLocaleString('pt-BR')+'</b>')+'</span>'
   + '<span>'+(xp.max?'Nível máximo':'faltam <b>'+(xp.next-S.st.xp).toLocaleString('pt-BR')+'</b> XP')+'</span></div></div>';

  if(pl.cap.need && pl.raw>=pl.cap.cap){
    h+='<div class="lockbar">Nível travado em <b>'+pl.cap.cap+'</b>. '
     + 'Para destravar: '+pl.cap.need+' <b>('+pl.cap.have+')</b>.<br>'
     + '<span class="dimtxt">XP sobe com quantidade. Nível sobe com domínio.</span></div>';
  }
  h+='</div>';

  /* estado geral */
  h+='<div class="panel"><div class="situ">'
   + '<div class="situ-l '+sit.cor+'">'+sit.ico+'</div>'
   + '<div class="situ-b"><strong>'+sit.nome+'</strong><span>'+sit.txt+'</span></div></div></div>';

  /* stats */
  h+='<div class="grid g2">'
   + statCard('Média simulados', sim===null?'—':sim+'%', 'últimos 5', sim===null?'v-muted':sim>=80?'v-green':sim>=60?'v-amber':'v-red')
   + statCard('Média escolar', esc9===null?'—':esc9.toFixed(1).replace('.',','), S.st.school.length+' prova(s) real(is)', esc9===null?'v-muted':esc9>=8?'v-green':esc9>=6?'v-amber':'v-red')
   + statCard('Tendência',
       tr.dir==='novo' ? '—' : tr.txt.split(' ')[0],
       tr.dir==='novo' ? 'sem histórico' : tr.txt.replace(/^[↑↓→]\s*/,''),
       tr.dir==='up'?'v-green':tr.dir==='down'?'v-red':'v-muted')
   + statCard('Sequência', S.st.streak.count, S.st.streak.count===1?'dia de estudo':'dias seguidos', S.st.streak.count>=3?'v-cyan':'v-muted')
   + '</div>';

  /* níveis por matéria (item 41) */
  h+='<div class="panel"><div class="panel-t">Nível por matéria</div><div class="grid g2">';
  SUBJECTS.forEach(s=>{
    const sl=subjectLevel(s);
    h+='<div class="stat"><div class="stat-l">'+s+'</div>'
     + '<div class="stat-v '+(s==='História'?'v-amber':'v-cyan')+'">Nv '+sl.lvl+'</div>'
     + '<div class="stat-s">'+levelInfo(sl.lvl).nome+' · '+(sl.acc===null?'sem dados':sl.acc+'% de acerto')+'</div></div>';
  });
  h+='</div></div>';

  /* desafio atual */
  h+='<div class="panel"><div class="panel-t">Desafio recomendado</div>'
   + '<p class="page-sub">'+esc(rec.subject)+' · nível '+DIFFS[rec.diff].nome
   + (rec.topics.length?' · '+esc(rec.topics.join(' + ')):'')+' · '+rec.n+' questões</p>'
   + '<p class="dimtxt mt">'+esc(rec.motivo)+'</p>'
   + '<div class="btnrow mt"><button class="btn primary wide" onclick="startRecommended()">Iniciar desafio recomendado</button></div></div>';

  /* boss */
  h+='<div class="panel"><div class="panel-t"><span>Boss Battle</span>'
   + '<span class="tag '+(bu.ok?'boss':'')+'">'+(bu.ok?'DISPONÍVEL':'BLOQUEADO')+'</span></div>';
  if(bu.ok){
    h+='<p class="page-sub">Conteúdos misturados, nível máximo, XP diferenciado.'
     + (S.st.boss.defeated?' Já derrotado '+S.st.boss.defeated+'x — melhor placar '+S.st.boss.best+'%.':'')+'</p>'
     + '<div class="btnrow mt"><button class="btn boss wide" onclick="startBoss()">Enfrentar o Boss</button></div>';
  }else{
    h+='<p class="page-sub">Libera com <b>dois simulados Médios acima de 80%</b> ('+bu.med+'/2) '
     + 'ou <b>um Difícil acima de 75%</b> ('+bu.dif+'/1).</p>';
  }
  h+='</div>';

  if(pend){
    h+='<div class="panel"><div class="panel-t">Pendências</div>'
     + '<p class="page-sub"><b>'+pend+'</b> '+(pend===1?'questão errada aguarda':'questões erradas aguardam')+' revisão no Caderno de Erros.</p>'
     + '<div class="btnrow mt"><button class="btn wide" onclick="go(\'caderno\')">Revisar agora</button></div></div>';
  }

  h+='</div>';
  document.getElementById('view').innerHTML=h;
  setTimeout(()=>{ const b=document.getElementById('hx'); if(b) b.style.width=Math.min(100,xp.pct)+'%'; },60);
}

function startRecommended(){
  const r=recommendation();
  startQuiz({diff:r.diff, subject:r.subject, topics:r.topics, n:r.n});
}
function startBoss(){
  if(!bossUnlocked().ok){ toast('Boss ainda bloqueado'); return; }
  startQuiz({boss:true, diff:'boss', subject:null, n:12});
}

/* ============================================================
   TREINAR
   ============================================================ */
let trainSubject=null;
function viewTrain(){
  const rec=recommendedDiff(), bu=bossUnlocked(), d=diffStats();
  let h='<div class="stack">';
  h+='<div class="page-head"><div class="kicker">Treino</div>'
   + '<h1 class="page-title">Escolha o campo de batalha</h1>'
   + '<p class="page-sub">A dificuldade muda de verdade: não são as mesmas perguntas com outras palavras.</p></div>';

  h+='<div class="panel"><div class="panel-t">Matéria</div><div class="chips">'
   + '<button class="chip'+(trainSubject===null?' on':'')+'" onclick="setTrainSubject(null)">Todas</button>';
  SUBJECTS.forEach(s=>{
    h+='<button class="chip'+(trainSubject===s?' on':'')+'" onclick="setTrainSubject(\''+s+'\')">'+s+'</button>';
  });
  h+='</div></div>';

  h+='<div class="stack">';
  ['facil','medio','dificil'].forEach(k=>{
    const D=DIFFS[k], st=d[k];
    const isRec = k===rec;
    h+='<button class="mode" onclick="startQuiz({diff:\''+k+'\',subject:'+(trainSubject?'\''+trainSubject+'\'':'null')+',n:12})">'
     + '<div class="mode-ico">'+(k==='facil'?'◇':k==='medio'?'◈':'◆')+'</div>'
     + '<div class="mode-b"><strong>'+D.nome+' <span class="tag '+D.cls+'">LV '+D.lv[0]+'-'+D.lv[1]+'</span>'
     + (isRec?' <span class="tag ok">recomendado</span>':'')+'</strong>'
     + '<span>'+D.desc+'</span></div>'
     + '<div class="mode-x">'+(st.n?st.acc+'%':'—')+'</div></button>';
  });

  h+='<button class="mode" onclick="startBoss()"'+(bu.ok?'':' disabled')+'>'
   + '<div class="mode-ico">✖</div><div class="mode-b">'
   + '<strong>Boss Battle <span class="tag boss">LV 8-10</span></strong>'
   + '<span>'+(bu.ok?DIFFS.boss.desc:'Bloqueado: 2 simulados Médios acima de 80% ('+bu.med+'/2) ou 1 Difícil acima de 75% ('+bu.dif+'/1).')+'</span></div>'
   + '<div class="mode-x">'+(S.st.boss.best?S.st.boss.best+'%':'—')+'</div></button>';

  const pend=cadernoIds().length;
  h+='<button class="mode" onclick="reviewFromCaderno()"'+(pend?'':' disabled')+'>'
   + '<div class="mode-ico">⟲</div><div class="mode-b">'
   + '<strong>Revisão dirigida</strong><span>'
   + (pend?'Refaz apenas o que você errou e ainda não dominou. Vale XP de correção.':'Sem erros pendentes no momento.')
   + '</span></div><div class="mode-x">'+pend+'</div></button>';
  h+='</div>';

  h+='<div class="panel"><div class="panel-t">Desempenho por nível <span class="dimtxt">item 57</span></div>'
   + bar('Fácil',   d.facil.n?d.facil.acc:null,   'var(--green)')
   + bar('Médio',   d.medio.n?d.medio.acc:null,   'var(--amber)')
   + bar('Difícil', d.dificil.n?d.dificil.acc:null,'var(--red)')
   + '<p class="dimtxt mt">95% no Fácil não significa domínio. O número que conta é o do Difícil.</p></div>';

  h+='</div>';
  document.getElementById('view').innerHTML=h;
}
function setTrainSubject(s){ trainSubject=s; viewTrain(); }

/* ============================================================
   CADERNO DE ERROS (itens 55 e 56)
   ============================================================ */
let cadFilter='pend';
function viewCaderno(){
  const all=Object.keys(S.st.q).filter(id=>S.st.q[id].ko>0 && BYID[id]);
  const pend=all.filter(id=>qstatus(id)!=='dominado');
  const dom=all.filter(id=>qstatus(id)==='dominado');
  const list = cadFilter==='pend' ? pend : dom;

  let h='<div class="stack">';
  h+='<div class="page-head"><div class="kicker">Revisão</div>'
   + '<h1 class="page-title">Caderno de Erros</h1>'
   + '<p class="page-sub">Uma questão só sai daqui quando você acerta de novo, em outro dia. Acerto isolado é sorte; acerto repetido é domínio.</p></div>';

  h+='<div class="grid g3">'
   + statCard('Pendentes', pend.length, 'aguardam revisão', pend.length?'v-red':'v-green')
   + statCard('Corrigidos', countCorrigidos(), 'já reacertados', 'v-amber')
   + statCard('Dominados', dom.length, 'saíram do caderno', 'v-green')
   + '</div>';

  if(pend.length){
    h+='<div class="btnrow"><button class="btn primary wide" onclick="reviewFromCaderno()">⟲ Revisar os pendentes</button></div>';
  }

  h+='<div class="chips"><button class="chip'+(cadFilter==='pend'?' on':'')+'" onclick="setCad(\'pend\')">Pendentes ('+pend.length+')</button>'
   + '<button class="chip'+(cadFilter==='dom'?' on':'')+'" onclick="setCad(\'dom\')">Dominados ('+dom.length+')</button></div>';

  if(!list.length){
    h+='<div class="panel empty"><span class="ico">'+(cadFilter==='pend'?'✓':'○')+'</span>'
     + '<p>'+(cadFilter==='pend'
        ? 'Nenhum erro pendente. Se você ainda não treinou, o caderno começa a se preencher sozinho no primeiro simulado.'
        : 'Nenhuma questão dominada ainda. Acerte duas vezes, em dias diferentes, uma questão que você errou.')+'</p></div>';
  }else{
    list.sort((a,b)=>S.st.q[b].ko-S.st.q[a].ko);
    list.forEach(id=>{
      const q=BYID[id], r=S.st.q[id], stt=qstatus(id);
      const D=DIFFS[diffOf(q.lv)];
      const tagCls = stt==='dominado'?'ok':stt==='corrigido'?'warn':'hard';
      const tagTxt = stt==='dominado'?'DOMINADO':stt==='corrigido'?'CORRIGIDO':'AINDA PRECISA REVISAR';
      const last=r.hist[r.hist.length-1];
      h+='<div class="item">'
       + '<div class="item-h"><div class="item-q">'+q.q.replace(/<[^>]+>/g,'')+'</div></div>'
       + '<div class="item-m"><span class="tag '+(q.s==='História'?'hist':'eng')+'">'+q.s+'</span>'
       + '<span class="tag '+D.cls+'">'+D.nome+'</span><span class="tag">'+q.t+'</span>'
       + '<span class="tag '+tagCls+'">'+tagTxt+'</span></div>'
       + '<div class="ans-line"><span class="good">Correta:</span> '+esc(q.type==='text'?q.ans[0]:q.o[q.a])+'</div>'
       + '<div class="item-d mt">Errou <b>'+r.ko+'</b> '+(r.ko===1?'vez':'vezes')+' · acertou <b>'+r.ok+'</b> · último registro em <b>'+fmtBR(last?last.d:'')+'</b></div>'
       + '<div class="btnrow mt"><button class="btn sm" onclick="openExplain(\''+id+'\')">Ver explicação completa</button></div>'
       + '<div id="ex-'+id+'"></div></div>';
    });
  }
  h+='</div>';
  document.getElementById('view').innerHTML=h;
}
function setCad(f){ cadFilter=f; viewCaderno(); }
function openExplain(id){
  const box=document.getElementById('ex-'+id);
  if(!box) return;
  if(box.innerHTML){ box.innerHTML=''; return; }
  box.innerHTML=explainHTML(BYID[id], null, true);
}

/* ============================================================
   NOTAS DA ESCOLA (itens 45 e 46)
   ============================================================ */
function viewSchool(){
  const g=S.st.school.slice().sort((a,b)=>b.date.localeCompare(a.date));
  let h='<div class="stack">';
  h+='<div class="page-head"><div class="kicker">Mundo real</div>'
   + '<h1 class="page-title">Notas da Escola</h1>'
   + '<p class="page-sub">Área independente dos simulados. Aqui entram as provas reais — é o que o sistema usa para conferir se o treino está prevendo bem o resultado.</p></div>';

  const med=schoolAverage();
  h+='<div class="grid g3">'
   + statCard('Média escolar', med===null?'—':med.toFixed(1).replace('.',','), 'todas as provas', med===null?'v-muted':med>=8?'v-green':med>=6?'v-amber':'v-red')
   + statCard('Provas', g.length, 'cadastradas', 'v-blue')
   + statCard('Média simulados', simAverage()===null?'—':simAverage()+'%', 'histórico completo', 'v-cyan')
   + '</div>';

  /* formulário */
  h+='<div class="panel"><div class="panel-t">Cadastrar nota real</div>'
   + '<div class="frow"><div class="field"><label>Matéria</label>'
   + '<select id="g-sub"><option>História</option><option>Inglês</option><option>Matemática</option>'
   + '<option>Ciências</option><option>Geografia</option><option>Português</option><option>Outra</option></select></div>'
   + '<div class="field"><label>Prova</label><input id="g-exam" placeholder="P1, P2, Recuperação..."></div></div>'
   + '<div class="frow"><div class="field"><label>Data</label><input id="g-date" type="date" value="'+today()+'"></div>'
   + '<div class="field"><label>Conteúdo</label><input id="g-content" placeholder="Brasil Colonial"></div></div>'
   + '<div class="frow"><div class="field"><label>Nota obtida</label><input id="g-score" type="number" step="0.1" min="0" placeholder="8,5"></div>'
   + '<div class="field"><label>Nota máxima</label><input id="g-max" type="number" step="0.1" min="0.1" value="10"></div></div>'
   + '<div class="field"><label>Observação</label><textarea id="g-note" placeholder="Errou principalmente Capitanias Hereditárias."></textarea></div>'
   + '<button class="btn primary wide" onclick="addGrade()">Salvar nota</button></div>';

  if(!g.length){
    h+='<div class="panel empty"><span class="ico">○</span><p>Nenhuma prova cadastrada ainda. Assim que a primeira nota entrar, o sistema passa a comparar o desempenho dos simulados com o resultado real.</p></div>';
  }else{
    h+='<div class="panel-t" style="margin-top:6px">Histórico</div>';
    g.forEach(x=>{
      const p=Math.round(x.score/x.max*100);
      const cmp=compareSchool(x);
      h+='<div class="item"><div class="item-h">'
       + '<div><div class="item-q">'+esc(x.subject)+' · '+esc(x.exam||'Prova')+'</div>'
       + '<div class="item-d">'+fmtBR(x.date)+(x.content?' · '+esc(x.content):'')+'</div></div>'
       + '<div class="right"><div class="stat-v '+(p>=80?'v-green':p>=60?'v-amber':'v-red')+'">'
       + String(x.score).replace('.',',')+'</div><div class="dimtxt">de '+String(x.max).replace('.',',')+'</div></div></div>';
      if(x.note) h+='<div class="item-d mt">'+esc(x.note)+'</div>';
      if(cmp){
        h+='<div class="fb '+(cmp.cor==='v-green'?'ok':cmp.cor==='v-amber'?'warn':'hintbox')+'" style="font-weight:600">'
         + '<b>Simulados nas 3 semanas anteriores: '+cmp.sim+'% · Prova real: '+cmp.real+'%.</b><br>'+cmp.txt+'</div>';
      }else{
        h+='<div class="item-d mt dimtxt">Sem simulados desta matéria nas 3 semanas anteriores à prova — não há base para comparar.</div>';
      }
      h+='<div class="btnrow mt"><button class="btn sm ghost" onclick="delGrade(\''+x.id+'\')">Excluir</button></div></div>';
    });
  }
  h+='</div>';
  document.getElementById('view').innerHTML=h;
}
function addGrade(){
  const v=id=>document.getElementById(id).value;
  const score=parseFloat(String(v('g-score')).replace(',','.'));
  const max=parseFloat(String(v('g-max')).replace(',','.'));
  if(isNaN(score)||isNaN(max)||max<=0){ toast('Preencha nota obtida e nota máxima'); return; }
  if(score<0||score>max){ toast('A nota obtida precisa estar entre 0 e a nota máxima'); return; }
  S.st.school.push({
    id:'g'+Date.now(), subject:v('g-sub'), exam:v('g-exam')||'Prova',
    date:v('g-date')||today(), score:score, max:max,
    content:v('g-content'), note:v('g-note')
  });
  checkAchievements(); S.save();
  toast('Nota cadastrada');
  viewSchool(); updateTopbar();
}
function delGrade(id){
  if(!confirm('Excluir esta nota?')) return;
  S.st.school=S.st.school.filter(x=>x.id!==id);
  S.save(); viewSchool();
}

/* ============================================================
   PERFORMANCE — "Como o Paulo está?" (itens 47 a 50, 57)
   ============================================================ */
function viewPerf(){
  const sit=situation(), tr=trend(), d=diffStats();
  const tops=topicStats();
  const best=tops.slice().sort((a,b)=>b.acc-a.acc)[0];
  const worst=tops.slice().sort((a,b)=>a.acc-b.acc)[0];
  const accH=accuracy('História'), accE=accuracy('Inglês');
  const rec=recommendation();
  const med=schoolAverage(), lastG=S.st.school.slice().sort((a,b)=>b.date.localeCompare(a.date))[0];

  let h='<div class="stack">';
  h+='<div class="page-head"><div class="kicker">Diagnóstico</div>'
   + '<h1 class="page-title">Como o Paulo está</h1>'
   + '<p class="page-sub">Não olha só a última prova. Cruza simulados, notas reais, dificuldade treinada, erros corrigidos e constância.</p></div>';

  h+='<div class="panel"><div class="situ">'
   + '<div class="situ-l '+sit.cor+'" style="font-size:26px">'+sit.ico+'</div>'
   + '<div class="situ-b"><strong>'+sit.nome+'</strong><span>'+sit.txt+'</span></div></div></div>';

  /* cards do item 49 */
  const strongS = (accH===null||accE===null)?null:(accH>=accE?'História':'Inglês');
  const weakS   = (accH===null||accE===null)?null:(accH>=accE?'Inglês':'História');
  h+='<div class="grid g2">'
   + statCard('Desempenho geral', accuracy()===null?'—':accuracy()+'%', 'todas as questões', 'v-blue')
   + statCard('Tendência', tr.txt, tr.delta?(tr.delta>0?'+':'')+tr.delta+' pp vs. anterior':'', tr.dir==='up'?'v-green':tr.dir==='down'?'v-red':'v-muted')
   + statCard('Matéria mais forte', strongS||'—', strongS?Math.max(accH,accE)+'% de acerto':'sem dados', 'v-green')
   + statCard('Precisa de atenção', weakS||'—', weakS?Math.min(accH,accE)+'% de acerto':'sem dados', 'v-amber')
   + statCard('Conteúdo mais forte', best?best.t:'—', best?best.acc+'%':'sem dados', 'v-green')
   + statCard('Conteúdo mais fraco', worst?worst.t:'—', worst?worst.acc+'%':'sem dados', 'v-red')
   + statCard('Última prova real', lastG?String(lastG.score).replace('.',','):'—', lastG?esc(lastG.subject)+' · '+fmtBR(lastG.date):'nenhuma cadastrada', 'v-violet')
   + statCard('Média escolar', med===null?'—':med.toFixed(1).replace('.',','), 'provas reais', 'v-violet')
   + statCard('Média simulados', simAverage()===null?'—':simAverage()+'%', S.st.runs.length+' simulado(s)', 'v-cyan')
   + statCard('Dificuldade recomendada', DIFFS[rec.diff].nome, 'para o próximo treino', 'v-amber')
   + statCard('Sequência de estudos', S.st.streak.count, 'recorde: '+S.st.streak.best, 'v-cyan')
   + statCard('Erros pendentes', cadernoIds().length, countDominados()+' dominados', cadernoIds().length?'v-red':'v-green')
   + '</div>';

  /* análise textual (item 50) */
  h+='<div class="panel"><div class="panel-t">Análise</div>';
  analysisText().forEach(p=>{ h+='<div class="analysis">'+p+'</div>'; });
  h+='</div>';

  /* por dificuldade (item 57) */
  h+='<div class="panel"><div class="panel-t">Evolução por dificuldade</div>'
   + bar('Fácil ('+d.facil.n+' questões)',   d.facil.n?d.facil.acc:null,   'var(--green)')
   + bar('Médio ('+d.medio.n+' questões)',   d.medio.n?d.medio.acc:null,   'var(--amber)')
   + bar('Difícil ('+d.dificil.n+' questões)', d.dificil.n?d.dificil.acc:null,'var(--red)')
   + '<p class="dimtxt mt">Separar por nível evita falsa sensação de domínio: alto aproveitamento no Fácil mede memorização, não compreensão.</p></div>';

  /* por conteúdo */
  if(tops.length){
    h+='<div class="panel"><div class="panel-t">Por conteúdo</div>';
    tops.sort((a,b)=>a.acc-b.acc).forEach(t=>{
      h+=bar(esc(t.t)+' <span class="dimtxt">'+t.s+'</span>', t.acc, t.acc>=80?'var(--green)':t.acc>=60?'var(--amber)':'var(--red)');
    });
    h+='</div>';
  }

  /* histórico */
  if(S.st.runs.length){
    h+='<div class="panel"><div class="panel-t">Últimos simulados</div>';
    S.st.runs.slice(-8).reverse().forEach(r=>{
      const D=DIFFS[r.diff]||{nome:'Revisão',cls:''};
      h+='<div class="miss"><div class="miss-i">'+(r.diff==='boss'?'✖':'◈')+'</div>'
       + '<div class="miss-b"><strong>'+esc(r.subject)+' · '+D.nome+'</strong>'
       + '<small>'+fmtBR(r.date)+' · '+r.right+'/'+r.total+' acertos</small></div>'
       + '<div class="miss-x '+(r.pct>=80?'v-green':r.pct>=60?'v-amber':'v-red')+'">'+r.pct+'%</div></div>';
    });
    h+='</div>';
  }

  h+='<div class="panel"><div class="panel-t">Dados</div>'
   + '<p class="dimtxt">Todo o progresso fica salvo apenas neste aparelho (localStorage). Não sincroniza entre celular e computador, e limpar os dados do navegador apaga o histórico.</p>'
   + '<div class="btnrow mt"><button class="btn sm" onclick="exportData()">Exportar backup</button>'
   + '<button class="btn sm ghost" onclick="resetAll()">Zerar progresso</button></div></div>';

  h+='</div>';
  document.getElementById('view').innerHTML=h;
}

function exportData(){
  const blob=new Blob([JSON.stringify(S.st,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='paulo-academy-'+today()+'.json';
  document.body.appendChild(a); a.click(); a.remove();
  toast('Backup gerado');
}
function resetAll(){
  if(!confirm('Zerar TODO o progresso? XP, níveis, caderno de erros e notas da escola serão apagados. Não há como desfazer.')) return;
  if(!confirm('Confirma mesmo? Esta ação é definitiva.')) return;
  S.reset(); toast('Progresso zerado'); go('home'); updateTopbar();
}

/* ============================================================
   MISSÕES E CONQUISTAS (itens 61 e 62)
   ============================================================ */
function viewMissions(){
  const ms=missions();
  let h='<div class="stack">';
  h+='<div class="page-head"><div class="kicker">Objetivos</div>'
   + '<h1 class="page-title">Missões</h1>'
   + '<p class="page-sub">Missão concluída credita XP automaticamente ao final do simulado.</p></div>';

  h+='<div class="panel">';
  ms.forEach(m=>{
    const done=m.cur>=m.max;
    h+='<div class="miss'+(done?' done':'')+'"><div class="miss-i">'+m.ico+'</div>'
     + '<div class="miss-b"><strong>'+m.nome+'</strong>'
     + '<div class="mp"><i style="width:'+Math.min(100,Math.round(m.cur/m.max*100))+'%"></i></div>'
     + '<small>'+m.desc+' — '+m.cur+'/'+m.max+(m.suffix||'')+'</small></div>'
     + '<div class="miss-x">'+(done?'✓ ':'')+'+'+m.xp+' XP</div></div>';
  });
  h+='</div>';

  h+='<div class="page-head" style="margin-top:8px"><div class="kicker">Reconhecimento</div>'
   + '<h1 class="page-title">Conquistas</h1>'
   + '<p class="page-sub">'+S.st.ach.length+' de '+ACHS.length+' desbloqueadas.</p></div>';
  h+='<div class="panel"><div class="badges">';
  ACHS.forEach(a=>{
    const on=S.st.ach.includes(a.id);
    h+='<div class="badge'+(on?' on':'')+'"><span class="bi">'+a.ico+'</span>'
     + '<div class="bn">'+a.nome+'</div><div class="bd">'+a.desc+'</div></div>';
  });
  h+='</div></div>';

  h+='<div class="panel"><div class="panel-t">Como o nível sobe</div>'
   + '<p class="dimtxt">O XP mede atividade. O nível mede domínio: ele trava até você provar desempenho em dificuldade maior, corrigir erros antigos e sustentar resultado na escola. '
   + 'É por isso que repetir questão fácil rende cada vez menos XP e não move o nível.</p>';
  const pl=playerLevel();
  h+='<div class="grid g2 mt">'
   + statCard('Nível atual', pl.lvl, levelInfo(pl.lvl).nome, 'v-cyan')
   + statCard('Nível por XP', pl.raw, pl.raw>pl.lvl?'travado pelo domínio':'liberado', pl.raw>pl.lvl?'v-amber':'v-green')
   + '</div>';
  if(pl.cap.need) h+='<div class="lockbar">Para destravar o nível '+(pl.cap.cap+1)+': '+pl.cap.need+' <b>('+pl.cap.have+')</b>.</div>';
  h+='</div>';

  h+='</div>';
  document.getElementById('view').innerHTML=h;
}
