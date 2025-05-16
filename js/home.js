// Sample doctor data
const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        rating: 4.8,
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurology",
        rating: 4.7,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Dr. Emily Wilson",
        specialty: "Pediatrics",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 4,
        name: "Dr. Robert Garcia",
        specialty: "Orthopedics",
        rating: 4.6,
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
];

// Function to render doctors
function renderDoctors() {
    const container = document.getElementById('doctorsContainer');
    container.innerHTML = '';

    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';

        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h3>${doctor.name}</h3>
            <p class="specialty">${doctor.specialty}</p>
            <p>Rating: ${doctor.rating}/5</p>
            <button class="book-btn">Book Appointment</button>
        `;

        container.appendChild(doctorCard);
    });
}

// Searching functionality
document.querySelector('.search-container button').addEventListener('click', () => {
    const searchTerm = document.querySelector('.search-container input').value.toLowerCase();
    alert(`Searching for: ${searchTerm}`);
    //filtering doctors or specialties
});

// Initializing the page
document.addEventListener('DOMContentLoaded', () => {
    renderDoctors();

    // Adding click event to all specialty cards
    document.querySelectorAll('.specialty-card').forEach(card => {
        card.addEventListener('click', () => {
            const specialty = card.querySelector('h3').textContent;
            alert(`Showing doctors for ${specialty}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    renderDoctors();

    // Adding click event to all specialty cards
    document.querySelectorAll('.specialty-card').forEach(card => {
        card.addEventListener('click', () => {
            const specialty = card.querySelector('h3').textContent;
            alert(`Showing doctors for ${specialty}`);
        });
    });

    // Newsletter form submission
    document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        e.target.reset();
    });
});

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

// Book appointment buttons
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const doctorName = this.closest('.doctor-info').querySelector('h3').textContent;
        alert(`Booking appointment with ${doctorName}`);
        // this would open a booking modal
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