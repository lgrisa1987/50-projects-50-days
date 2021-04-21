const split = [].slice.call(document.querySelectorAll('.split'));
const container = document.querySelector('.container');

split.forEach(el => {
    const elClass = `${el.classList[1]}`;
    el.addEventListener('mouseenter', () => container.classList.add(`hover-${elClass}`));
    el.addEventListener('mouseleave', () => container.classList.remove(`hover-${elClass}`));
})