(() => {
  const input = document.querySelector('#article-search');
  const cards = [...document.querySelectorAll('.article-photo-card')];
  const count = document.querySelector('#article-count');
  const empty = document.querySelector('#library-empty');

  if (!input || !cards.length || !count || !empty) return;

  const normalize = (value) => value.toLocaleLowerCase('ru').replace(/ё/g, 'е').trim();

  input.addEventListener('input', () => {
    const query = normalize(input.value);
    let visible = 0;

    cards.forEach((card) => {
      const matches = !query || normalize(card.dataset.search || card.textContent).includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    count.textContent = String(visible);
    empty.hidden = visible !== 0;
  });
})();
