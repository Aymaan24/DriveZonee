document.addEventListener("DOMContentLoaded", function() {
    // تثبيت وتصغير اللوجو عند التمرير
    const header = document.querySelector('.head');
    const logo = header.querySelector('img');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // تأثير الظهور التدريجي للصفحة
    const elementsToAnimate = [
        '.f-title',
        '#video', 
        '.fr', 
        '.fr2', 
        '.company-info', 
        '.button'
    ];
    
    elementsToAnimate.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, (index + 1) * 300);
        }
    });
});