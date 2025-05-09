// Toggle the navigation menu on mobile
const toggleBtn = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('hidden');
});
