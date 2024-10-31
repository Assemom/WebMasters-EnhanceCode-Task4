document.addEventListener('DOMContentLoaded', function() {
    
    const backToTopButton = document.querySelector('.back-to-top');
    
    
    function toggleBackToTopButton() {
        // Show button after scrolling 300px
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }


    window.addEventListener('scroll', toggleBackToTopButton);

    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
    });

    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Form submitted:', { email, message });
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}); 