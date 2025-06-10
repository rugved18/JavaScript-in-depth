document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
