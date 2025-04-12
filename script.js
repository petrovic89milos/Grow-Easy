document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');
    const alwaysVisibleElement = document.querySelector('.always-visible');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                entry.target.classList.add('visible');
            } else if (!entry.isIntersecting && !entry.target.classList.contains('always-visible')) {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element); 
    });

    if (alwaysVisibleElement) {
        alwaysVisibleElement.classList.add('visible');
    }
});
