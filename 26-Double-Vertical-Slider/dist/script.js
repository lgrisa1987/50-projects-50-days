"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Open Sans"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    vueContainer = new Vue({
  el: '.slider-container',
  data: {
    slides: [{
      bgColor: "#FD3555",
      headline: "Nature flower",
      paragraph: "all pink",
      img: "photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80"
    }, {
      bgColor: "#2A86BA",
      headline: "Bluuue Sky",
      paragraph: "with it's mountains",
      img: "photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80"
    }, {
      bgColor: "#252E33",
      headline: "Lonely castle",
      paragraph: "in the wilderness",
      img: "photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80"
    }, {
      bgColor: "#FFB866",
      headline: "Flying eagle",
      paragraph: "in the sunset",
      img: "photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80"
    }]
  },
  computed: {
    slidesReverse: function slidesReverse() {
      return this.slides.map(function (el) {
        return el.img;
      });
    }
  },
  methods: {
    getIndex: function getIndex(i) {
      return i === 0 ? 'down' : 'up';
    }
  }
}),
    sliderContainer = select('.slider-container'),
    slideRight = select('.right-slide'),
    slideLeft = select('.left-slide'),
    upButton = select('.up-button'),
    downButton = select('.down-button'),
    slidesLength = slideRight.querySelectorAll('div').length,
    changeSlide = function changeSlide(direction) {
  var sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;
    activeSlideIndex > slidesLength - 1 && (activeSlideIndex = 0);
  } else {
    activeSlideIndex--;
    activeSlideIndex < 0 && (activeSlideIndex = slidesLength - 1);
  }

  slideRight.style.transform = "translateY(-".concat(activeSlideIndex * sliderHeight, "px)");
  slideLeft.style.transform = "translateY(".concat(activeSlideIndex * sliderHeight, "px)");
};

var activeSlideIndex = 0;
slideLeft.style.top = "-".concat((slidesLength - 1) * 100, "vh");
upButton.addEventListener('click', changeSlide.bind(null, 'up'));
downButton.addEventListener('click', changeSlide.bind(null, 'down'));