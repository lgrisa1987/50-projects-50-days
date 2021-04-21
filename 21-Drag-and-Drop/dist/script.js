"use strict";

var select = function select(e) {
  return document.querySelector(e);
},
    selectAll = function selectAll(e) {
  return document.querySelectorAll(e);
},
    fill = select('.fill'),
    empties = [].slice.call(selectAll('.empty')),
    dragStart = function dragStart(e) {
  e.target.className += ' hold';
  setTimeout(function () {
    e.target.className = 'invisible';
  }, 0);
},
    dragEnd = function dragEnd(e) {
  return e.target.className = 'fill';
},
    dragOver = function dragOver(e) {
  return e.preventDefault();
},
    dragEnter = function dragEnter(e) {
  e.preventDefault(), e.target.className += ' hovered';
},
    dragLeave = function dragLeave(e) {
  return e.target.className = 'empty';
},
    dragDrop = function dragDrop(e) {
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

empties.forEach(function (empty) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});