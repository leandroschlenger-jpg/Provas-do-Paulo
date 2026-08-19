/* ============================================================
   STATE — progressão, XP, níveis, maestria, missões, conquistas
   Persistência: localStorage (fica no aparelho do Paulo)
   ============================================================ */

const BANK = [].concat(HISTORIA, INGLES);
const BYID = {}; BANK.forEach(q => BYID[q.id] = q);
const SUBJECTS = ['História','Inglês'];

/* ---------- níveis (item 39) ---------- */
const LEVELS = [
  {n:1,  nome:'Iniciante',    xp:0},
  {n:2,  nome:'Aprendiz',     xp:300},
  {n:3,  nome:'Competidor',   xp:750},
  {n:4,  nome:'Estrategista', xp:1400},
  {n:5,  nome:'Avançado',     xp:2300},
  {n:6,  nome:'Especialista', xp:3500},
  {n:7,  nome:'Elite',        xp:5000},
  {n:8,  nome:'Mestre',       xp:7000},
  {n:9,  nome:'Lendário',     xp:9500},
  {n:10, nome:'Boss Mode',    xp:12500}
];

/* ---------- faixas de dificuldade (itens 42/43) ---------- */
const DIFFS = {
  facil:   {key:'facil',   nome:'Fácil',   lv:[1,3],  cls:'easy',
            desc:'Fixação e reconhecimento. Perguntas diretas, conceitos e datas.'},
  medio:   {key:'medio',   nome:'Médio',   lv:[4,6],  cls:'mid',
            desc:'Nível de boa prova escolar. Interpretação, aplicação e comparação.'},
  dificil: {key:'dificil', nome:'Difícil', lv:[7,10], cls:'hard',
            desc:'Inferência, causa e consequência, alternativas muito plausíveis.'},
  boss:    {key:'boss',    nome:'Boss',    lv:[8,10], cls:'boss',
            desc:'Conteúdos misturados, nível máximo, sem questão óbvia.'}
};
function diffOf(lv){ return lv<=3 ? 'facil' : lv<=6 ? 'medio' : 'dificil'; }

/* ---------- datas ---------- */
function today(){ const d=new Date(); return d.toISOString().slice(0,10); }
function daysBetween(a,b){ return Math.round((new Date(b)-new Date(a))/86400000); }
function fmtBR(iso){ if(!iso) return '—'; const p=iso.slice(0,10).split('-'); return p[2]+'/'+p[1]+'/'+p[0]; }
function weekKey(){
  const d=new Date(); const t=new Date(d.getFullYear(),0,1);
  return d.getFullYear()+'-W'+Math.ceil(((d-t)/86400000 + t.getDay()+1)/7);
}

/* ---------- store ---------- */
const KEY='paulo_academy_v1';

const S = {
  st:null,
  load(){
    let raw=null;
    try{ raw = localStorage.getItem(KEY); }catch(e){}
    this.st = raw ? JSON.parse(raw) : null;
    if(!this.st) this.st = this.blank();
    // migração leve / campos novos
    const b=this.blank();
    for(const k in b) if(this.st[k]===undefined) this.st[k]=b[k];
    this.rollDates();
    return this.st;
  },
  blank(){
    return {
      v:1, xp:0,
      xpSub:{'História':0,'Inglês':0},
      runs:[],                 // simulados finalizados
      q:{},                    // estatística por questão
      school:[],               // notas reais da escola
      ach:[],                  // conquistas conquistadas
      streak:{last:'',count:0,best:0},
      combo:0, comboBest:0,
      daily:{d:'',easyXp:0,answered:0},
      weekly:{w:'',runs:0},
      boss:{defeated:0,best:0},
      missionsDone:[],
      evo:null                 // missão de evolução ativa
    };
  },
  save(){ try{ localStorage.setItem(KEY, JSON.stringify(this.st)); }catch(e){} },
  reset(){ this.st=this.blank(); this.save(); },
  rollDates(){
    const t=today(), w=weekKey();
    if(this.st.daily.d!==t) this.st.daily={d:t,easyXp:0,answered:0};
    if(this.st.weekly.w!==w) this.st.weekly={w:w,runs:0};
  },
  /* sequência de dias de estudo */
  touchStreak(){
    const t=today(), s=this.st.streak;
    if(s.last===t) return;
    if(s.last && daysBetween(s.last,t)===1) s.count++;
    else s.count=1;
    s.last=t;
    if(s.count>s.best) s.best=s.count;
  }
};

/* ============================================================
   ESTATÍSTICA POR QUESTÃO / MAESTRIA (itens 55 e 56)
   ============================================================ */
function qrec(id){
  if(!S.st.q[id]) S.st.q[id]={seen:0,ok:0,ko:0,hist:[],given:null};
  return S.st.q[id];
}
/* status: 'errado' | 'corrigido' | 'dominado' | 'ok' | 'novo' */
function qstatus(id){
  const r=S.st.q[id]; if(!r||!r.hist.length) return 'novo';
  if(!r.ko) return 'ok';
  const h=r.hist;
  // dominado: acertou 2x depois do último erro, em dias diferentes
  let lastKo=-1;
  h.forEach((e,i)=>{ if(!e.ok) lastKo=i; });
  const after=h.slice(lastKo+1).filter(e=>e.ok);
  if(after.length>=2 && after[after.length-1].d!==after[0].d) return 'dominado';
  if(after.length>=1) return 'corrigido';
  return 'errado';
}
function cadernoIds(){
  return Object.keys(S.st.q).filter(id=>{
    const r=S.st.q[id]; if(!r.ko) return false;
    return qstatus(id)!=='dominado';
  });
}
function countDominados(){
  return Object.keys(S.st.q).filter(id=>S.st.q[id].ko>0 && qstatus(id)==='dominado').length;
}
function countCorrigidos(){
  return Object.keys(S.st.q).filter(id=>{
    const s=qstatus(id); return S.st.q[id].ko>0 && (s==='corrigido'||s==='dominado');
  }).length;
}

/* ============================================================
   XP (item 40) — com trava anti-repetição de questão fácil
   ============================================================ */
function baseXp(lv){ return lv<=3 ? 10 : lv<=6 ? 20 : 40; }

function awardQuestionXp(q, wasWrongBefore){
  const r=qrec(q.id);
  let xp = wasWrongBefore ? 50 : baseXp(q.lv);

  // decaimento por repetição: a mesma questão rende cada vez menos
  const prevOks = r.ok;
  if(prevOks===1) xp=Math.round(xp*0.4);
  else if(prevOks===2) xp=Math.round(xp*0.15);
  else if(prevOks>=3) xp=0;

  // teto diário de XP vindo do nível fácil (evita farm)
  if(q.lv<=3){
    const room = Math.max(0, 200 - S.st.daily.easyXp);
    xp = Math.min(xp, room);
    S.st.daily.easyXp += xp;
  }
  addXp(xp, q.s);
  return xp;
}

function addXp(n, subject){
  if(!n) return;
  S.st.xp += n;
  if(subject && S.st.xpSub[subject]!==undefined) S.st.xpSub[subject]+=n;
}

/* ============================================================
   NÍVEIS — XP define o avanço, DOMÍNIO define o teto (item 39/63)
   ============================================================ */
function levelFromXp(xp){
  let l=1; LEVELS.forEach(L=>{ if(xp>=L.xp) l=L.n; }); return l;
}
function levelInfo(n){ return LEVELS[Math.min(9,Math.max(0,n-1))]; }

/* desempenho agregado por faixa de dificuldade */
function diffStats(subject){
  const out={facil:{n:0,ok:0},medio:{n:0,ok:0},dificil:{n:0,ok:0}};
  Object.keys(S.st.q).forEach(id=>{
    const q=BYID[id]; if(!q) return;
    if(subject && q.s!==subject) return;
    const r=S.st.q[id], d=diffOf(q.lv);
    out[d].n += r.hist.length;
    out[d].ok += r.hist.filter(e=>e.ok).length;
  });
  ['facil','medio','dificil'].forEach(k=>{
    out[k].acc = out[k].n ? Math.round(out[k].ok/out[k].n*100) : 0;
  });
  return out;
}

/* teto de nível: só sobe provando domínio real, não quantidade */
function levelCap(){
  const d=diffStats(), corr=countCorrigidos();
  if(d.medio.n<10)   return {cap:3, need:'responder 10 questões no nível Médio', have:d.medio.n+'/10'};
  if(d.medio.acc<70) return {cap:5, need:'atingir 70% de acerto no nível Médio', have:d.medio.acc+'%/70%'};
  if(d.dificil.n<10) return {cap:6, need:'responder 10 questões no nível Difícil', have:d.dificil.n+'/10'};
  if(d.dificil.acc<60) return {cap:7, need:'atingir 60% no nível Difícil', have:d.dificil.acc+'%/60%'};
  if(d.dificil.acc<75) return {cap:8, need:'atingir 75% no nível Difícil', have:d.dificil.acc+'%/75%'};
  /* a meta de correção escala com os erros que realmente existiram:
     quem erra pouco não pode ficar travado por falta de erro a corrigir */
  const errosTotais=Object.keys(S.st.q).filter(id=>S.st.q[id].ko>0).length;
  const metaCorr=Math.min(10, errosTotais);
  if(metaCorr>0 && corr<metaCorr)
    return {cap:8, need:'corrigir '+metaCorr+' erros do Caderno', have:corr+'/'+metaCorr};
  if(!S.st.boss.defeated) return {cap:9, need:'derrotar o Boss Battle', have:'0/1'};
  return {cap:10, need:null};
}
function playerLevel(){
  const cap=levelCap();
  return {lvl:Math.min(levelFromXp(S.st.xp), cap.cap), raw:levelFromXp(S.st.xp), cap:cap};
}
function xpProgress(){
  const raw=levelFromXp(S.st.xp);
  const cur=levelInfo(raw), nxt=raw<10?levelInfo(raw+1):null;
  if(!nxt) return {cur:S.st.xp, need:LEVELS[9].xp, pct:100, max:true};
  const span=nxt.xp-cur.xp, done=S.st.xp-cur.xp;
  return {cur:S.st.xp, into:done, span:span, next:nxt.xp, pct:Math.round(done/span*100), max:false};
}

/* nível por matéria (item 41) */
function subjectLevel(sub){
  const xp=S.st.xpSub[sub]||0;
  let l=1; LEVELS.forEach(L=>{ if(xp>=L.xp*0.42) l=L.n; });
  const d=diffStats(sub);
  let cap=10;
  if(d.medio.n<6) cap=3;
  else if(d.medio.acc<70) cap=5;
  else if(d.dificil.n<6) cap=6;
  else if(d.dificil.acc<70) cap=8;
  return {lvl:Math.min(l,cap), xp:xp, acc:accuracy(sub)};
}

/* ============================================================
   ACURÁCIA / AGREGADOS
   ============================================================ */
function accuracy(subject, diffKey){
  let n=0, ok=0;
  Object.keys(S.st.q).forEach(id=>{
    const q=BYID[id]; if(!q) return;
    if(subject && q.s!==subject) return;
    if(diffKey && diffOf(q.lv)!==diffKey) return;
    const r=S.st.q[id];
    n+=r.hist.length; ok+=r.hist.filter(e=>e.ok).length;
  });
  return n ? Math.round(ok/n*100) : null;
}
function topicStats(subject){
  const m={};
  Object.keys(S.st.q).forEach(id=>{
    const q=BYID[id]; if(!q) return;
    if(subject && q.s!==subject) return;
    const r=S.st.q[id];
    if(!m[q.t]) m[q.t]={t:q.t,s:q.s,n:0,ok:0};
    m[q.t].n+=r.hist.length; m[q.t].ok+=r.hist.filter(e=>e.ok).length;
  });
  return Object.values(m).map(x=>{ x.acc=x.n?Math.round(x.ok/x.n*100):0; return x; })
                         .filter(x=>x.n>=2);
}
function simAverage(nLast){
  const r=S.st.runs.slice(-(nLast||999));
  if(!r.length) return null;
  return Math.round(r.reduce((a,b)=>a+b.pct,0)/r.length);
}
function schoolAverage(subject){
  const g=S.st.school.filter(x=>!subject||x.subject===subject);
  if(!g.length) return null;
  const v=g.reduce((a,b)=>a+(b.score/b.max*10),0)/g.length;
  return Math.round(v*10)/10;
}

/* ============================================================
   BOSS (item 44)
   ============================================================ */
function bossUnlocked(){
  const runs=S.st.runs;
  const med=runs.filter(r=>r.diff==='medio' && r.pct>=80).length;
  const dif=runs.filter(r=>r.diff==='dificil' && r.pct>=75).length;
  return {
    ok: med>=2 || dif>=1,
    med: med, dif: dif
  };
}

/* ============================================================
   RECOMENDAÇÃO ADAPTATIVA (itens 58 e 59)
   ============================================================ */
function recommendedDiff(){
  const d=diffStats();
  if(d.facil.n<8) return 'facil';
  if(d.facil.acc>=90 && d.medio.n<8) return 'medio';
  if(d.medio.acc>=85 && d.medio.n>=8) return 'dificil';
  if(d.medio.n>=8 && d.medio.acc<70) return 'medio';
  if(d.dificil.n>0 && d.dificil.acc<60) return 'medio';
  if(d.medio.acc>=70) return 'dificil';
  return 'medio';
}
function weakestTopics(k){
  const t=topicStats().sort((a,b)=>a.acc-b.acc);
  return t.slice(0,k||2);
}
function recommendation(){
  const diff=recommendedDiff();
  const weak=weakestTopics(2);
  const geral=accuracy();
  let subject=null, topics=[], motivo='';

  if(weak.length && geral!==null && weak[0].acc < geral){
    subject=weak[0].s;
    topics=weak.filter(w=>w.s===subject).map(w=>w.t).slice(0,2);
    motivo='Seu aproveitamento em '+topics.join(' e ')+' está abaixo da sua média geral ('+geral+'%).';
  }else{
    const accH=accuracy('História'), accE=accuracy('Inglês');
    subject = (accH===null) ? 'História' : (accE===null) ? 'Inglês' : (accH<=accE?'História':'Inglês');
    motivo = geral===null
      ? 'Primeiro diagnóstico: ainda não há histórico suficiente para escolher um conteúdo específico.'
      : 'Nenhum conteúdo está muito abaixo da média. O treino segue reforçando '+subject+'.';
  }
  const n = diff==='dificil' ? 10 : 12;
  return {diff:diff, subject:subject, topics:topics, motivo:motivo, n:n};
}

/* ============================================================
   MISSÕES (item 61)
   ============================================================ */
function ensureEvoMission(){
  const e=S.st.evo;
  if(e && !e.done) return e;
  const w=weakestTopics(1)[0];
  if(!w || w.acc>=85) { S.st.evo=null; return null; }
  if(!e || e.done){
    S.st.evo={topic:w.t, subject:w.s, from:w.acc, goal:Math.min(95,w.acc+15), done:false};
  }
  return S.st.evo;
}
function missions(){
  const st=S.st, out=[];
  out.push({
    id:'daily', ico:'◈', nome:'Missão diária',
    desc:'Responder 10 questões hoje',
    cur:Math.min(st.daily.answered,10), max:10, xp:80
  });
  out.push({
    id:'weekly', ico:'◆', nome:'Missão semanal',
    desc:'Finalizar 3 simulados nesta semana',
    cur:Math.min(st.weekly.runs,3), max:3, xp:250
  });
  const evo=ensureEvoMission();
  if(evo){
    const now=(topicStats().find(t=>t.t===evo.topic)||{acc:evo.from}).acc;
    out.push({
      id:'evo', ico:'▲', nome:'Missão de evolução',
      desc:'Subir '+evo.topic+' de '+evo.from+'% para '+evo.goal+'%',
      cur:Math.max(0,Math.min(now-evo.from, evo.goal-evo.from)),
      max:evo.goal-evo.from, xp:300, suffix:' pp'
    });
  }
  const bestHard=Math.max(0,...st.runs.filter(r=>r.diff==='dificil').map(r=>r.pct),0);
  out.push({
    id:'boss', ico:'✖', nome:'Missão Boss',
    desc:'Atingir 80% em um simulado Difícil',
    cur:Math.min(bestHard,80), max:80, xp:400, suffix:'%'
  });
  return out;
}
function checkMissions(){
  const done=[];
  missions().forEach(m=>{
    if(m.cur>=m.max){
      const stamp = m.id==='daily' ? 'daily:'+S.st.daily.d
                  : m.id==='weekly' ? 'weekly:'+S.st.weekly.w
                  : m.id==='evo' ? 'evo:'+(S.st.evo?S.st.evo.topic+S.st.evo.goal:'')
                  : 'boss:'+m.max;
      if(!S.st.missionsDone.includes(stamp)){
        S.st.missionsDone.push(stamp);
        addXp(m.xp);
        if(m.id==='evo' && S.st.evo) S.st.evo.done=true;
        done.push(m);
      }
    }
  });
  return done;
}

/* ============================================================
   CONQUISTAS (item 62)
   ============================================================ */
const ACHS=[
  {id:'first100', ico:'◉', nome:'Placar perfeito',   desc:'100% em um simulado'},
  {id:'combo10',  ico:'⟢', nome:'Sequência 10',      desc:'10 acertos seguidos'},
  {id:'hard80',   ico:'▲', nome:'Difícil dominado',  desc:'80% no nível Difícil'},
  {id:'fix20',    ico:'⟲', nome:'Reparador',         desc:'20 erros corrigidos'},
  {id:'days7',    ico:'☰', nome:'Sete dias',         desc:'7 dias seguidos de estudo'},
  {id:'school9',  ico:'★', nome:'Nota 9',            desc:'Nota escolar acima de 9'},
  {id:'jump20',   ico:'↗', nome:'Salto de 20',       desc:'+20 pp em uma matéria'},
  {id:'bossKill', ico:'✖', nome:'Boss derrotado',    desc:'Vencer o Boss Battle'},
  {id:'lvl5',     ico:'◆', nome:'Avançado',          desc:'Alcançar o nível 5'},
  {id:'master25', ico:'✦', nome:'Domínio real',      desc:'25 questões dominadas'}
];
function grant(id){
  if(S.st.ach.includes(id)) return null;
  S.st.ach.push(id);
  return ACHS.find(a=>a.id===id);
}
function checkAchievements(){
  const got=[];
  const push=a=>{ if(a) got.push(a); };
  if(S.st.runs.some(r=>r.pct===100)) push(grant('first100'));
  if(S.st.comboBest>=10) push(grant('combo10'));
  if((accuracy(null,'dificil')||0)>=80 && diffStats().dificil.n>=10) push(grant('hard80'));
  if(countCorrigidos()>=20) push(grant('fix20'));
  if(S.st.streak.best>=7) push(grant('days7'));
  if(S.st.school.some(g=>g.score/g.max*10>9)) push(grant('school9'));
  if(S.st.boss.defeated) push(grant('bossKill'));
  if(playerLevel().lvl>=5) push(grant('lvl5'));
  if(countDominados()>=25) push(grant('master25'));
  SUBJECTS.forEach(s=>{
    const r=S.st.runs.filter(x=>x.subject===s);
    if(r.length>=4){
      const first=r.slice(0,2).reduce((a,b)=>a+b.pct,0)/2;
      const last=r.slice(-2).reduce((a,b)=>a+b.pct,0)/2;
      if(last-first>=20) push(grant('jump20'));
    }
  });
  return got;
}
