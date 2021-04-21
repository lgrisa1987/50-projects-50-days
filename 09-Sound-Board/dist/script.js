"use strict";

var audioElements = [].slice.call(document.querySelectorAll('audio'));
var sounds = audioElements.map(function (el) {
  return el.id;
}).forEach(function (sound, index) {
  var btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound;
  document.getElementById('buttons').appendChild(btn);
  btn.addEventListener('click', function () {
    audioElements.forEach(function (sound) {
      sound.pause();
      sound.currentTime = 0;
    });
    audioElements[index].play();
  });
});