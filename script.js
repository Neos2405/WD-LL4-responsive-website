// Simple script to toggle the navigation menu on mobile
// This code is beginner-friendly and uses basic JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Get the hamburger button and nav links container
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  // When the hamburger is clicked, show/hide the nav links
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});
