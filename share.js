(()=>{
  function byId(id){ return document.getElementById(id); }
  function qs(s){ return document.querySelector(s); }
  function buildShare(url, title){
    const t = encodeURIComponent(title), u = encodeURIComponent(url);
    return {
      twitter: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      bluesky: `https://bsky.app/intent/compose?text=${t}%20${u}`,
      tumblr: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${u}&title=${t}`
    };
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    const el = document.querySelector('.share'); if(!el) return;
    const url = el.dataset.url || location.href;
    const title = el.dataset.title || document.title.replace(/ — painted prose$/, '');
    const links = buildShare(url, title);
    const t = el.querySelector('[data-share=twitter]'); if(t) t.href = links.twitter;
    const b = el.querySelector('[data-share=bluesky]'); if(b) b.href = links.bluesky;
    const tm = el.querySelector('[data-share=tumblr]'); if(tm) tm.href = links.tumblr;
    const c = el.querySelector('[data-share=copy]'); if(c){
      c.addEventListener('click', (e)=>{
        e.preventDefault();
        navigator.clipboard.writeText(url).then(()=>{
          c.textContent = 'Link copied'; c.classList.add('copied');
          setTimeout(()=>{ c.textContent='Copy link'; c.classList.remove('copied'); }, 1200);
        });
      });
    }
  });
})();