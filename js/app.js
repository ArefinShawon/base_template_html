// UI: theme toggle, form demo, year auto-fill
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.removeItem('theme');
      btn.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      btn.textContent = '☀️';
    }
  });

  // Fake contact form submit
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    status.textContent = 'Sending...';
    setTimeout(() => {
      status.textContent = 'Message sent — thanks!';
      form.reset();
      setTimeout(()=> status.textContent = '', 3000);
    }, 700);
  });
});
