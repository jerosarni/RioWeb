/* ═══════════════════════════════════════════
   RIO CLUB — main.js
   Language toggle · Navbar · Video modal · Animations
   ═══════════════════════════════════════════ */

/* ── Translations ── */
const translations = {
  en: {
    nav: {
      about:     'About',
      campaigns: 'Campaigns',
      gamePlan:  'Game Plan',
      members:   'Members',
    },
    hero: {
      tagline: '',
    },
    about: {
      text: 'We are a club. We connect brands with the emotion and impact of football through memorable real-time campaigns, events, and strategies. With a global perspective based in Miami and Argentina\'s top creative football talent, we deliver authentic and powerful work.',
    },
    campaigns: {
      title: 'Campaigns',
      items: [
        'AFA – Farewell to Pope Francis',
        'Banco Macro – Institutional Campaign',
        'DirecTV – Copa América',
        'River Plate',
        'CONMEBOL – The First Ones',
        'Qatar – WC 2022',
      ],
    },
    gamePlan: {
      title:    'Game Plan',
      subtitle: 'We know the strategies to play every match, on and off the field.',
      items: [
        { title: 'Integrated Campaigns',          desc: 'We build strong communication platforms that bring to life scalable campaigns with real power to connect.' },
        { title: 'Sports Sponsorship Strategy',   desc: 'We connect brands with clubs, leagues, and events to create meaningful partnerships.' },
        { title: 'Club Internationalization',     desc: 'We design expansion strategies in the U.S. for globally recognized sports institutions.' },
        { title: 'Event Activations',             desc: 'We create unforgettable experiences at major events like the Copa América, Champions League, and more.' },
        { title: 'Real-Time Creativity',          desc: 'We specialize in real-time campaigns, reacting to trends with viral videos that capture attention at the perfect moment.' },
      ],
    },
    members: {
      title:    'Members',
      subtitle: 'We work with companies, clubs, and organizations that understand the value of connecting with sports in an authentic, creative, and strategic way.',
      globalBrands:  'Global Brands',
      footballClubs: 'Football Clubs',
      federations:   'Federations',
      sportsMedia:   'Sports Media',
      others:        'Others',
    },
  },

  es: {
    nav: {
      about:     'Nosotros',
      campaigns: 'Campañas',
      gamePlan:  'Estrategia',
      members:   'Miembros',
    },
    hero: {
      tagline: '',
    },
    about: {
      text: 'Somos un club. Conectamos marcas con la emoción e impacto del fútbol a través de campañas memorables en tiempo real, eventos y estrategias. Con una perspectiva global desde Miami y el mejor talento creativo del fútbol argentino, entregamos trabajo auténtico y poderoso.',
    },
    campaigns: {
      title: 'Campañas',
      items: [
        'AFA – Despedida al Papa Francisco',
        'Banco Macro – Campaña Institucional',
        'DirecTV – Copa América',
        'River Plate',
        'CONMEBOL – Los Primeros',
        'Qatar – Mundial 2022',
      ],
    },
    gamePlan: {
      title:    'Estrategia',
      subtitle: 'Conocemos las jugadas para ganar cada partido, dentro y fuera de la cancha.',
      items: [
        { title: 'Campañas Integradas',                desc: 'Construimos plataformas de comunicación sólidas que dan vida a campañas escalables con verdadero poder de conexión.' },
        { title: 'Estrategia de Patrocinio Deportivo', desc: 'Conectamos marcas con clubes, ligas y eventos para crear alianzas con propósito.' },
        { title: 'Internacionalización de Clubes',     desc: 'Diseñamos estrategias de expansión en EE.UU. para instituciones deportivas reconocidas a nivel mundial.' },
        { title: 'Activaciones en Eventos',            desc: 'Creamos experiencias únicas en grandes eventos como la Copa América, la Champions League y más.' },
        { title: 'Creatividad en Tiempo Real',         desc: 'Nos especializamos en campañas en tiempo real, reaccionando a tendencias con videos virales que capturan la atención en el momento exacto.' },
      ],
    },
    members: {
      title:    'Miembros',
      subtitle: 'Trabajamos con empresas, clubes y organizaciones que entienden el valor de conectarse con el deporte de forma auténtica, creativa y estratégica.',
      globalBrands:  'Marcas Globales',
      footballClubs: 'Clubes de Fútbol',
      federations:   'Federaciones',
      sportsMedia:   'Medios Deportivos',
      others:        'Otros',
    },
  },
};

/* ── Campaign data (language-independent) ── */
const campaignsData = [
  { key: 0, img: 'images/papa.png',     video: 'https://www.youtube.com/embed/lgD8KfOd-mw' },
  { key: 1, img: 'images/scaloni.png',  video: 'https://www.youtube.com/embed/JvOX5a_GM0g' },
  { key: 2, img: 'images/direct.png',   video: 'https://www.youtube.com/embed/PjGfHIUuOvA' },
  { key: 3, img: 'images/river.png',    video: 'images/videoriver.MOV' },
  { key: 4, img: 'images/conmebol.png', video: 'https://www.youtube.com/embed/mYS435vg55g' },
  { key: 5, img: 'images/qatar.png',    video: 'https://www.youtube.com/embed/FA1sR2SZAlY' },
];

/* ── Members data ── */
const membersData = [
  {
    groupKey: 'globalBrands',
    logos: [
      { src: 'images/2.png',        alt: 'DIRECTV',    style: 'height:60px;max-width:150px' },
      { src: 'images/3.png',        alt: 'Zacharial' },
      { src: 'images/4.png',        alt: 'Macro' },
      { src: 'images/5.png',        alt: 'Heineken' },
      { src: 'images/logococa.png', alt: 'Coca-Cola' },
    ],
  },
  {
    groupKey: 'footballClubs',
    logos: [
      { src: 'images/10.png', alt: 'River Plate', style: 'height:72px;max-width:200px' },
      { src: 'images/11.png', alt: 'CABU',        style: 'height:72px;max-width:200px' },
    ],
  },
  {
    groupKey: 'federations',
    logos: [
      { src: 'images/7.png', alt: 'CONMEBOL', style: 'height:72px;max-width:200px' },
      { src: 'images/8.png', alt: 'AFA',      style: 'height:72px;max-width:200px' },
    ],
  },
  {
    groupKey: 'sportsMedia',
    logos: [
      { src: 'images/13.png', alt: 'ESPN' },
      { src: 'images/14.png', alt: 'KRU' },
    ],
  },
  {
    groupKey: 'others',
    logos: [
      { src: 'images/16.png', alt: 'Qatar',    style: 'height:80px;max-width:200px' },
      { src: 'images/17.png', alt: 'Jujuy' },
      { src: 'images/18.png', alt: 'Paraguay' },
    ],
  },
];

/* ════════════════════════════════════════
   STATE
════════════════════════════════════════ */
let currentLang = localStorage.getItem('rioLang') || 'en';

/* ── Utility: nested key lookup "a.b.c" ── */
function t(key) {
  const parts = key.split('.');
  let val = translations[currentLang];
  for (const p of parts) {
    if (val == null) return key;
    val = val[p];
  }
  return val ?? key;
}

/* ════════════════════════════════════════
   RENDER — i18n text nodes
════════════════════════════════════════ */
function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });
}

/* ════════════════════════════════════════
   RENDER — Campaign cards
════════════════════════════════════════ */
function renderCampaigns() {
  const grid = document.getElementById('campaignsGrid');
  if (!grid) return;
  const titles = t('campaigns.items'); // array

  grid.innerHTML = campaignsData.map((c, i) => `
    <div class="campaign-card reveal" data-video="${c.video}" tabindex="0" role="button" aria-label="${titles[i]}">
      <img src="${c.img}" alt="${titles[i]}" loading="lazy">
      <div class="campaign-card-overlay">
        <div class="campaign-play" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <p class="campaign-title">${titles[i]}</p>
      </div>
    </div>
  `).join('');

  // Re-bind card click events
  grid.querySelectorAll('.campaign-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.video));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(card.dataset.video);
    });
  });

  // Re-observe new cards
  observeReveal();
}

/* ════════════════════════════════════════
   RENDER — Game Plan list
════════════════════════════════════════ */
function renderGamePlan() {
  const list = document.getElementById('gamePlanList');
  if (!list) return;
  const items = t('gamePlan.items');

  list.innerHTML = items.map((item, i) => `
    <li class="game-plan-item reveal">
      <span class="gp-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="gp-body">
        <p class="gp-title">${item.title}</p>
        <p class="gp-desc">${item.desc}</p>
      </div>
    </li>
  `).join('');

  observeReveal();
}

/* ════════════════════════════════════════
   RENDER — Members grid
════════════════════════════════════════ */
function renderMembers() {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;

  // Split into 2 columns: left = globalBrands + footballClubs, right = federations + sportsMedia + others
  const leftGroups  = ['globalBrands', 'footballClubs'];
  const rightGroups = ['federations', 'sportsMedia', 'others'];

  function buildCol(keys) {
    return keys.map(key => {
      const group = membersData.find(g => g.groupKey === key);
      if (!group) return '';
      const logos = group.logos.map(l =>
        `<img src="${l.src}" alt="${l.alt}" ${l.style ? `style="${l.style}"` : ''}>`
      ).join('');
      return `
        <div class="members-group reveal">
          <span class="members-group-title">${t('members.' + key)}</span>
          <div class="members-logos">${logos}</div>
        </div>`;
    }).join('');
  }

  grid.innerHTML = `
    <div class="members-col">${buildCol(leftGroups)}</div>
    <div class="members-divider-line"></div>
    <div class="members-col">${buildCol(rightGroups)}</div>
  `;

  observeReveal();
}

/* ════════════════════════════════════════
   RENDER — Full page
════════════════════════════════════════ */
function render() {
  applyTranslations();
  renderCampaigns();
  renderGamePlan();
  renderMembers();
  updateLangButtons();
}

/* ════════════════════════════════════════
   LANGUAGE TOGGLE
════════════════════════════════════════ */
function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('rioLang', lang);
  render();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ════════════════════════════════════════
   NAVBAR — scroll solidify + hamburger
════════════════════════════════════════ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

/* ════════════════════════════════════════
   VIDEO MODAL
════════════════════════════════════════ */
const modal       = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const modalVideo  = document.getElementById('modalVideo');
const modalVidSrc = document.getElementById('modalVideoSrc');

function isLocalVideo(url) {
  return /\.(mp4|mov|webm|ogg)$/i.test(url);
}

function openModal(videoUrl) {
  if (isLocalVideo(videoUrl)) {
    modalIframe.style.display = 'none';
    modalIframe.src = '';
    modalVidSrc.src = videoUrl;
    modalVideo.load();
    modalVideo.style.display = 'block';
  } else {
    modalVideo.pause();
    modalVideo.style.display = 'none';
    modalVidSrc.src = '';
    modalIframe.src = videoUrl + '?autoplay=1';
    modalIframe.style.display = 'block';
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modalIframe.src = '';
  modalVideo.pause();
  modalVidSrc.src = '';
  modalIframe.style.display = 'none';
  modalVideo.style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* ════════════════════════════════════════
   SCROLL REVEAL  (IntersectionObserver)
════════════════════════════════════════ */
let revealObserver;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ════════════════════════════════════════
   SMOOTH SCROLL for anchor links
════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
document.getElementById('year').textContent = new Date().getFullYear();

// Mark sections for scroll-reveal
document.querySelectorAll('.about-inner, .about-logo, .about-text').forEach(el => {
  el.classList.add('reveal');
});

render();
observeReveal();
