(()=>{
  const apply = (on)=>{
    document.body.classList.toggle('parchment', !!on);
    try{ localStorage.setItem('pp_parchment',''+(on?1:0)); }catch(e){}
    const b=document.querySelector('.paper-toggle'); if(b){ b.textContent = on ? 'Paper: On' : 'Paper: Off'; }
  };
  document.addEventListener('DOMContentLoaded', ()=>{
    const saved = (typeof localStorage!=='undefined' && localStorage.getItem('pp_parchment')==='1');
    let btn = document.querySelector('.paper-toggle');
    if(!btn){
      const nav = document.querySelector('.nav');
      if(nav){ btn = document.createElement('button'); btn.className='paper-toggle'; nav.appendChild(btn); }
    }
    apply(saved);
    if(btn){ btn.addEventListener('click', ()=> apply(!document.body.classList.contains('parchment')) ); }
  });
})();
