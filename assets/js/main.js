// Small JS: mobile nav, current year, and event rendering
(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }
  // year
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  // Render events from data-attribute
  const holder = document.getElementById('event-cards');
  if(holder){
    try{
      const data = JSON.parse(holder.getAttribute('data-events') || '[]');
      holder.innerHTML = data.map(ev => `
        <article class="card">
          <h3>${ev.title}</h3>
          <div class="meta">${new Date(ev.date).toLocaleDateString(undefined, {year:'numeric',month:'short',day:'numeric'})} — ${ev.location}</div>
          <p>${ev.desc}</p>
          ${ev.link && ev.link !== '#' ? `<p><a href="${ev.link}" target="_blank" rel="noopener">Details</a></p>` : ''}
        </article>
      `).join('');
    }catch(e){
      console.error('Failed to parse events', e);
    }
  }
})();