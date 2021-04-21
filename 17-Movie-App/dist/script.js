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

var API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a2dfb698403a22a3dacdb7653534b956&page=1',
    IMG_PATH = 'https://image.tmdb.org/t/p/w1280',
    SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a2dfb698403a22a3dacdb7653534b956&query=',
    main = document.getElementById('main'),
    form = document.getElementById('form'),
    search = document.getElementById('search'),

/*  getMovies = async (url) => {
     const res = await fetch(url),
         data = await res.json();
     console.log(data.results);
 } */
getClassByRate = function getClassByRate(vote) {
  if (vote >= 8) return 'green';else if (vote >= 5) return 'orange';else return 'red';
},
    showMovies = function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach(function (movie) {
    var title = movie.title,
        poster_path = movie.poster_path,
        vote_average = movie.vote_average,
        overview = movie.overview;

    if (poster_path) {
      var movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = "\n            <img src=\"".concat(IMG_PATH + poster_path, "\" alt=\"").concat(title, "\">\n            <div class=\"movie-info\">\n          <h3>").concat(title, "</h3>\n          <span class=\"").concat(getClassByRate(vote_average), "\">").concat(vote_average, "</span>\n            </div>\n            <div class=\"overview\">\n          <h3>Overview</h3>\n          ").concat(overview, "\n        </div>\n        ");
      main.appendChild(movieEl);
    }
  });
},
    getMovies = function getMovies(url) {
  var xhr = new XMLHttpRequest();
  var data;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        data = JSON.parse(this.responseText);
        showMovies(data.results);
      } else console.log('there was an error');
    }
  });
  xhr.open("GET", url, true); //xhr.setRequestHeader('Accept', 'application/json');

  xhr.send();
}; //Get initial movies


getMovies(API_URL);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies("".concat(SEARCH_API).concat(searchTerm));
    search.value = "";
  } else location.reload();
});