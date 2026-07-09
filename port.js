let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // Sticky navigation
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// const typed = new Typed('.multiple-text', {
//     // strings: ['Frontend Developer'],
//     typeSpeed: 200,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
// });
// Select the button and the skills section
let skillsButton = document.querySelector('#skills'); // Replace '#skills-button' with the actual ID or class of your button
let skillsSection = document.querySelector('.skills'); // Replace '.skills' with the actual class or ID of the skills section


skillsButton.onclick = () => {
    skillsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
};
let portfolio1 = document.querySelector('#portfolio-'); // Replace '#skills-button' with the actual ID or class of your button
let portfolio= document.querySelector('.portfolio'); // Replace '.skills' with the actual class or ID of the skills section


portfolio1.onclick = () => {
    portfolio.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
};