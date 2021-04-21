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

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    header = select('#header'),
    title = select('#title'),
    excerpt = select('#excerpt'),
    profile_img = select('#profile_img'),
    fullName = select('#name'),
    date = select('#date'),
    animated_bgs = selectAll('.animated-bg'),
    getData = function getData() {
  var content = ["<img src=\"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80\" alt=\"\">", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dignissimos.", " <img src=\"https://randomuser.me/api/portraits/men/45.jpg\" alt= \"\">", "John Doe", "Oct 08, 2020"];
  [header, title, excerpt, profile_img, fullName, date].forEach(function (el, i) {
    return el.innerHTML = content[i];
  });
  animated_bgs.forEach(function (bg) {
    return bg.classList.remove('animated-bg', 'animated-bg-text');
  });
};

setTimeout(getData, 2500);