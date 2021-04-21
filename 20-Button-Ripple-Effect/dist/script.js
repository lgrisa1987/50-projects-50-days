"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Roboto"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});

var selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
};

var buttons = selectAll('.ripple');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var buttonTop = this.offsetTop;
    var buttonLeft = this.offsetLeft;
    var xInside = x - buttonLeft;
    var yInside = y - buttonTop;
    console.log(x, buttonLeft, xInside);
    var circle = document.createElement('span');
    circle.className = "circle";
    circle.setAttribute('style', "top:".concat(yInside, "px;left:").concat(xInside, "px"));
    this.appendChild(circle);
    /*  circle.addEventListener('animationend', function () {
         this.remove();
     }); */
  });
});