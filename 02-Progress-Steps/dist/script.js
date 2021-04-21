"use strict";

var progress = document.getElementById('progress'),

/* prev = document.getElementById('prev'),
next = document.getElementById('next'), */
btns = [].slice.call(document.querySelectorAll('.btn')),
    circles = [].slice.call(document.querySelectorAll('.circle')),
    update = function update() {
  circles.forEach(function (circle, index) {
    if (index < currentActive) circle.classList.add('active');else circle.classList.remove('active');
  });
  var actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
  /* if (currentActive === 1) prev.disabled = true
  else if (currentActive === 4) next.disabled = true
  else prev.disabled = false, next.disabled = false; */

  currentActive === 1 ? prev.disabled = true : currentActive === 4 ? next.disabled = true : (prev.disabled = false, next.disabled = false);
};

var currentActive = 1;
/* next.addEventListener('click', () => {
    if (currentActive < circles.length) currentActive++;
    update();
});
prev.addEventListener('click', () => {
    if (currentActive > 1) currentActive--;
    update();
}); */

for (var btn in btns) {
  btns[btn].addEventListener('click', function (e) {
    if (e.target.id === "next") currentActive < circles.length && currentActive++;else currentActive > 1 && currentActive--;
    update();
  });
}
/* btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.id === "next") currentActive < circles.length && currentActive++
        else currentActive > 1 && currentActive--;
        update();
    })
}); */