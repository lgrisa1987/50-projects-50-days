"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Muli"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});
var tagsEl = document.getElementById('tags');
var textArea = document.getElementById('textarea');

var createTags = function createTags(input) {
  var tags = input.split(',').filter(function (tag) {
    return tag.trim() !== "";
  }).map(function (tag) {
    return tag.trim();
  });
  tagsEl.innerHTML = '';
  tags.forEach(function (tag) {
    var tagEl = document.createElement('span');
    tagEl.className = "tag";
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl);
  });
};

var highlightTag = function highlightTag(tag) {
  tag.classList.add('highlight');
};

var unHighlightTag = function unHighlightTag(tag) {
  tag.classList.remove('highlight');
};

var pickRandomTag = function pickRandomTag() {
  var tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

var randomSelect = function randomSelect() {
  var times = 30;
  var interval = setInterval(function () {
    var randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(function () {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(function () {
    clearInterval(interval);
    setTimeout(function () {
      var randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

textArea.focus();
textArea.addEventListener('keyup', function (e) {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(function () {
      e.target.value = "";
    }, 10);
    randomSelect();
  }

  ;
});