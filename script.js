// Simple script to toggle the navigation links as a dropdown menu on mobile
// This code is beginner-friendly and uses basic JavaScript

document.addEventListener('DOMContentLoaded', function() {
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  function isMobileMenu() {
    // Hamburger is visible below 900px
    return window.innerWidth < 900;
  }

  navToggle.addEventListener('click', function() {
    var isOpen = navLinks.classList.toggle('active');
    navToggle.textContent = isOpen ? '\u00D7' : '\u2261';
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  // Optional: Hide menu when a link is clicked (mobile only)
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      if (isMobileMenu()) {
        navLinks.classList.remove('active');
        navToggle.textContent = '\u2261'; // Hamburger
        navToggle.setAttribute('aria-label', 'Open navigation menu');
      }
    });
  });

  // Hide dropdown if resizing to desktop
  window.addEventListener('resize', function() {
    if (!isMobileMenu()) {
      navLinks.classList.remove('active');
      navToggle.textContent = '\u2261'; // Hamburger
      navToggle.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  // --- Slide cards on hover (mobile only) ---
  // Only enable card sliding on hover for mobile/tablet (below 900px)
  function enableCardSlide() {
    document.querySelectorAll('.destination-card').forEach(function(card) {
      // Always remove any previous handler first
      if (card._slideHandler) {
        card.removeEventListener('mouseenter', card._slideHandler);
        card._slideHandler = null;
      }
    });
    if (window.innerWidth < 900) {
      document.querySelectorAll('.destination-card').forEach(function(card) {
        card._slideHandler = function() {
          card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        };
        card.addEventListener('mouseenter', card._slideHandler);
      });
    }
  }

  // Run on load
  window.addEventListener('DOMContentLoaded', enableCardSlide);
  // Run on resize
  window.addEventListener('resize', enableCardSlide);
});
