(()=>{
  const make=(t,c)=>{const e=document.createElement(t); if(c) e.className=c; return e;};
  const b=make('div','lb-backdrop'); const i=make('img','lb-img'); const cap=make('div','lb-caption'); b.append(i); b.append(cap);
  document.addEventListener('click',(e)=>{
    const a=e.target.closest('a[data-lightbox]'); if(!a) return;
    e.preventDefault(); i.src=a.getAttribute('href'); cap.textContent=a.getAttribute('data-caption')||'';
    document.body.appendChild(b); b.classList.add('open'); document.body.classList.add('noscroll');
  });
  b.addEventListener('click',()=>{b.classList.remove('open'); document.body.classList.remove('noscroll'); setTimeout(()=>{ if(b.parentNode) b.parentNode.removeChild(b); },150);});
})();