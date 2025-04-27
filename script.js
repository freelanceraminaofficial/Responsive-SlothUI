const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const arrow = question.querySelector('.faq-arrow');

    answer.classList.toggle('open');   // উত্তর খুলবে/বন্ধ হবে
    arrow.classList.toggle('open');    // তীর ঘুরবে
  });
});

const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

menuIcon.addEventListener('click', () => {
  isOpen = !isOpen;
  if (isOpen) {
    mobileMenu.style.display = 'flex';
  
  } else {
    mobileMenu.style.display = 'none';
   
  }
});