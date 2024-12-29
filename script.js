// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal functionality for Contact Form
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close-btn');
const contactBtn = document.querySelector('a[href="contact.html"]');

contactBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Submit form logic
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
    modal.style.display = 'none';
});

// Scroll Reveal Effect (Advanced)
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function() {
    revealElements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});