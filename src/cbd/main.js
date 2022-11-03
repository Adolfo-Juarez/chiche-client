const toggle = document.querySelector('.btn-nav');
const links = document.querySelector('.links');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate');
    links.classList.toggle('active');
})