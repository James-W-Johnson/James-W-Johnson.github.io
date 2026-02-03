// ============================================
// Portfolio Website JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize flip functionality
    initFlipMode();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize navigation active state
    initNavActiveState();
    
    // Load saved mode preference
    loadModePreference();
    
    // Initialize toggle button attention animation
    initToggleAttention();
});

// ============================================
// Flip Mode Toggle
// ============================================

function initFlipMode() {
    const modeToggle = document.getElementById('modeToggle');
    const flipContainer = document.getElementById('flipContainer');
    const toggleText = modeToggle.querySelector('.toggle-text');
    
    if (!modeToggle || !flipContainer) return;
    
    modeToggle.addEventListener('click', function() {
        flipContainer.classList.toggle('flipped');
        
        // Update button text
        const isFlipped = flipContainer.classList.contains('flipped');
        toggleText.textContent = isFlipped ? 'Technical Mode' : 'Creative Mode';
        
        // Add/remove class on body for navbar styling
        if (isFlipped) {
            document.body.classList.add('creative-mode-active');
        } else {
            document.body.classList.remove('creative-mode-active');
        }
        
        // Save preference to localStorage
        saveModePreference(isFlipped);
        
        // Update ARIA label for accessibility
        modeToggle.setAttribute('aria-label', 
            isFlipped ? 'Switch to technical mode' : 'Switch to creative mode'
        );
    });
    
    // Keyboard accessibility
    modeToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            modeToggle.click();
        }
    });
}

// ============================================
// Save/Load Mode Preference
// ============================================

function saveModePreference(isFlipped) {
    try {
        localStorage.setItem('portfolioMode', isFlipped ? 'creative' : 'technical');
    } catch (e) {
        // localStorage not available, ignore
        console.warn('Could not save mode preference:', e);
    }
}

function loadModePreference() {
    try {
        const savedMode = localStorage.getItem('portfolioMode');
        const flipContainer = document.getElementById('flipContainer');
        const modeToggle = document.getElementById('modeToggle');
        const toggleText = modeToggle?.querySelector('.toggle-text');
        
        if (savedMode === 'creative' && flipContainer && !flipContainer.classList.contains('flipped')) {
            flipContainer.classList.add('flipped');
            document.body.classList.add('creative-mode-active');
            if (toggleText) {
                toggleText.textContent = 'Technical Mode';
            }
            if (modeToggle) {
                modeToggle.setAttribute('aria-label', 'Switch to technical mode');
            }
        }
    } catch (e) {
        // localStorage not available, ignore
        console.warn('Could not load mode preference:', e);
    }
}

// ============================================
// Smooth Scrolling
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty hash or just #
            if (href === '#' || href === '') {
                return;
            }
            
            // Find the currently visible card (not hidden by opacity)
            const flipContainer = document.getElementById('flipContainer');
            const isFlipped = flipContainer && flipContainer.classList.contains('flipped');
            const visibleCard = isFlipped 
                ? document.getElementById('creativeCard')
                : document.getElementById('technicalCard');
            
            // Look for the target section within the visible card
            let target = null;
            if (visibleCard) {
                target = visibleCard.querySelector(href);
            }
            
            // Fallback to document-wide search if not found in visible card
            if (!target) {
                target = document.querySelector(href);
            }
            
            if (target) {
                e.preventDefault();
                
                // Calculate offset for fixed navbar - use consistent 80px offset
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Navigation Active State
// ============================================

function initNavActiveState() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (navLinks.length === 0) return;
    
    // Update active state on scroll
    function updateActiveNav() {
        const flipContainer = document.getElementById('flipContainer');
        const isFlipped = flipContainer && flipContainer.classList.contains('flipped');
        const visibleCard = isFlipped 
            ? document.getElementById('creativeCard')
            : document.getElementById('technicalCard');
        
        // Only look at sections in the visible card
        const sections = visibleCard ? visibleCard.querySelectorAll('section[id]') : [];
        
        if (sections.length === 0) return;
        
        const scrollPosition = window.pageYOffset + 100; // Offset for navbar
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial call
    updateActiveNav();
}

// ============================================
// Intersection Observer for Animations
// ============================================

function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip animations if user prefers reduced motion
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe project cards and other elements
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .experience-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations
initScrollAnimations();

// ============================================
// Mobile Menu Toggle (if needed in future)
// ============================================

function initMobileMenu() {
    // This can be expanded if a mobile menu is needed
    // For now, navigation links are hidden on mobile as per design
}

// ============================================
// Toggle Button Attention Animation
// ============================================

function initToggleAttention() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip animation if user prefers reduced motion
    }
    
    const modeToggle = document.getElementById('modeToggle');
    
    if (!modeToggle) return;
    
    // Delay animation by 1-1.5 seconds (using 1.2 seconds as middle ground)
    setTimeout(function() {
        modeToggle.classList.add('animate-attention');
        
        // Remove the class after animation completes to allow re-triggering if needed
        setTimeout(function() {
            modeToggle.classList.remove('animate-attention');
        }, 1200); // Match animation duration
    }, 1200); // 1.2 second delay
}

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
