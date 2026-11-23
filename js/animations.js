/**
 * ============================================================================
 * ANIMATIONS — Scroll Reveal, Smooth Scrolling, Visual Touches
 * Paróquia Nossa Senhora Imaculada Conceição
 * ============================================================================
 */

(function () {
  'use strict';

  /**
   * Initializes IntersectionObserver for elements with .scroll-reveal
   */
  window.initScrollReveal = function () {
    const reveals = document.querySelectorAll('.scroll-reveal');
    if (!reveals.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reveals.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Apply slight stagger based on index in parent
            const siblings = Array.from(entry.target.parentElement?.querySelectorAll('.scroll-reveal') || []);
            const idx = siblings.indexOf(entry.target);
            if (idx > 0 && idx < 6) {
              entry.target.style.transitionDelay = `${idx * 0.1}s`;
            }

            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach(el => observer.observe(el));
  };

  /**
   * Smooth Anchor Scrolling respecting sticky header height
   */
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#' || href === '#!') return;

    const targetEl = document.querySelector(href);
    if (!targetEl) return;

    e.preventDefault();
    const headerHeight = document.getElementById('site-header')?.offsetHeight || 75;
    const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 15;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    // Close mobile nav if open
    const nav = document.getElementById('main-nav');
    const toggle = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    if (nav?.classList.contains('active')) {
      nav.classList.remove('active');
      toggle?.classList.remove('active');
      overlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
})();
