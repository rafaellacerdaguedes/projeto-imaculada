/**
 * ============================================================================
 * SEARCH — Live Search Engine
 * Paróquia Nossa Senhora Imaculada Conceição
 * ============================================================================
 */

(function () {
  'use strict';

  window.initSearch = function () {
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchClose = document.getElementById('search-close');

    if (!searchToggle || !searchOverlay || !searchInput) return;

    function openSearch() {
      searchOverlay.classList.add('active');
      searchInput.value = '';
      if (searchResults) searchResults.innerHTML = '';
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearch() {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (searchInput) searchInput.value = '';
      if (searchResults) searchResults.innerHTML = '';
    }

    searchToggle.addEventListener('click', openSearch);
    searchClose?.addEventListener('click', closeSearch);

    // Close on background click
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        closeSearch();
      }
    });

    // Debounced search
    let timeout = null;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        executeSearch(e.target.value.trim());
      }, 250);
    });

    function executeSearch(query) {
      if (!searchResults) return;

      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }

      const q = query.toLowerCase();
      const results = [];

      // 1. Search in News
      if (window.SiteData?.news) {
        window.SiteData.news.forEach(item => {
          if (item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)) {
            results.push({
              badge: `Notícia • ${item.category}`,
              title: item.title,
              description: item.excerpt,
              link: `#noticias`,
              date: item.date
            });
          }
        });
      }

      // 2. Search in Pastorals
      if (window.SiteData?.pastorals) {
        window.SiteData.pastorals.forEach(p => {
          if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
            results.push({
              badge: 'Pastoral & Movimento',
              title: `${p.icon} ${p.name}`,
              description: p.description,
              link: '#pastorais'
            });
          }
        });
      }

      // 3. Search in Sacramentos
      if (window.SiteData?.sacraments) {
        window.SiteData.sacraments.forEach(s => {
          if (s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
            results.push({
              badge: 'Sacramento',
              title: `${s.icon} ${s.name}`,
              description: s.description,
              link: '#sacramentos'
            });
          }
        });
      }

      // 4. Search in Parish Info
      if (window.SiteData?.parishInfo) {
        window.SiteData.parishInfo.forEach(info => {
          if (info.title.toLowerCase().includes(q) || info.text.toLowerCase().includes(q)) {
            results.push({
              badge: 'Institucional',
              title: `${info.icon} ${info.title}`,
              description: info.text,
              link: '#nossa-paroquia'
            });
          }
        });
      }

      // 5. Search in Schedules
      if (q.includes('missa') || q.includes('horario') || q.includes('confissao') || q.includes('sabado') || q.includes('domingo')) {
        results.push({
          badge: 'Horários Litúrgicos',
          title: '🕊️ Santas Missas e Confissões',
          description: 'Domingo: 7h, 9h, 11h e 18h | Seg-Sex: 7h e 18h30 | Sáb: 7h e 17h. Confissões às quartas e sábados.',
          link: '#horarios'
        });
      }

      // Render results
      if (results.length === 0) {
        searchResults.innerHTML = `
          <div class="search-overlay__no-results">
            <p>Nenhum resultado encontrado para "<strong>${escapeHtml(query)}</strong>".</p>
            <p style="font-size: 0.9rem; margin-top: 8px; opacity: 0.7;">Tente pesquisar por: missas, batismo, crisma, catequese, história, confissão...</p>
          </div>
        `;
        return;
      }

      searchResults.innerHTML = results.slice(0, 8).map(res => `
        <a href="${res.link}" class="search-overlay__result" onclick="document.getElementById('search-overlay').classList.remove('active'); document.body.style.overflow='';">
          <span class="search-overlay__result-type">${res.badge}</span>
          <h4 class="search-overlay__result-title">${escapeHtml(res.title)}</h4>
          <p class="search-overlay__result-excerpt">${escapeHtml(res.description)}</p>
        </a>
      `).join('');
    }

    function escapeHtml(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  };
})();
