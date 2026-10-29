(() => {
  const projects = document.querySelector('.atelier-projects');
  if (!projects) return;
  const summary = projects.querySelector('summary');
  const sheet = projects.querySelector('.project-sheet');
  if (!summary || !sheet) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let expanded = projects.open;
  let unfolding;

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
    if (next) projects.open = true;

    if (reducedMotion.matches || !sheet.animate) {
      unfolding?.cancel();
      unfolding = undefined;
      settle();
      return;
    }

    if (!unfolding) {
      unfolding = sheet.animate([
        {transform: 'translateY(-50%) perspective(1000px) rotateY(88deg)', opacity: 0, filter: 'brightness(.68)'},
        {transform: 'translateY(-50%) perspective(1000px) rotateY(86deg)', opacity: 1, filter: 'brightness(.7)', offset: .04},
        {transform: 'translateY(-50%) perspective(1000px) rotateY(58deg)', opacity: 1, filter: 'brightness(.82)', offset: .3},
        {transform: 'translateY(-50%) perspective(1000px) rotateY(16deg)', opacity: 1, filter: 'brightness(.96)', offset: .7},
        {transform: 'translateY(-50%) perspective(1000px) rotateY(0deg)', opacity: 1, filter: 'brightness(1)'}
      ], {duration: 620, easing: 'cubic-bezier(.3,0,.2,1)', fill: 'both'});
      unfolding.pause();
      unfolding.currentTime = next ? 0 : 620;
      unfolding.onfinish = settle;
    }

    projects.dataset.state = next ? 'opening' : 'closing';
    // One timeline changes direction in place, including repeated taps mid-fold.
    unfolding.playbackRate = next ? 1 : -1;
    unfolding.play();
  };

  summary.setAttribute('aria-expanded', String(expanded));
  sheet.inert = !expanded;
  sheet.setAttribute('aria-hidden', String(!expanded));
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
})();
