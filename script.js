// small helpers for interactivity
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const toggle = document.getElementById('navToggle');
toggle && toggle.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (nav.style.display === 'flex') {
    nav.style.display = '';
    toggle.textContent = '☰';
  } else {
    nav.style.display = 'flex';
    toggle.textContent = '✕';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.marginTop = '12px';
  }
});
