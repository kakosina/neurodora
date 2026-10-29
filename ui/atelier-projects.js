(() => {
  const projects = document.querySelector('.atelier-projects');
  if (!projects) return;
  const summary = projects.querySelector('summary');
  const sheet = projects.querySelector('.project-sheet');
  if (!summary || !sheet) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 420;
  let expanded = projects.open;
  let unfolding;
  const chapterHashes = new Set(['#anime', '#artists', '#web', '#apps', '#agents', '#integration']);
  let pendingChapterHash = chapterHashes.has(location.hash);
  let hiddenForCatalogue;
  let book;

  // Measure the actual paper even while native details is closed. The temporary
  // measurement is hidden and synchronous, so no paper or toggle is painted.
  const matchHeight = () => {
    if (projects.hidden) return;
    const wasOpen = projects.open;
    if (!wasOpen) {
      projects.dataset.measuring = 'true';
      projects.open = true;
    }
    projects.style.setProperty('--project-height', `${sheet.offsetHeight}px`);
    if (!wasOpen) {
      projects.open = false;
      delete projects.dataset.measuring;
    }
  };

  const settle = () => {
    projects.open = expanded;
    projects.dataset.state = expanded ? 'open' : 'closed';
  };

  const setExpanded = (next, returnFocus = false) => {
    if (next && projects.hidden) return;
    expanded = next;
    summary.setAttribute('aria-expanded', String(next));
    // Keep the sheet mounted until its reverse animation finishes, but remove
    // closing links from keyboard and assistive-technology navigation immediately.
    if (!next && (returnFocus || sheet.contains(document.activeElement))) {
      summary.focus({preventScroll: true});
    }
    sheet.inert = !next;
    sheet.setAttribute('aria-hidden', String(!next));
    if (next) {
      projects.open = true;
      matchHeight();
    }

    if (reducedMotion.matches || !sheet.animate) {
      unfolding?.cancel();
      unfolding = undefined;
      settle();
      return;
    }

    if (!unfolding) {
      unfolding = sheet.animate([
        {clipPath: 'inset(-32px calc(100% + 24px) -40px -24px)'},
        {clipPath: 'inset(-32px -40px -40px -24px)'}
      ], {duration, easing: 'cubic-bezier(.25,.1,.25,1)', fill: 'both'});
      unfolding.pause();
      unfolding.currentTime = next ? 0 : duration;
      unfolding.onfinish = settle;
    }

    projects.dataset.state = next ? 'opening' : 'closing';
    // One timeline changes direction in place, including repeated taps mid-reveal.
    unfolding.playbackRate = next ? 1 : -1;
    unfolding.play();
  };

  const syncCatalogueVisibility = () => {
    const renderedScroll = Number(book?.dataset.position || 0) * innerHeight;
    if (scrollY > 24 || renderedScroll > 24) pendingChapterHash = false;
    const hidden = pendingChapterHash || scrollY > 24 || renderedScroll > 24;
    if (hidden === hiddenForCatalogue) return;
    hiddenForCatalogue = hidden;
    if (hidden) {
      // Leave no active control in the disappearing widget, without moving
      // the catalogue. Letter remains the existing reachable page control.
      if (projects.contains(document.activeElement)) {
        const fallback = document.querySelector('.letter-trigger');
        if (fallback) fallback.focus({preventScroll: true});
        else document.activeElement.blur();
      }
      expanded = false;
      unfolding?.cancel();
      unfolding = undefined;
      summary.setAttribute('aria-expanded', 'false');
      sheet.inert = true;
      sheet.setAttribute('aria-hidden', 'true');
      settle();
    }
    projects.inert = hidden;
    projects.setAttribute('aria-hidden', String(hidden));
    projects.hidden = hidden;
    if (!hidden) matchHeight();
  };

  const observeBook = () => {
    book = document.querySelector('.scroll-book');
    if (!book) return false;
    new MutationObserver(syncCatalogueVisibility).observe(book, {
      attributes: true, attributeFilter: ['data-position']
    });
    syncCatalogueVisibility();
    return true;
  };

  summary.setAttribute('aria-expanded', String(expanded));
  sheet.inert = !expanded;
  sheet.setAttribute('aria-hidden', String(!expanded));
  matchHeight();
  settle();
  syncCatalogueVisibility();
  if (!observeBook()) {
    const root = document.getElementById('root');
    if (root) {
      const mountObserver = new MutationObserver(() => {
        if (observeBook()) mountObserver.disconnect();
      });
      mountObserver.observe(root, {childList: true, subtree: true});
    }
  }
  window.addEventListener('scroll', syncCatalogueVisibility, {passive: true});
  window.addEventListener('pageshow', syncCatalogueVisibility);
  window.addEventListener('hashchange', () => {
    pendingChapterHash = chapterHashes.has(location.hash);
    syncCatalogueVisibility();
  });

  summary.addEventListener('click', event => {
    event.preventDefault();
    setExpanded(!expanded, expanded);
  });

  document.addEventListener('pointerdown', event => {
    if (expanded && !projects.contains(event.target)) setExpanded(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && expanded && !event.defaultPrevented && !document.querySelector('dialog[open]')) {
      event.preventDefault();
      setExpanded(false, true);
    }
  });

  projects.addEventListener('focusout', () => {
    requestAnimationFrame(() => {
      if (expanded && !projects.contains(document.activeElement)) setExpanded(false);
    });
  });

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      unfolding?.cancel();
      unfolding = undefined;
      settle();
    }
  });
  window.addEventListener('resize', matchHeight, {passive: true});
  document.fonts.ready.then(matchHeight);
  new ResizeObserver(() => {
    if (projects.open) matchHeight();
  }).observe(sheet);
})();
