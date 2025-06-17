// menu mobilne
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// sekcje
const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

navItems.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    sections.forEach(section => {
      section.classList.remove('active');
    });

    document.getElementById(target).classList.add('active');

    navLinks.classList.remove('active'); // zamykanie menu mobilnego
  });
});

// do formularza
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = "Uzupełnij wszystkie pola!";
    formMsg.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMsg.textContent = "Wprowadź poprawny adres e-mail.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Wiadomość została wysłana!";
  formMsg.style.color = "green";
  form.reset();
});
