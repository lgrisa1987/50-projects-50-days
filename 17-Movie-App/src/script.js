 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Poppins"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a2dfb698403a22a3dacdb7653534b956&page=1',
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
     getClassByRate = vote => {
         if (vote >= 8) return 'green';
         else if (vote >= 5) return 'orange';
         else return 'red';
     },
     showMovies = movies => {
         main.innerHTML = "";
         movies.forEach(movie => {
             const {
                 title,
                 poster_path,
                 vote_average,
                 overview
             } = movie;
             if (poster_path) {
                 const movieEl = document.createElement('div');
                 movieEl.classList.add('movie');

                 movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
                 main.appendChild(movieEl)
             }
         });
     },
     getMovies = (url) => {
         const xhr = new XMLHttpRequest();
         let data;
         xhr.addEventListener("readystatechange", function () {
             if (this.readyState == 4) {
                 if (this.status == 200) {
                     data = JSON.parse(this.responseText);
                     showMovies(data.results);
                 } else console.log('there was an error');
             }
         });
         xhr.open("GET", url, true);
         //xhr.setRequestHeader('Accept', 'application/json');
         xhr.send();
     };


 //Get initial movies
 getMovies(API_URL);

 form.addEventListener('submit', (e) => {
     e.preventDefault();
     const searchTerm = search.value;
     if (searchTerm && searchTerm !== "") {
         getMovies(`${SEARCH_API}${searchTerm}`);
         search.value = "";
     } else location.reload();

 });