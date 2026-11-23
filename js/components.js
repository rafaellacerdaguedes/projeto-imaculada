/**
 * ============================================================================
 * COMPONENTS LOADER
 * Paróquia Nossa Senhora Imaculada Conceição
 * Loads header.html and footer.html dynamically with CORS/local file fallback
 * ============================================================================
 */

(function () {
  'use strict';

  const isSubpage = window.location.pathname.includes('/pages/');
  const basePath = isSubpage ? '../' : '';

  /**
   * Helper to load an HTML component
   */
  async function loadComponent(url, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return false;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status} loading ${url}`);
      let html = await response.text();

      // If in subpage, adjust relative URLs
      if (isSubpage) {
        html = html.replace(/src="assets\//g, 'src="../assets/');
        html = html.replace(/href="assets\//g, 'href="../assets/');
        html = html.replace(/href="index\.html"/g, 'href="../index.html"');
        html = html.replace(/href="#/g, 'href="../index.html#');
      }

      container.innerHTML = html;
      return true;
    } catch (err) {
      console.warn(`Fetch error for ${url} (normal if file:// without server):`, err.message);
      return false;
    }
  }

  async function init() {
    const headerPath = basePath + 'components/header.html';
    const footerPath = basePath + 'components/footer.html';

    const [headerOk, footerOk] = await Promise.all([
      loadComponent(headerPath, 'header-container'),
      loadComponent(footerPath, 'footer-container')
    ]);

    // Dispatch event indicating components are ready
    document.dispatchEvent(new CustomEvent('componentsLoaded', {
      detail: { headerOk, footerOk }
    }));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
