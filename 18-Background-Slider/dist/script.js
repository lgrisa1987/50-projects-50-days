"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Poppins"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});
var body = document.body,
    slides = [].slice.call(document.querySelectorAll('.slide')),
    arrows = [].slice.call(document.querySelectorAll('.arrow'));
var activeSlide = 0;

var setBgToBody = function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
},
    setActiveSlide = function setActiveSlide() {
  slides.forEach(function (slide) {
    return slide.classList.remove('active');
  });
  slides[activeSlide].classList.add('active');
};

arrows.forEach(function (arrow) {
  arrow.addEventListener('click', function () {
    if (this.id === "left") activeSlide--, activeSlide < 0 && (activeSlide = slides.length - 1);else activeSlide++, activeSlide > slides.length - 1 && (activeSlide = 0);
    setBgToBody();
    setActiveSlide();
  });
});
setBgToBody();