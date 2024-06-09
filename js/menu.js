const navMenu = document.querySelector('.nav-menu');
document.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.classList.contains('menu-btn') ||
        e.target.classList.contains('menu-item')) {
        navMenu.classList.toggle('mobile-menu');
    }
})