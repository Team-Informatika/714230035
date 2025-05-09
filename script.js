// Toggle the navigation menu on mobile
const toggleBtn = document.getElementById('navbar-toggle');
const navbarMenu = document.querySelector('.navbar .space-x-6');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden');
});
