const select = e => document.querySelector(e),
    selectAll = e => document.querySelectorAll(e),
    fill = select('.fill'),
    empties = [].slice.call(selectAll('.empty')),
    dragStart = e => {
        e.target.className += ' hold';
        setTimeout(() => {
            e.target.className = 'invisible';
        }, 0);
    },
    dragEnd = e => e.target.className = 'fill',
    dragOver = e => e.preventDefault(),
    dragEnter = e => {
        e.preventDefault(), e.target.className += ' hovered'
    },
    dragLeave = e => e.target.className = 'empty',
    dragDrop = e => {
        e.target.className = 'empty';
        e.target.appendChild(fill);
    };

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

/* for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
} */
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
})