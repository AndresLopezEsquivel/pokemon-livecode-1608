// TODO write your code here
const cardTemplate = document.querySelector("#cardTemplate");
const cardsContainer = document.querySelector("#cardsContainer");
const infoTemplate = document.querySelector("#infoTemplate");

const fetchPokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const pokemons = data.results;
      pokemons.forEach(pokemon => fetchPokemon(pokemon));
    });
}

const fetchPokemon = (pokemon) => {
  fetch(pokemon.url)
    .then(response => response.json())
    .then(data => displayPokemonData(data));
};

const displayPokemonData = (data) => {
  const card = cardTemplate.content.cloneNode(true);
  card.querySelector(".pokemon-card-title").innerText = data.name;
  card.querySelector(".pokemon-card-image").src = data.sprites.front_default;
  card.querySelector(".pokemon-card-subtitle").innerText = data.types.map(t => t.type.name).join(",");

  cardsContainer.appendChild(card);
};

// const showInfoEvent = (card) => {
//   card.addEventListener("click", (e) => {

//   });
// };

fetchPokemons();
