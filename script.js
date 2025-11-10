document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
});
