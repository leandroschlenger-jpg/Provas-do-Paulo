/* ============================================================
   APP — navegação, topbar, toast, boot
   ============================================================ */

const TABS=[
  {id:'home',    ico:'◉', nome:'Início',   fn:viewHome},
  {id:'treinar', ico:'◆', nome:'Treinar',  fn:viewTrain},
  {id:'caderno', ico:'⟲', nome:'Erros',    fn:viewCaderno},
  {id:'escola',  ico:'★', nome:'Escola',   fn:viewSchool},
  {id:'perf',    ico:'▲', nome:'Como estou', fn:viewPerf},
  {id:'missoes', ico:'☰', nome:'Missões',  fn:viewMissions}
];
let route='home';

function renderTabs(){
  const pend=cadernoIds().length;
  const ms=missions().filter(m=>m.cur>=m.max).length;
  let h='';
  TABS.forEach(t=>{
    const dot = (t.id==='caderno' && pend) || (t.id==='missoes' && ms);
    h+='<button class="tab'+(route===t.id?' on':'')+'" onclick="go(\''+t.id+'\')">'
     + (dot?'<span class="dot"></span>':'')
     + '<i>'+t.ico+'</i><span>'+t.nome+'</span></button>';
  });
  document.getElementById('tabbar').innerHTML=h;
}

function go(id){
  if(Q.run){
    if(!confirm('Você está no meio de um simulado. Sair agora não computa o placar final. Continuar?')) return;
    Q.run=null;
  }
  const t=TABS.find(x=>x.id===id) || TABS[0];
  route=t.id;
  S.rollDates();
  t.fn();
  renderTabs();
  updateTopbar();
  window.scrollTo(0,0);
  try{ history.replaceState(null,'','#'+route); }catch(e){}
}

function updateTopbar(){
  const pl=playerLevel(), xp=xpProgress();
  document.getElementById('tb-level').textContent=pl.lvl;
  document.getElementById('tb-rank').textContent=levelInfo(pl.lvl).nome;
  document.getElementById('tb-xp-fill').style.width=Math.min(100,xp.pct)+'%';
  document.getElementById('tb-xp-txt').textContent =
    xp.max ? S.st.xp.toLocaleString('pt-BR')+' XP'
           : S.st.xp.toLocaleString('pt-BR')+' / '+xp.next.toLocaleString('pt-BR')+' XP';
}

let toastT=null;
function toast(msg, cls){
  const el=document.getElementById('toast');
  el.className='toast show'+(cls?' '+cls:'');
  el.textContent=msg;
  clearTimeout(toastT);
  toastT=setTimeout(()=>{ el.className='toast'+(cls?' '+cls:''); }, 2600);
}

/* ---------- boot ---------- */
(function boot(){
  S.load();
  checkAchievements();
  S.save();
  const h=(location.hash||'').replace('#','');
  route = TABS.some(t=>t.id===h) ? h : 'home';
  const t=TABS.find(x=>x.id===route);
  t.fn(); renderTabs(); updateTopbar();
})();
