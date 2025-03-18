/**
 * Text Animations for Odaville Website
 * This script handles the swipe up animation for text elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Select all text elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-text');
    
    // Force immediate display on page load
    setTimeout(function() {
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 500);
    
    // Function to check if element is in viewport (for future scrolling animations)
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to add 'visible' class to elements in viewport (for future sections)
    function handleScroll() {
        const scrollAnimatedElements = document.querySelectorAll('.animate-on-scroll');
        
        scrollAnimatedElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Listen for scroll events (for future elements)
    window.addEventListener('scroll', handleScroll);
    
    // Handle elements on resize
    window.addEventListener('resize', handleScroll);
});

// Script to handle animation
document.addEventListener('DOMContentLoaded', function() {
    // Make glass panel and CTA visible after a short delay
    setTimeout(function() {
        const glassElement = document.querySelector('.glass-panel');
        const ctaElement = document.querySelector('.services-bottom-cta');
        
        if (glassElement) {
            glassElement.classList.add('visible');
        }
        
        if (ctaElement) {
            ctaElement.classList.add('visible');
        }
    }, 500);
});