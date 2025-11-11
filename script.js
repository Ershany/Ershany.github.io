const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

/*
// This is code that on mobile will center the horizontal scroll bar for the images for The Lord's Sanguine section
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    
    // Only apply this on mobile screens
    if (gallery && window.innerWidth <= 768) {
        const images = gallery.querySelectorAll('img');
        if (images.length >= 2) {
            const secondImage = images[1];
            const scrollPosition =
                secondImage.offsetLeft -
                (gallery.clientWidth / 2) +
                (secondImage.clientWidth / 2);

            gallery.scrollTo({
                left: scrollPosition,
                behavior: 'instant' // change to 'smooth' if you want it animated
            });
        }
    }
});
*/