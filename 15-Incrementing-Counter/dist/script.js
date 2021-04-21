"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Muli"]
  },
  active: function active() {
    document.body.classList.remove('hide');
    runCode();
  }
});

var runCode = function runCode() {
  var counters = [].slice.call(document.querySelectorAll('.counter'));
  counters.forEach(function (counter) {
    counter.textContent = "0";

    var updateCounter = function updateCounter() {
      var target = +counter.getAttribute('data-target'),
          c = +counter.textContent,
          increment = target / 400;

      if (c < target) {
        counter.textContent = "".concat(Math.ceil(c + increment));
        setTimeout(updateCounter, 1);
      } else counter.textContent = target;
    };

    updateCounter();
  });
};