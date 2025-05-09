// Scroll effect for active navbar link highlight
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
  link.addEventListener('click', function () {
    navbarLinks.forEach(link => link.classList.remove('text-yellow-500'));  // Remove active class from all links
    this.classList.add('text-yellow-500');  // Add active class to clicked link
  });
});

// Toggle navbar for mobile view
const toggleBtn = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden');
});
