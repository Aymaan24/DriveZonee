document.addEventListener('DOMContentLoaded', function() {
    // إظهار الشعار أولاً
    setTimeout(() => {
        document.getElementById('logoo').classList.add('show');
    }, 300);
    
    // ثم إظهار الفيديو
    setTimeout(() => {
        document.getElementById('veo').classList.add('show');
    }, 800);
    
    // ثم عنوان المعلومات
    setTimeout(() => {
        document.getElementById('qq').classList.add('show');
    }, 1300);
    
    // ثم الفقرة النصية
    setTimeout(() => {
        document.getElementById('ww').classList.add('show');
    }, 1800);
    
    // ثم عناصر القائمة واحداً تلو الآخر
    const listItems = document.querySelectorAll('.pp ul li');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 2200 + (index * 200));
    });
});