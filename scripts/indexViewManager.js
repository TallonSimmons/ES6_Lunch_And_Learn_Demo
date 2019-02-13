import GameComponent from "./gameComponent.js";
import dataManager from "./dataManager.js";

const gamesProperty = "games";

function displayGames(games){
  for (let index = 0; index < games.length; index++) {
    const game = games[index];
    const gameComponent = new GameComponent(game);

    const gamesContainer = document.getElementById("gamesContainer");

    gamesContainer.insertAdjacentHTML("beforeend", gameComponent.html);
  }
};


function clearGamesList() {
    document.getElementById('gamesContainer').innerHTML ='';
}
const handler = {
  set(target, property, newValue) {
    if (property === gamesProperty) {
      displayGames(newValue);
    }
    return Reflect.set(target, property, newValue);
  }
};

export default class IndexController {
  constructor(games) {
    const properties = {
      games: null
    };
    const propertiesProxy = new Proxy(properties, handler);
    this.properties = propertiesProxy;
    this.properties.games = games;
    this.bindOnClickEvents();
  }

  bindOnClickEvents() {
    document.getElementById("searchButton").addEventListener("click", () => {
      this.displaySearchItems();
    });
  }

  displaySearchItems() {
    const callingInstance = this;
    const searchBox = document.getElementById("searchBox");
    const searchButton = document.getElementById("searchButton");
    searchButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching...'
    const fetchRequest = dataManager.fetchSearchData(searchBox.value);
    
    fetchRequest
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        searchButton.innerHTML = 'Search'
        clearGamesList();
        callingInstance.properties.games = data.games;
      });
  }
}
