// Auto-scrolling News
const newsGrid = document.querySelector('.news-grid');
const newsCards = document.querySelectorAll('.news-card');
const cardWidth = newsCards[0].offsetWidth + 30; // card width + gap
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += cardWidth;
  if (scrollAmount >= cardWidth * (newsCards.length - 2)) {
    scrollAmount = 0;
  }
  newsGrid.style.transform = `translateX(-${scrollAmount}px)`;
}

// Start auto-scroll
let scrollInterval = setInterval(autoScroll, 2500);

// Pause on hover
const newsContainer = document.querySelector('.news-container');
newsContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
newsContainer.addEventListener('mouseleave', () => {
  scrollInterval = setInterval(autoScroll, 2500);
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add to script.js
document.addEventListener('DOMContentLoaded', function() {
  // Password toggle functionality
  document.querySelectorAll('.password-toggle').forEach(toggle => {
      toggle.addEventListener('click', function() {
          const passwordInput = this.parentElement.querySelector('input');
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          this.classList.toggle('fa-eye-slash');
          this.classList.toggle('fa-eye');
      });
  });

  // Form submission
  document.getElementById('signinForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!validateEmail(email)) {
          alert('Please enter a valid email');
          return;
      }

      if (password.length < 8) {
          alert('Password must be at least 8 characters');
          return;
      }

      // Add your actual authentication logic here
      console.log('Submitting form:', { email, password });
      // window.location.href = 'dashboard.html';
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email) && email.endsWith('.edu');
  }
});