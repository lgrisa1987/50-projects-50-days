/* const open = document.getElementById('open');
const close = document.getElementById('close'); */
const container = document.querySelector('.container');
const circleNavBtns = document.querySelectorAll('.circle button');

for (let i = 0; i < circleNavBtns.length; i++) {
    circleNavBtns[i].addEventListener('click', () => container.classList.toggle('show-nav'));
}