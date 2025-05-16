// Profile Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar navigation active state
    const navLinks = document.querySelectorAll('.profile-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

           //loading content dynamically here
            const section = this.getAttribute('href').substring(1);
            document.querySelector('.content-header h1').innerHTML =
                `<i class="fas ${this.querySelector('i').className.split(' ')[1]}"></i> ${this.textContent.trim()}`;

            // Updating content based on section
            document.querySelector('.profile-content h1').innerHTML =
                `<i class="fas ${this.querySelector('i').className.split(' ')[1]}"></i> ${this.textContent.trim()}`;

            e.preventDefault();
        });
    });

    // Edit profile button
    document.querySelector('.edit-btn')?.addEventListener('click', function() {
        alert('Edit profile functionality would open a form here.');
        // In a real app, this would switch to edit mode
    });

    // Edit avatar button
    document.querySelector('.edit-avatar-btn')?.addEventListener('click', function() {
        alert('Avatar upload functionality would be triggered here.');
    });

    // Newsletter form submission
    document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
        this.reset();
    });
});


window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.scroll-effect');
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(position < screenPosition) {
      el.classList.add('animated');
    }
  });
});


// Sticky Navbar with Color Change
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle (keep existing)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');

  // Handling color change for mobile menu when navbar is not scrolled
  if (!navbar.classList.contains('scrolled')) {
    if (this.classList.contains('active')) {
      navLinks.style.backgroundColor = '#2c3e50';
    } else {
      navLinks.style.backgroundColor = '';
    }
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});