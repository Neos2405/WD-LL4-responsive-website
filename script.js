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
  // This feature is now removed so cards do not move on hover. Users can drag to scroll.
});

// Make the card slider draggable with mouse or touch
// This code is beginner-friendly and uses basic JavaScript

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', function() {
  var slider = document.querySelector('.destination-cards');
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse events
  slider.addEventListener('mousedown', function(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', function() {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', function() {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 1.2; // Scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  slider.addEventListener('touchstart', function(e) {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('touchend', function() {
    isDown = false;
  });
  slider.addEventListener('touchmove', function(e) {
    if (!isDown) return;
    var x = e.touches[0].pageX - slider.offsetLeft;
    var walk = (x - startX) * 1.2;
    slider.scrollLeft = scrollLeft - walk;
  });
});
