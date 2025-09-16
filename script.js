// Mobile Navigation
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.toggle('show');
    mobileMenuBtn.classList.toggle('active');
}

// Smooth Scrolling
function scrollToSection(href) {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Project Filtering
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-buttons .filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter projects
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
            project.classList.add('fade-in');
            setTimeout(() => project.classList.add('visible'), 100);
        } else {
            project.style.display = 'none';
            project.classList.remove('visible');
        }
    });
}

// Achievement Filtering
function filterAchievements(type) {
    const achievements = document.querySelectorAll('.achievement-card');
    const filterButtons = document.querySelectorAll('.achievements-filter .filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter achievements
    achievements.forEach(achievement => {
        if (type === 'all' || achievement.dataset.type === type) {
            achievement.style.display = 'block';
            achievement.classList.add('fade-in');
            setTimeout(() => achievement.classList.add('visible'), 100);
        } else {
            achievement.style.display = 'none';
            achievement.classList.remove('visible');
        }
    });
}

// Gallery Filtering
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter gallery items
    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.classList.add('fade-in');
            setTimeout(() => item.classList.add('visible'), 100);
        } else {
            item.style.display = 'none';
            item.classList.remove('visible');
        }
    });
}

// Lightbox functionality
function openLightbox(imageSrc, title, description) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    lightboxImage.src = imageSrc;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to animated elements
    const animatedElements = document.querySelectorAll('.team-card, .project-card, .achievement-card, .facility-card, .gallery-item');
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
    
    // Add mobile menu close on link click
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileNav = document.getElementById('mobile-nav');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            mobileNav.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        const speed = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${speed}px)`;
    }
});

// Smooth reveal animations for sections
const revealSections = document.querySelectorAll('.section');
const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(section);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});