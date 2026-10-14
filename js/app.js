/* SpatiaEstate shared UI: icons, admin shell, modals, toasts */
(function () {
  const p = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

  const ICONS = {
    dashboard: p('<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>'),
    building: p('<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>'),
    users: p('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
    card: p('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'),
    user: p('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    settings: p('<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>'),
    logout: p('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>'),
    plus: p('<path d="M12 5v14M5 12h14"/>'),
    eye: p('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    eyeOff: p('<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61M2 2l20 20"/>'),
    mail: p('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    lock: p('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    check: p('<path d="M20 6 9 17l-5-5"/>'),
    checkCircle: p('<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'),
    xCircle: p('<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>'),
    clock: p('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    shield: p('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
    shieldPlain: p('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
    download: p('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>'),
    printer: p('<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>'),
    pencil: p('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>'),
    trash: p('<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>'),
    file: p('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/>'),
    upload: p('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>'),
    copy: p('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'),
    arrowLeft: p('<path d="M19 12H5M12 19l-7-7 7-7"/>'),
    arrowUpRight: p('<path d="M7 17 17 7M7 7h10v10"/>'),
    info: p('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'),
    compass: p('<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>'),
    chat: p('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
    send: p('<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>'),
    bookmark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    alert: p('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4M12 17h.01"/>'),
    bed: p('<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>'),
    bath: p('<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.68 3 4 3.68 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M2 12h20M7 19v2M17 19v2"/>'),
    area: p('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01"/>'),
    menu: p('<path d="M4 6h16M4 12h16M4 18h16"/>'),
  };
  window.ICONS = ICONS;
  window.icon = (n) => ICONS[n] || '';

  /* Fill any element with data-icon="name" */
  function hydrateIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach((el) => {
      if (!el.dataset.done) { el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon)); el.dataset.done = 1; }
    });
  }
  window.hydrateIcons = hydrateIcons;

  const logo = '<div class="logo-box"><img src="assets/logo.png" alt="SpatiaEstate"></div>';
  window.LOGO = logo;

  /* Admin shell */
  const NAV = [
    ['dashboard', 'Dashboard', 'dashboard.html', 'dashboard'],
    ['properties', 'Properties', 'properties.html', 'building'],
    ['leads', 'Leads', 'leads.html', 'users'],
    ['payments', 'Payments', 'payments.html', 'card'],
    ['users', 'Users', 'users.html', 'user'],
    ['settings', 'Settings', 'settings.html', 'settings'],
  ];

  function renderShell() {
    const holder = document.querySelector('[data-sidebar]');
    if (!holder) return;
    const active = document.body.dataset.page;
    holder.outerHTML = `
      <div class="mobile-bar">
        ${logo}
        <button type="button" aria-label="Open menu" data-menu>${icon('menu')}</button>
      </div>
      <aside class="sidebar" id="sidebar">
        <div class="brand">${logo}<div class="tagline">Explore. Trust. Own.</div></div>
        <nav class="nav">
          ${NAV.map(([k, label, href, ic]) => `<a href="${href}" class="${k === active ? 'active' : ''}">${icon(ic)}${label}</a>`).join('')}
        </nav>
        <a href="login.html" class="logout">${icon('logout')}Logout</a>
      </aside>`;
    const sb = document.getElementById('sidebar');
    document.querySelector('[data-menu]').addEventListener('click', (e) => { e.stopPropagation(); sb.classList.toggle('open'); });
    document.addEventListener('click', (e) => { if (sb.classList.contains('open') && !sb.contains(e.target)) sb.classList.remove('open'); });
  }

  /* Admin user chip */
  window.ADMIN_CHIP = `<div class="user-chip"><img class="avatar photo" src="assets/chidi.jpg" alt=""><div><div class="name">Chidi Okafor</div><div class="role">Admin Director</div></div></div>`;
  function renderChips() {
    document.querySelectorAll('[data-admin-chip]').forEach((el) => (el.outerHTML = window.ADMIN_CHIP));
  }

  /* Modals */
  window.openModal = (id) => document.getElementById(id).classList.add('open');
  window.closeModal = (id) => document.getElementById(id).classList.remove('open');
  document.addEventListener('click', (e) => {
    const closer = e.target.closest('[data-close]');
    if (closer) closer.closest('.overlay').classList.remove('open');
    if (e.target.classList.contains('overlay')) e.target.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.overlay.open').forEach((o) => o.classList.remove('open'));
  });

  /* Toast */
  let toastTimer;
  window.toast = (title, msg) => {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status');
      document.body.appendChild(t);
    }
    t.innerHTML = `<div class="ok">${icon('check')}</div><div><h4>${title}</h4><p>${msg}</p></div><button class="close-btn" aria-label="Dismiss">${icon('xCircle')}</button>`;
    t.querySelector('button').onclick = () => t.classList.remove('show');
    requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
  };

  /* Badge helper */
  window.badge = (text, tone, extra = '') => `<span class="badge b-${tone} ${extra}">${text}</span>`;
  window.initials = (n) => n.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  document.addEventListener('DOMContentLoaded', () => {
    renderShell();
    renderChips();
    hydrateIcons();
  });
})();
