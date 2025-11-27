const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// دالة للتبديل بين الأيقونات
function toggleIcons(isLight) {
    if (isLight) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// فحص لو المستخدم كان مسيف الوضع قبل كدة
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleIcons(true);
}

// لما يدوس على الزرار
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    // تغيير الأيقونة
    toggleIcons(isLight);

    // حفظ اختيار المستخدم عشان ميروحش لما يعمل ريفريش
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});