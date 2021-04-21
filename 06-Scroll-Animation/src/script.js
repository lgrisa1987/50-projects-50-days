const boxes = [].slice.call(document.querySelectorAll('.box'));
const line = document.querySelector('.line');
const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    line.style.top = `${triggerBottom}px`;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop, box.offsetTop);
        if (boxTop < triggerBottom) box.classList.add('show');
        else box.classList.remove('show');
    });
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);