const menuMobile = document.getElementById('menu-mobile');
const nav = document.querySelector('.nav-list');

menuMobile.addEventListener('click', () => {
    nav.classList.toggle('open');
});