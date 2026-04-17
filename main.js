/* Central Café — main.js */

// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile burger menu ────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.querySelector('.burger-open').style.display = open ? 'none' : 'block';
  burger.querySelector('.burger-close').style.display = open ? 'block' : 'none';
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.querySelector('.burger-open').style.display = 'block';
    burger.querySelector('.burger-close').style.display = 'none';
    document.body.style.overflow = '';
  });
});

// ── Menu tabs ─────────────────────────────────────────────
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.menu-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById('tab-' + target);
    if (panel) panel.classList.add('active');
  });
});

// ── Scroll-reveal ─────────────────────────────────────────
const revealElements = () => {
  const els = document.querySelectorAll(
    '.menu-card, .badge-item, .testi-card, .chef-text, ' +
    '.chef-image-wrap, .reservation-text, .reservation-form, ' +
    '.spotlight-text, .spotlight-img, .section-header, .stone-hero'
  );
  els.forEach(el => el.classList.add('reveal'));
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements();
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Reservation form ──────────────────────────────────────
const form = document.getElementById('res-form');
const success = document.getElementById('form-success');

// Set min date to today
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const required = form.querySelectorAll('[required]');
  let valid = true;
  required.forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = '#e53935';
      valid = false;
    }
  });

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  })
    .then(() => {
      form.reset();
      btn.textContent = 'Confirm Reservation';
      btn.disabled = false;
      success.classList.add('visible');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => { success.classList.remove('visible'); }, 6000);
    })
    .catch(() => {
      btn.textContent = 'Confirm Reservation';
      btn.disabled = false;
      alert('Something went wrong. Please try again or call us directly.');
    });
});

// ── Gallery lightbox (simple) ─────────────────────────────
const galItems = document.querySelectorAll('.gal-item');

galItems.forEach(item => {
  item.addEventListener('click', () => {
    const bg = item.style.backgroundImage;
    const url = bg.replace(/url\(['"]?([^'"]+)['"]?\)/, '$1');

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.9);
      z-index:9999;display:flex;align-items:center;justify-content:center;
      cursor:zoom-out;animation:fadeIn .25s ease;
    `;
    const img = document.createElement('img');
    img.src = url.replace('w=600', 'w=1200').replace('w=900', 'w=1400');
    img.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;object-fit:contain;';
    overlay.appendChild(img);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// ── Smooth anchor offset (fixed nav) ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
