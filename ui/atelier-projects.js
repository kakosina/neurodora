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

  // Measure the actual paper even while native details is closed. The temporary
  // measurement is hidden and synchronous, so no paper or toggle is painted.
  const matchHeight = () => {
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

  summary.setAttribute('aria-expanded', String(expanded));
  sheet.inert = !expanded;
  sheet.setAttribute('aria-hidden', String(!expanded));
  matchHeight();
  settle();

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
