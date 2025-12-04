document.addEventListener('DOMContentLoaded', ()=>{
  // hamburger menu
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  if(burger) burger.addEventListener('click', ()=>{
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // simple reveal on scroll
  const reveal = (entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(reveal,{threshold:0.15});
  document.querySelectorAll('.card, .section-title, .about-grid > div').forEach(el=>observer.observe(el));
});


/* Optional: small CSS you can paste into style.css to add .revealed animate */
/* .revealed{transform:none;opacity:1;transition:all .6s cubic-bezier(.2,.9,.2,1)}
   .card{transform:translateY(20px);opacity:0} */
