// Subtle animations (no libraries). Respects reduced motion by only running when allowed.
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Reveal on scroll
  if(!prefersReduced){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('is-in'); obs.unobserve(e.target); }
      });
    }, {threshold: 0.12});
    document.querySelectorAll('.reveal, .tile, .entry, .gallery-item').forEach(el=>{
      el.classList.add('reveal');
      obs.observe(el);
    });
  }

  // Tiny parallax for hero banner
  const hero = document.querySelector('.hero.hero-banner');
  if(hero && !prefersReduced){
    const onScroll = () => {
      const y = window.scrollY || 0;
      // move background slightly
      hero.style.backgroundPosition = `center ${Math.round(y*0.1)}px`;
    };
    hero.classList.add('parallax-in');
    window.addEventListener('scroll', onScroll, {passive:true});
  }
})();
