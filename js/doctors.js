// Searching functionality for doctors page
document.querySelector('.search-filter button').addEventListener('click', () => {
    const searchTerm = document.querySelector('.search-filter input').value.toLowerCase();
    const specialtyFilter = document.querySelector('.search-filter select').value.toLowerCase();

    const doctorCards = document.querySelectorAll('.doctor-card');

    doctorCards.forEach(card => {
        const doctorName = card.querySelector('h3').textContent.toLowerCase();
        const doctorSpecialty = card.querySelector('.specialty').textContent.toLowerCase();

        const nameMatch = doctorName.includes(searchTerm);
        const specialtyMatch = specialtyFilter === '' || doctorSpecialty.includes(specialtyFilter);

        if (nameMatch && specialtyMatch) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// Booking appointment buttons
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const doctorName = this.closest('.doctor-info').querySelector('h3').textContent;
        alert(`Booking appointment with ${doctorName}`);
        //opening a booking modal
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