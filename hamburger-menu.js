// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (hamburger.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on the overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            toggleMenu();
        }
    });
});