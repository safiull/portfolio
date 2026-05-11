// Initialize Lucide Icons
lucide.createIcons();

// Sticky Navbar & Active Links
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Navbar background change
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active link highlight
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-indigo-400');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('text-indigo-400');
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check
revealOnScroll();

// Smooth scrolling for safari/older browsers (optional as CSS handles it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});