"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Montserrat"]
  },
  active: function active() {
    document.body.classList.remove("hide");
  }
});
/* https://randomuser.me/ */

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    ratings = selectAll(".rating"),
    ratingsContainer = select(".ratings-container"),
    sendBtn = select("#send"),
    panel = select("#panel"),
    removeActiveClasses = function removeActiveClasses() {
  for (var i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};

var selectedRating = "Satisfied";
ratingsContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    removeActiveClasses();
    e.target.parentElement.classList.add("active");
    selectedRating = e.target.nextElementSibling.textContent || e.target.textContent;
  }
});
sendBtn.addEventListener("click", function (e) {
  panel.innerHTML = "\n     <i class=\"fas fa-heart\"></i>\n     <strong>Thank You!!</strong>\n     <br>\n     <strong>Feedback: ".concat(selectedRating, "</strong>\n     <p>We'll use your feedback to improve our costumer support</p>\n     ");
});