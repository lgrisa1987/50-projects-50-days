 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Lato"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     pokeContainer = select("#poke-container"),
     pokemonCount = 150,
     colors = {
         fire: '#FDDFDF',
         grass: '#DEFDE0',
         electric: '#FCF7DE',
         water: '#DEF3FD',
         ground: '#f4e7da',
         rock: '#d5d5d4',
         fairy: '#fceaff',
         poison: '#98d7a5',
         bug: '#f8d5a3',
         dragon: '#97b3e6',
         psychic: '#eaeda1',
         flying: '#F5F5F5',
         fighting: '#E6E0D4',
         normal: '#F5F5F5'
     },
     createPokemonCard = pokemon => {
         const pokemonEl = document.createElement("div"),
             pokemonInnerHTML = `<div class="img-container">
                <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="">
            </div>
            <div class="info">
                <span class="number">#001</span>
                <h3 class="name">Bulbasaur</h3>
                <small class="type">Type: <span>grass</span></small>
            </div>`;
         pokemonEl.className = "pokemon";
         pokemonEl.innerHTML = pokemonInnerHTML;
         pokeContainer.appendChild(pokemonEl);
     },
     /* getPokemon = async (id) => {
             const url = `https://pokeapi.co/api/v2/pokemon/${id}`,
                 res = await fetch(url),
                 data = await res.json();
             createPokemonCard(data)
         }, */
     /* fetchPokemons = async () => {
         for (let i = 1; i < pokemonCount; i++) await getPokemon(i);
     } */
     getPokemon = (id) => {
         const xhr = new XMLHttpRequest(),
             url = `https://pokeapi.co/api/v2/pokemon/${id}`;
         let data;
         xhr.addEventListener("readystatechange", function () {
             if (this.readyState === 4 && this.status === 200) data = JSON.parse(this.responseText), createPokemonCard(data);
         });
         xhr.open("GET", url, true);
         xhr.setRequestHeader('Accept', 'application/json');
         xhr.send();
     },
     fetchPokemons = () => {
         for (let i = 1; i < pokemonCount; i++) getPokemon(i);
         console.log("ready");
     }

 fetchPokemons();