const header = document.querySelector('.site-header');
const cursor = document.querySelector('.cursor');
const playButton = document.querySelector('.play-button');
const playIcon = document.querySelector('.play-icon');
const timer = document.querySelector('.play-copy small');
const revealItems = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

window.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a, button').forEach((item) => {
  item.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(1.8) rotate(25deg)');
  item.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));

let playing = false;
let seconds = 0;
let interval;
playButton.addEventListener('click', () => {
  playing = !playing;
  playButton.classList.toggle('playing', playing);
  playIcon.textContent = playing ? 'Ⅱ' : '▶';
  if (playing) {
    interval = window.setInterval(() => {
      seconds = (seconds + 1) % 60;
      timer.textContent = `DEMO // 00:${String(seconds).padStart(2, '0')}`;
    }, 1000);
  } else {
    window.clearInterval(interval);
  }
});

document.querySelectorAll('.poll button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.poll button').forEach((item) => item.style.outline = 'none');
    button.style.outline = '3px solid #ff137f';
  });
});
