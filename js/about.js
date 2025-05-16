// Newsletter form submission
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
    this.reset();
});

// Animation for stats counting
function animateStats() {
    const statCards = document.querySelectorAll('.stat-card h3');
    const targetValues = [50, 1000, 100, 4.9];
    const durations = [2000, 2000, 2000, 1000];

    statCards.forEach((stat, index) => {
        const target = targetValues[index];
        const duration = durations[index];
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
                // Adding '+' to all except rating
                if (index !== 3) {
                    stat.textContent = Math.floor(current) + '+';
                } else {
                    stat.textContent = current.toFixed(1);
                }
            } else {
                // Adding '+' to all except rating during animation
                if (index !== 3) {
                    stat.textContent = Math.floor(current) + '+';
                } else {
                    stat.textContent = current.toFixed(1);
                }
            }
        }, 16);
    });
}

// Running the animation when the stats section comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelector('.stats') && observer.observe(document.querySelector('.stats'));

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

// my Sticky Navbar with Color Change
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