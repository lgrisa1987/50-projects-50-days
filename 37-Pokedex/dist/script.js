"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Lato"]
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
  ice: '#96D9D6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
},
    mainTypes = Object.keys(colors),
    createPokemonCard = function createPokemonCard(pokemon) {
  var id = pokemon.id,
      name = pokemon.name,
      types = pokemon.types,
      pokeTypes = types.map(function (type) {
    return type.type.name;
  })[0],
      type = mainTypes.filter(function (index) {
    return index === pokeTypes;
  }),
      nameUppercase = name[0].toUpperCase() + name.slice(1),
      idNumber = id.toString().length === 1 ? "00" + id : id.toString().length === 2 ? "0" + id : id,
      pokemonEl = document.createElement("div"),
      pokemonInnerHTML = "<div class=\"img-container\">\n                <img src=\"https://pokeres.bastionbot.org/images/pokemon/".concat(id, ".png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <span class=\"number\">#").concat(idNumber, "</span>\n                <h3 class=\"name\">").concat(nameUppercase, "</h3>\n                <small class=\"type\">Type: <span>").concat(pokeTypes, "</span></small>\n            </div>");
  pokemonEl.className = "pokemon";
  pokemonEl.innerHTML = pokemonInnerHTML;
  pokemonEl.style.background = "".concat(colors[type]);
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
getPokemon = function getPokemon(id) {
  var xhr = new XMLHttpRequest(),
      url = "https://pokeapi.co/api/v2/pokemon/".concat(id);
  var data;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) data = JSON.parse(this.responseText), createPokemonCard(data);
  });
  xhr.open("GET", url, false);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
},
    fetchPokemons = function fetchPokemons() {
  for (var i = 1; i < pokemonCount; i++) {
    getPokemon(i);
  }
};

fetchPokemons();