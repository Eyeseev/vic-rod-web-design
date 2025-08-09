// Mobile nav toggle + focus trap and iOS scroll lock
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
function trapFocus(container) {
  const focusables = container.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  function onKey(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  container.addEventListener('keydown', onKey);
  return () => container.removeEventListener('keydown', onKey);
}

let releaseTrap = null;
let scrollY = 0;
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    
    if (isOpen) {
      // iOS scroll lock
      scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
      
      releaseTrap = trapFocus(siteNav);
      const firstLink = siteNav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      // Restore scroll position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
      
      if (releaseTrap) releaseTrap();
      navToggle.focus();
    }
  });
}

// Stick chosen plan into the contact form when CTA buttons are clicked
const planField = document.getElementById('selectedPlan');
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!(target instanceof HTMLElement)) return;
  const planBtn = target.closest('a.btn[data-plan]');
  if (planBtn && planField) {
    const plan = planBtn.getAttribute('data-plan') || '';
    planField.value = plan;
  }
});

// Form submission with better UX and status messages
const form = document.getElementById('contactForm');
if (form) {
  const btn = form.querySelector('button[type="submit"]');
  const notice = document.getElementById('formNotice');
  let pending = false;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!btn || !notice || pending) return;
    
    pending = true;
    btn.disabled = true;
    notice.textContent = 'Sending…';
    
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });
      
      if (res.ok) {
        notice.textContent = 'Thanks — I'll reply within one business day.';
        form.reset();
        // Reset the selected plan
        const planField = document.getElementById('selectedPlan');
        if (planField) planField.value = '';
      } else {
        notice.textContent = 'Hmm, that failed. Email hello@vicrodweb.design and I'll jump on it.';
      }
    } catch (err) {
      notice.textContent = 'Network issue. Try again or email hello@vicrodweb.design.';
    } finally {
      pending = false;
      btn.disabled = false;
    }
  });
}

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());


