// Initialize EmailJS with your Public Key
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual Public Key

// Hide loader after page load
window.addEventListener('load', () => {
    document.getElementById('loader').classList.add('hidden');
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Typing animation for hero
const typingText = document.querySelector('.typing');
const text = "Kabeer Soomro"; // Change this to your name
let index = 0;
function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}
setTimeout(type, 1000); // Start after 1 second

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs.sendForm('gkabeersoomro@gmail.com', 'gkabeersoomro@gmail.com', this) // Replace with your Service ID and Template ID
        .then(function() {
            alert('Message sent successfully! I will get back to you soon.');
            document.getElementById('contact-form').reset(); // Clear the form
        }, function(error) {
            alert('Failed to send message. Please try again or contact me directly.');
            console.log('FAILED...', error);
        });
});