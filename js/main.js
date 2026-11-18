(()=>{const C=SITE,d=document,q=s=>d.querySelector(s),qa=s=>[...d.querySelectorAll(s)];
const I={mega:'<path d="m3 11 18-5v12L3 14z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',net:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>',mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',cart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h2l2.7 12.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L22 7H5"/>',
truck:'<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.7a1 1 0 0 0-.2-.6l-3.5-4.4A1 1 0 0 0 17.5 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
grad:'<path d="M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z"/><path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
code:'<path class="c1" d="m16 18 6-6-6-6"/><path class="c2" d="M8 6l-6 6 6 6"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',wa:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',check:'<path d="M20 6 9 17l-5-5"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
box:'<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7zM3.3 7 12 12l8.7-5M12 22V12"/>',
rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',trend:'<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/>',
moon:'<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]||''}</svg>`;
const R=d.documentElement.style;R.setProperty('--n',C.colors.navy);R.setProperty('--g',C.colors.gold);
const P=[["index.html","Accueil"],["services.html","Services"],["about.html","À propos"],["contact.html","Contact"]],cur=location.pathname.split('/').pop()||'index.html';
q('#hd').innerHTML=`<div class="hb"><a class="brand" href="index.html"><span class="lg"><img src="${C.logo}" alt="Logo ${C.name}"></span><b>${C.name}</b></a><nav id="nv">${P.map(p=>`<a href="${p[0]}"${p[0]==cur?' class="on"':''}>${p[1]}</a>`).join('')}</nav><button id="theme-toggle" type="button" aria-pressed="false"></button><button id="bg" aria-label="Menu">${ic('menu')}</button></div>`;
const themeButton=q('#theme-toggle'),applyTheme=theme=>{d.documentElement.dataset.theme=theme;R.setProperty('--n',theme==='dark'?'#9bbcff':C.colors.navy);R.setProperty('--n2',theme==='dark'?'#719cff':'#2a63c4');R.setProperty('--g',theme==='dark'?'#e9a548':C.colors.gold);R.setProperty('--g2',theme==='dark'?'#ffd08c':'#f2b861');themeButton.setAttribute('aria-pressed',String(theme==='dark'));themeButton.setAttribute('aria-label',theme==='dark'?'Passer au thème clair':'Passer au thème sombre');themeButton.innerHTML=`${ic(theme==='dark'?'sun':'moon')}<span>${theme==='dark'?'Clair':'Sombre'}</span>`};
applyTheme(d.documentElement.dataset.theme==='dark'?'dark':'light');
themeButton.onclick=()=>{const theme=d.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme(theme);try{localStorage.setItem('sawa-theme',theme)}catch(error){console.warn('Unable to save the theme preference.',error)}};
q('#ft').innerHTML=`<div class="wrap"><div class="fg"><div><b>${C.name}</b><p>${C.tag}. Des solutions intégrées pour développer votre activité.</p></div><div><b>Navigation</b>${P.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}</div><div><b>Contact</b><a href="mailto:${C.email}">${C.email}</a>${C.phones.map(t=>`<a href="tel:${t.replace(/\s/g,'')}">${t}</a>`).join('')}<p>${C.city}</p></div></div><div class="cp">© ${new Date().getFullYear()} ${C.name}. Tous droits réservés.</div></div>`;
const menu=q('#bg'),nav=q('#nv'),setMenu=open=>{nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');menu.innerHTML=ic(open?'x':'menu')};
menu.setAttribute('aria-controls','nv');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Ouvrir le menu');menu.onclick=()=>setMenu(!nav.classList.contains('open'));
nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
d.addEventListener('click',e=>{const hb=q('.hb');if(!e.composedPath().includes(hb))setMenu(false)});
d.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);menu.focus()}});
addEventListener('resize',()=>{if(innerWidth>900)setMenu(false)});
qa('[data-i]').forEach(e=>e.outerHTML=ic(e.dataset.i));
const imageObserver='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const e=x.target,s=C.images[e.dataset.img];if(s)e.style.backgroundImage=`url("${s}")`;imageObserver.unobserve(e)}}),{rootMargin:'160px'}):null;
qa('[data-img]').forEach(e=>{const s=C.images[e.dataset.img];if(!s)return;if(!imageObserver||e.closest('.hero'))e.style.backgroundImage=`url("${s}")`;else imageObserver.observe(e)});
qa('img').forEach(img=>{if(!img.closest('#pl')&&!img.closest('#hd')){img.loading='lazy';img.decoding='async'}});
qa('[data-lg]').forEach(e=>e.innerHTML=`<img src="${C.logo}" alt="">`);
qa('[data-stats]').forEach(e=>e.innerHTML=C.stats.map(s=>`<div class="st rv" style="--d:${C.stats.indexOf(s)*.08}s"><i class="gh">${ic(["users","cart","truck","grad","check"][C.stats.indexOf(s)])}</i><i class="si">${ic(["users","cart","truck","grad","check"][C.stats.indexOf(s)])}</i><b data-n="${s[0]}" data-p="${s[1]}" data-s="${s[2]}">${s[1]}${s[0]}${s[2]}</b><span>${s[3]}</span><i class="bar"></i></div>`).join(''));
qa('.mq div').forEach(m=>{m.innerHTML=m.innerHTML+m.innerHTML});
const run=e=>{const n=+e.dataset.n,t0=performance.now(),f=t=>{const k=Math.min((t-t0)/1500,1),v=n*(1-Math.pow(1-k,3));e.textContent=e.dataset.p+(n%1?v.toFixed(1).replace('.',','):Math.round(v))+e.dataset.s;k<1&&requestAnimationFrame(f)};requestAnimationFrame(f)};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');x.target.querySelectorAll('[data-n]').forEach(run);io.unobserve(x.target)}}),{threshold:.15});
const go=()=>{qa('.rv').forEach(e=>io.observe(e));qa('[data-n]').forEach(e=>{if(!e.closest('.rv'))io.observe(e)})};
/* effects */
const onS=()=>d.body.classList.toggle('sd',scrollY>20);addEventListener('scroll',onS,{passive:true});onS();
if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
const px=qa('.px');addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;px.forEach(el=>el.style.translate=`${-x*el.dataset.d}px ${-y*el.dataset.d}px`)});
qa('.tl').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.setProperty('--rx',(.5-y)*7+'deg');c.style.setProperty('--ry',(x-.5)*7+'deg')});c.addEventListener('mouseleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
}
qa('.pr').forEach(p=>{const L=p.querySelector('.ln'),S=qa('.ps');const f=()=>{const r=p.getBoundingClientRect(),m=innerHeight*.6;L.style.setProperty('--p',Math.min(1,Math.max(0,(m-r.top)/r.height)));[...p.querySelectorAll('.ps')].forEach(s=>s.classList.toggle('on',s.getBoundingClientRect().top<m))};addEventListener('scroll',f,{passive:true});f()});
const w1=q('#ctw');if(w1){w1.href=`https://wa.me/${C.wa}`;q('#ctp').href='tel:'+C.phones[0].replace(/\s/g,'');q('#cte').textContent=C.email;q('#ctm').href='mailto:'+C.email}
const mapLink=q('#map-link'),mapFrame=q('#map-frame');if(mapLink&&mapFrame){mapLink.href=C.location.url;mapFrame.src=`https://www.google.com/maps?q=${C.location.latitude},${C.location.longitude}&output=embed`}
const businessHours=q('#business-hours');if(businessHours){const weekdays=C.hours.filter(([day])=>day!=='Saturday'),saturday=C.hours.find(([day])=>day==='Saturday'),range=hours=>`${parseInt(hours[0][1].slice(0,2),10)} h–${parseInt(hours[0][2].slice(0,2),10)} h`;businessHours.textContent=`Lun–ven : ${range(weekdays)}\nSam : ${range([saturday])}\nDim : fermé`}
const ci=q('#ci');if(ci)ci.innerHTML=`<li>${ic('phone')}<div><b>Téléphone</b>${C.phones.join(' / ')}</div></li><li>${ic('mail')}<div><b>Email</b>${C.email}</div></li><li>${ic('pin')}<div><b>Adresse</b>${C.city}</div></li>`;
const cw=q('#cw');if(cw){
const serviceSummary=()=>[...cw.querySelectorAll('[name="services"]:checked')].map(x=>x.value).join(', ')||'À préciser';
const messageFor=()=>{const f=new FormData(cw);return `Bonjour ${C.name}, je suis ${f.get('n')} (${f.get('t')}). Services : ${serviceSummary()}. ${f.get('m')||''}`};
cw.onsubmit=e=>{e.preventDefault();open(`https://wa.me/${C.wa}?text=${encodeURIComponent(messageFor())}`,'_blank','noopener')};
const mail=q('#email-fallback');if(mail)mail.onclick=()=>{if(!cw.reportValidity())return;location.href=`mailto:${C.email}?subject=${encodeURIComponent('Demande de renseignement - '+C.name)}&body=${encodeURIComponent(messageFor())}`}
const params=new URLSearchParams(location.search),requested=params.get('service');if(requested)qa('[name="services"]').forEach(x=>{x.checked=x.value===requested});
}
qa('[data-copy]').forEach(b=>b.onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(b.dataset.copy);const e=b.querySelector('em');e.textContent='Copié !';setTimeout(()=>e.textContent='Copier',1500)});
qa('.evo').forEach(v=>{const R=v.querySelector('.rail'),E=[...v.querySelectorAll('.ev')];const f=()=>{const r=v.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.75-r.top)/(r.height+innerHeight*.2)));R.style.setProperty('--p',p);E.forEach((e,i)=>e.classList.toggle('on',p>=i/E.length+.06))};addEventListener('scroll',f,{passive:true});f()});
const bar=d.createElement('div');bar.className='spb';d.body.appendChild(bar);addEventListener('scroll',()=>bar.style.setProperty('--sp',scrollY/(d.documentElement.scrollHeight-innerHeight)),{passive:true});
if(cur!='contact.html'){const w=d.createElement('a');w.className='wab';w.href=`https://wa.me/${C.wa}`;w.target='_blank';w.setAttribute('aria-label','WhatsApp');w.innerHTML=ic('wa');d.body.appendChild(w)}
qa('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.18}px ${(e.clientY-r.top-r.height/2)*.28}px`});b.addEventListener('mouseleave',()=>b.style.translate='')});
/* preloader + page transitions */
const pl=q('#pl');let first=true;try{first=!sessionStorage.getItem('v');sessionStorage.setItem('v',1)}catch(e){}
const t=first?2300:1000;setTimeout(()=>pl.classList.add('out'),t);setTimeout(go,t-250);addEventListener('pageshow',e=>e.persisted&&(pl.classList.add('out'),go()));
d.addEventListener('click',e=>{const a=e.target.closest('a'),h=a&&a.getAttribute('href');if(!h||a.target||e.ctrlKey||e.metaKey||!/^[\w-]+\.html/.test(h)||h.split('#')[0]==cur&&h.includes('#'))return;e.preventDefault();pl.classList.remove('out');setTimeout(()=>location.href=h,800)});
})();
