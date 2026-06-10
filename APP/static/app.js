const header = document.querySelector('header');
const menu = header.querySelector('.menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
})
window.addEventListener('click', (e) => {
    if (!e.target.matches(".menu")){
        menu.classList.remove('open');
    }
})