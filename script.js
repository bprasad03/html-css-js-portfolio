function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '50px',   // Default distance for all reveals
  duration: 800,     // Default animation duration
  easing: 'ease-in-out',
  reset: true,        // Reveal only once by default
});
sr.reveal('.section', {
  origin: 'bottom',   // Animation comes from the bottom
  interval: 200,      // Delay between each box
  scale: 1            // No scaling
});

sr.reveal('.skills-box', {
  origin: 'bottom',   // Animation comes from the bottom
  interval: 200,      // Delay between each box
  scale: 1            // No scaling
});

sr.reveal('.about-container', {
  origin: 'bottom',   // Animation comes from the bottom
  interval: 200,      // Delay between each box
  scale: 1            // No scaling
});

sr.reveal('.education-card', {
  origin: 'left',   // Animation comes from the bottom
  interval: 200,      // Delay between each box
  scale: 1            // No scaling
});

sr.reveal('.experience-card', {
  origin: 'right',   // Animation comes from the bottom
  interval: 200,      // Delay between each box
  scale: 1            // No scaling
});

sr.reveal('.article-container', {
  origin: 'bottom',   // Animation comes from the bottom
  interval: 200,      // Delay between each box
  scale: 1            // No scaling
});

function navigateTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}