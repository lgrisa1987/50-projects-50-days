/* const xhr = new XMLHttpRequest(),
    url = "https://icanhazdadjoke.com/";
xhr.addEventListener("readystatechange", function () {
    if (this.readyState == 4) this.status == 200 ? document.getElementById('joke').innerHTML = JSON.parse(this.responseText).joke : "There was an error";
});
xhr.open("GET", url, true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(); */

const jokeEl = document.getElementById('joke'),
    jokeBtn = document.getElementById('jokeBtn'),


    //-------- Using fetch ----------------- //
    generateJoke = () => {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        };

        fetch("https://icanhazdadjoke.com/", config)
            .then(res => res.json())
            .then(data => (jokeEl.innerHTML = data.joke, jokeEl.removeAttribute('style')))
            .catch(e => console.log(e));
    };

//-------- async await ----------------- //
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