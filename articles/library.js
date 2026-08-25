(() => {
  const input = document.querySelector('#article-search');
  const cards = [...document.querySelectorAll('.library-card')];
  const sections = [...document.querySelectorAll('.library-section')];
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

    sections.forEach((section) => {
      section.hidden = !section.querySelector('.library-card:not([hidden])');
    });

    count.textContent = String(visible);
    empty.hidden = visible !== 0;
  });
})();
