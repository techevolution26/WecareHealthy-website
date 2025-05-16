// Contact Form Submission
document.getElementById('messageForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Getting form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    //sending the data to a server
    alert(`Thank you, ${name}! Your message has been sent.\nWe'll respond to ${email} shortly.`);

    // Reset the form
    this.reset();
});

// Newsletter form submission
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
    this.reset();
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

// Mobile menu toggle
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