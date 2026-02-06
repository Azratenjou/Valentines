// Falling hearts animation
function createHeart() {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = '♥';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDuration = (Math.random() * 8 + 6) + 's';
  h.style.opacity = Math.random() * 0.5 + 0.45;
  h.style.fontSize = (Math.random() * 1.1 + 0.9) + 'rem';
  document.getElementById('hearts').appendChild(h);
  setTimeout(() => h.remove(), 16000);
}
setInterval(createHeart, Math.random() * 600 + 350);

// Highlight active nav link on scroll
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 220) current = sec.getAttribute('id');
  });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Theme song player - click to load & autoplay YouTube embed
const player = document.getElementById('player');
const iframe = document.getElementById('yt');
const videoId = 'tGv7CUutzqU'; // "About You" by The 1975

player.addEventListener('click', () => {
  if (!player.classList.contains('active')) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    player.classList.add('active');
  }
});