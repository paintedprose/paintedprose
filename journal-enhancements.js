// Journal: tag filter + pagination
document.addEventListener('DOMContentLoaded', ()=>{
  const entries = Array.from(document.querySelectorAll('.entries .entry'));
  if(entries.length===0) return;
  const tags = new Set();
  entries.forEach(e=> (e.getAttribute('data-tags')||'').split(',').map(s=>s.trim()).filter(Boolean).forEach(t=>tags.add(t)));
  const header = document.querySelector('.page-header');
  const bar = document.createElement('div'); bar.className='filter-bar';
  const mk = n=>{const b=document.createElement('button'); b.className='chip'; b.textContent=n; b.dataset.tag=n; return b;};
  const all = mk('All'); all.classList.add('active'); bar.appendChild(all); Array.from(tags).sort().forEach(t=>bar.appendChild(mk(t)));
  header.insertAdjacentElement('afterend', bar);
  let active='All', page=0, SIZE=6;
  const pager=document.createElement('div'); pager.className='pager';
  const prev=document.createElement('button'); prev.textContent='← Newer';
  const next=document.createElement('button'); next.textContent='Older →';
  pager.append(prev,next); const wrap=document.querySelector('.entries'); wrap.insertAdjacentElement('afterend', pager);
  const filtered=()=>entries.filter(e=> active==='All' ? true : (e.getAttribute('data-tags')||'').split(',').map(s=>s.trim()).includes(active));
  const render=()=>{ const list=filtered(); const pages=Math.max(1, Math.ceil(list.length/SIZE)); page=Math.min(page,pages-1);
    entries.forEach(e=> e.style.display='none'); list.slice(page*SIZE,page*SIZE+SIZE).forEach(e=> e.style.display='grid');
    prev.disabled=page<=0; next.disabled=page>=pages-1; };
  bar.addEventListener('click',e=>{const b=e.target.closest('.chip'); if(!b) return; bar.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); b.classList.add('active'); active=b.dataset.tag; page=0; render();});
  prev.addEventListener('click',()=>{ if(page>0){page--; render();} });
  next.addEventListener('click',()=>{ page++; render(); });
  render();
});
