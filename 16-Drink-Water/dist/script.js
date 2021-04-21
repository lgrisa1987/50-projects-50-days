"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Montserrat"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});

var smallCups = [].slice.call(document.getElementsByClassName('cup-small')),
    liters = document.getElementById('liters'),
    percentage = document.getElementById('percentage'),
    remained = document.getElementById('remained'),
    updateBigCup = function updateBigCup() {
  var fullCups = document.querySelectorAll('.cup-small.full').length,
      totalCups = smallCups.length;
  if (fullCups === 0) percentage.setAttribute('style', 'visibility:hidden; height: 0;');else {
    percentage.setAttribute('style', "visibility: visible; height: ".concat(fullCups / totalCups * 330, "px"));
  }
  if (fullCups === totalCups) remained.setAttribute('style', 'visibility:hidden; height: 0;');else {
    remained.removeAttribute('style'), liters.textContent = "".concat(2 - 250 * fullCups / 1000, "L");
  }
  ;
  percentage.textContent = "".concat(fullCups / totalCups * 100, "%");
},
    highlightCups = function highlightCups(index) {
  smallCups[index].classList.contains('full') && (!smallCups[index].nextElementSibling || !smallCups[index].nextElementSibling.classList.contains('full')) && index--;
  smallCups.forEach(function (cup, index2) {
    if (index2 <= index) cup.classList.add('full');else cup.classList.remove('full');
  });
  updateBigCup();
};

smallCups.forEach(function (cup, i) {
  /Trident/.test(navigator.userAgent) && (cup.innerHTML = "<span>".concat(cup.textContent, "</span>"));
  cup.addEventListener('click', function () {
    return highlightCups(i);
  });
});