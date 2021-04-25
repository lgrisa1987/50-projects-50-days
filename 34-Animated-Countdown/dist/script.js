"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Poppins"]
  },
  active: function active() {
    document.body.classList.remove("hide");
  }
});

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    nums = [].slice.call(selectAll('.nums span')),
    counter = select('.counter'),
    finalMessage = select('.final'),
    replay = select('#replay'),
    runAnimation = function runAnimation() {
  nums.forEach(function (num, index, arr) {
    var nextToLast = arr.length - 1;
    num.addEventListener("animationend", function (e) {
      if (e.animationName === "goIn" && index !== nextToLast) num.classList.remove("in"), num.classList.add("out");
      if (e.animationName === "goOut" && num.nextElementSibling) num.nextElementSibling.classList.add("in");
      if (index === nextToLast) counter.classList.add("hide"), finalMessage.classList.add("show");
    });
  });
},
    resetDOM = function resetDOM() {
  [].slice.call([counter, finalMessage]).forEach(function (el, index) {
    return el.classList.remove(index === 0 ? "hide" : "show");
  });
  nums.forEach(function (num) {
    return num.removeAttribute("class");
  });
  nums[0].classList.add('in');
};

runAnimation();
replay.addEventListener('click', function () {
  return resetDOM();
}, runAnimation());