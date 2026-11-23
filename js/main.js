/**
 * ============================================================================
 * MAIN APPLICATION
 * Paróquia Nossa Senhora Imaculada Conceição
 * ============================================================================
 */

(function () {
  'use strict';

  // Listen for components loaded, or initialize if already loaded
  document.addEventListener('componentsLoaded', initApp);
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initApp, 100);
  }

  let initialized = false;

  function initApp() {
    if (initialized) return;
    initialized = true;

    // Render all dynamic sections
    renderNews();
    renderParishInfo();
    renderSchedules();
    renderPastorals();
    renderSacraments();

    // Setup interactive features
    setupMobileMenu();
    setupStickyHeader();
    setupBackToTop();
    setupNewsModal();

    // Initialize animations and search
    if (window.initScrollReveal) window.initScrollReveal();
    if (window.initSearch) window.initSearch();
  }

  /* ── 1. RENDER NEWS ────────────────────────────────────────────────────── */
  function renderNews() {
    const container = document.getElementById('news-grid');
    if (!container || !window.SiteData?.news) return;

    container.innerHTML = window.SiteData.news.slice(0, 6).map(item => `
      <article class="news-card scroll-reveal">
        <div class="news-card__image-wrapper">
          <img src="${item.image}" alt="${item.title}" class="news-card__image" loading="lazy">
          <span class="news-card__category">${item.category}</span>
        </div>
        <div class="news-card__content">
          <div class="news-card__meta">
            <span>📅 ${formatDate(item.date)}</span>
            <span>•</span>
            <span>✍️ ${item.author}</span>
          </div>
          <h3 class="news-card__title">${item.title}</h3>
          <p class="news-card__excerpt">${item.excerpt}</p>
          <a href="#" class="news-card__link" data-news-id="${item.id}">
            Ler matéria completa <span>→</span>
          </a>
        </div>
      </article>
    `).join('');
  }

  /* ── 2. RENDER PARISH INFO ─────────────────────────────────────────────── */
  function renderParishInfo() {
    const container = document.getElementById('parish-grid');
    if (!container || !window.SiteData?.parishInfo) return;

    container.innerHTML = window.SiteData.parishInfo.map(item => `
      <div class="parish-card scroll-reveal">
        <div class="parish-card__icon-box">
          <span>${item.icon}</span>
        </div>
        <h3 class="parish-card__title">${item.title}</h3>
        <p class="parish-card__text">${item.text}</p>
        <a href="${item.link}" class="parish-card__link">
          Conhecer mais <span>→</span>
        </a>
      </div>
    `).join('');
  }

  /* ── 3. RENDER SCHEDULES ───────────────────────────────────────────────── */
  function renderSchedules() {
    const container = document.getElementById('schedules-grid');
    if (!container || !window.SiteData?.schedules) return;

    const { masses, confessions, specialCelebrations } = window.SiteData.schedules;

    container.innerHTML = `
      <!-- Card: Santas Missas -->
      <div class="schedule-card scroll-reveal">
        <div class="schedule-card__header">
          <span class="schedule-card__icon">🕊️</span>
          <h3 class="schedule-card__title">Santas Missas</h3>
        </div>
        <ul class="schedule-card__list">
          ${masses.map(m => `
            <li class="schedule-card__item">
              <span class="schedule-card__label">${m.day}</span>
              <span class="schedule-card__time">${m.times.join('<br>')}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Card: Confissões -->
      <div class="schedule-card scroll-reveal">
        <div class="schedule-card__header">
          <span class="schedule-card__icon">🙏</span>
          <h3 class="schedule-card__title">Confissões</h3>
        </div>
        <ul class="schedule-card__list">
          ${confessions.map(c => `
            <li class="schedule-card__item">
              <span class="schedule-card__label">${c.day}</span>
              <span class="schedule-card__time">${c.times.join(', ')}</span>
            </li>
          `).join('')}
        </ul>
        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); margin-top: var(--space-md); line-height: 1.5;">
          * Atendimento por ordem de chegada. Em dias de semana, confirme na secretaria.
        </p>
      </div>

      <!-- Card: Devoções & Adoração -->
      <div class="schedule-card scroll-reveal">
        <div class="schedule-card__header">
          <span class="schedule-card__icon">✨</span>
          <h3 class="schedule-card__title">Momentos de Oração</h3>
        </div>
        <ul class="schedule-card__list">
          ${specialCelebrations.map(s => `
            <li class="schedule-card__item">
              <span class="schedule-card__label">${s.name}</span>
              <span class="schedule-card__time">${s.schedule}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  /* ── 4. RENDER PASTORALS ───────────────────────────────────────────────── */
  function renderPastorals() {
    const container = document.getElementById('pastorals-grid');
    if (!container || !window.SiteData?.pastorals) return;

    container.innerHTML = window.SiteData.pastorals.map(p => `
      <div class="pastoral-card scroll-reveal">
        <div class="pastoral-card__icon">${p.icon}</div>
        <h4 class="pastoral-card__title">${p.name}</h4>
        <p class="pastoral-card__text">${p.description}</p>
      </div>
    `).join('');
  }

  /* ── 5. RENDER SACRAMENTS ──────────────────────────────────────────────── */
  function renderSacraments() {
    const container = document.getElementById('sacraments-grid');
    if (!container || !window.SiteData?.sacraments) return;

    container.innerHTML = window.SiteData.sacraments.map(s => `
      <div class="parish-card scroll-reveal" style="text-align: left; align-items: flex-start;">
        <div class="parish-card__icon-box" style="margin-bottom: var(--space-sm);">
          <span>${s.icon}</span>
        </div>
        <h3 class="parish-card__title" style="font-size: 1.25rem;">${s.name}</h3>
        <p class="parish-card__text" style="font-size: 0.9rem;">${s.description}</p>
      </div>
    `).join('');
  }

  /* ── 6. MOBILE MENU & NAVIGATION ───────────────────────────────────────── */
  function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('main-nav');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (!toggle || !nav) return;

    function openMenu() {
      nav.classList.add('active');
      toggle.classList.add('active');
      overlay?.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      overlay?.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.contains('active') ? closeMenu() : openMenu();
    });

    overlay?.addEventListener('click', closeMenu);

    // Dropdown toggle on mobile
    const dropdownItems = nav.querySelectorAll('.nav-menu__item--has-children');
    dropdownItems.forEach(item => {
      const link = item.querySelector('.nav-menu__link');
      link?.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    });

    // Close when clicking simple links
    const simpleLinks = nav.querySelectorAll('.nav-menu__link:not(.nav-menu__item--has-children > .nav-menu__link), .nav-menu__dropdown-link');
    simpleLinks.forEach(link => link.addEventListener('click', closeMenu));
  }

  /* ── 7. STICKY HEADER SCROLL ───────────────────────────────────────────── */
  function setupStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ── 8. BACK TO TOP BUTTON ─────────────────────────────────────────────── */
  function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── 9. NEWS MODAL (READ MORE) ─────────────────────────────────────────── */
  function setupNewsModal() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-news-id]');
      if (!link) return;

      e.preventDefault();
      const newsId = parseInt(link.getAttribute('data-news-id'), 10);
      const newsItem = window.SiteData?.news?.find(n => n.id === newsId);
      if (!newsItem) return;

      showModal(newsItem);
    });
  }

  function showModal(item) {
    let modal = document.getElementById('news-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'news-modal';
      modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(15, 27, 51, 0.85);
        z-index: 9999; display: flex; align-items: center; justify-content: center;
        padding: 20px; backdrop-filter: blur(5px);
      `;
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div style="
        background: #FFFFFF; border-radius: 12px; max-width: 700px; width: 100%;
        max-height: 90vh; overflow-y: auto; padding: 32px; position: relative;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3); border: 1px solid #C9A84C;
      ">
        <button id="modal-close" style="
          position: absolute; top: 16px; right: 16px; background: none; border: none;
          font-size: 24px; cursor: pointer; color: #1B2A4A; width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center; border-radius: 50%;
        " aria-label="Fechar">✕</button>

        <span style="background: #1B2A4A; color: #FFFFFF; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; padding: 4px 10px; border-radius: 4px;">
          ${item.category}
        </span>

        <h2 style="font-family: 'Playfair Display', serif; color: #1B2A4A; font-size: 1.8rem; margin: 12px 0 8px; line-height: 1.25;">
          ${item.title}
        </h2>

        <p style="color: #666; font-size: 0.85rem; margin-bottom: 20px;">
          📅 ${formatDate(item.date)} • ✍️ ${item.author}
        </p>

        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;">

        <div style="color: #333; line-height: 1.8; font-size: 1rem;">
          ${item.content}
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E0D8CC; text-align: right;">
          <button id="modal-close-btn" class="btn btn--primary" style="padding: 8px 24px; cursor: pointer;">
            Fechar
          </button>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';

    function closeModal() {
      modal.remove();
      document.body.style.overflow = '';
    }

    modal.querySelector('#modal-close').addEventListener('click', closeModal);
    modal.querySelector('#modal-close-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  /* ── 10. DATE FORMATTER ────────────────────────────────────────────────── */
  function formatDate(dateStr) {
    try {
      const parts = dateStr.split('-');
      const date = new Date(parts[0], parts[1] - 1, parts[2]);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  }
})();
