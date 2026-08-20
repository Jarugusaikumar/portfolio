// ===== Mobile nav toggle =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Back to top button =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Contact form =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form && note) {
  form.addEventListener('submit', (e) => {
    const endpoint = form.action || '';

    if (endpoint.includes('yourFormID')) {
      e.preventDefault();
      note.textContent = '> connect your Formspree form ID in index.html to receive messages in saijarugu2003@gmail.com';
      return;
    }

    note.textContent = '> sending message...';
  });
}
