"use strict";

/* const xhr = new XMLHttpRequest(),
    url = "https://icanhazdadjoke.com/";
xhr.addEventListener("readystatechange", function () {
    if (this.readyState == 4) this.status == 200 ? document.getElementById('joke').innerHTML = JSON.parse(this.responseText).joke : "There was an error";
});
xhr.open("GET", url, true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(); */
var jokeEl = document.getElementById('joke'),
    jokeBtn = document.getElementById('jokeBtn'),
    //-------- Using fetch ----------------- //
generateJoke = function generateJoke() {
  var config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  fetch("https://icanhazdadjoke.com/", config).then(function (res) {
    return res.json();
  }).then(function (data) {
    return jokeEl.innerHTML = data.joke, jokeEl.removeAttribute('style');
  })["catch"](function (e) {
    return console.log(e);
  });
}; //-------- async await ----------------- //

/*  generateJoke = async () => {
     const config = {
         headers: {
             'Accept': 'application/json'
         }
     };
     const res = await fetch("https://icanhazdadjoke.com/", config);

     jokeEl.innerHTML = await res.json();
 } */


generateJoke();
jokeBtn.addEventListener('click', generateJoke);