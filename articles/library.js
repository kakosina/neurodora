(() => {
  const cards = [...document.querySelectorAll('.article-photo-card')];
  let topLayer = 100;

  const raise = (card) => {
    topLayer += 1;
    card.style.zIndex = String(topLayer);
  };

  cards.forEach((card) => {
    card.addEventListener('pointerenter', () => raise(card));
    card.addEventListener('pointerdown', () => raise(card));
    card.addEventListener('focusin', () => raise(card));
  });
})();
