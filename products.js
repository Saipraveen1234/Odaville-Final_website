/**
 * Odaville Website - Products Section with Category Filtering
 * This script handles the product swiper functionality and category filtering
 * Updated to remove pagination dots
 */

document.addEventListener('DOMContentLoaded', function() {
    // Product data organized by category
    const productsByCategory = {
        'windows': [
            {
                image: 'images/W1.jpg',
                title: 'Window System',
                subtitle: 'PANORAMA',
                category: 'windows'
            },
            {
                image: 'images/W2.jpg',
                title: 'Premium Glass',
                subtitle: 'CLEARVIEW',
                category: 'windows'
            },
            {
                image: 'images/W3.jpg',
                title: 'Corner Window',
                subtitle: 'SKYLINE',
                category: 'windows'
            }
        ],
        'doors': [
            {
                image: 'images/D1.jpg',
                title: 'Door System',
                subtitle: 'ELEGANCE',
                category: 'doors'
            },
            {
                image: 'images/D2.jpg',
                title: 'Sliding Door',
                subtitle: 'HORIZON',
                category: 'doors'
            },
            {
                image: 'images/D3.jpg',
                title: 'Entry Door',
                subtitle: 'PRESTIGE',
                category: 'doors'
            }
        ],
        'signature': [
            {
                image: 'images/S1.jpg',
                title: 'Giana Design',
                subtitle: 'MADEIRA',
                category: 'signature'
            },
            {
                image: 'images/S2.jpg',
                title: 'Lightrup',
                subtitle: 'E4 CATHERINE',
                category: 'signature'
            },
            {
                image: 'images/S3.jpg',
                title: 'Signature Frame',
                subtitle: 'TITANIUM',
                category: 'signature'
            }
        ],
        'architectural': [
            {
                image: 'images/A1.jpg',
                title: 'Architectural',
                subtitle: 'FACADE ELEMENT',
                category: 'architectural'
            },
            {
                image: 'images/A2.jpg',
                title: 'Sun Control',
                subtitle: 'SOLARIS',
                category: 'architectural'
            },
            {
                image: 'images/A3.jpg',
                title: 'Glass Railings',
                subtitle: 'SKYGUARD',
                category: 'architectural'
            }
        ]
    };

    // Default category
    let currentCategory = 'windows';
    let productSwiper;

    // Function to initialize swiper
    function initSwiper() {
        if (productSwiper) {
            productSwiper.destroy(true, true);
        }

        productSwiper = new Swiper('.products-swiper', {
            // Basic settings
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            speed: 600,
            
            // Enhanced coverflow effect settings
            coverflowEffect: {
                rotate: 0,
                stretch: 40,
                depth: 200,
                modifier: 1.5,
                slideShadows: false,
            },
            
            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 40
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 60
                },
                768: {
                    slidesPerView: 1.8,
                    spaceBetween: 90
                },
                992: {
                    slidesPerView: 2.2,
                    spaceBetween: 110
                },
                1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 130
                }
            },
            
            // REMOVED pagination to remove the dots
            
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // Function to generate product cards HTML
    function generateProductCards(category) {
        const products = productsByCategory[category] || productsByCategory['windows'];
        const swiperWrapper = document.querySelector('.products-swiper .swiper-wrapper');
        
        // Clear existing slides
        swiperWrapper.innerHTML = '';
        
        // Create new slides based on the category
        products.forEach(product => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.dataset.category = product.category;
            
            slide.innerHTML = `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title} ${product.subtitle}">
                    </div>
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p>${product.subtitle}</p>
                    </div>
                </div>
            `;
            
            swiperWrapper.appendChild(slide);
        });
        
        // Initialize the swiper
        initSwiper();
    }

    // Generate initial products
    generateProductCards(currentCategory);

    // Category Filter Functionality
    const categoryButtons = document.querySelectorAll('.category-button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the category data attribute
            const category = this.getAttribute('data-category');
            
            // Show loading state
            const swiperContainer = document.querySelector('.products-swiper');
            swiperContainer.classList.add('loading');
            
            // Generate new products with a slight delay for transition effect
            setTimeout(() => {
                generateProductCards(category);
                swiperContainer.classList.remove('loading');
                console.log(`Switched to category: ${category}`);
            }, 300);
        });
    });
    
    // Animation for scroll
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    function handleScroll() {
        const scrollAnimatedElements = document.querySelectorAll('.products-section .animate-on-scroll');
        
        scrollAnimatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Check on page load
    handleScroll();
});