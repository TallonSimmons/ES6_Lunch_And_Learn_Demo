import GameComponent from "./gameComponent.js";

function displayGames(games) {
  const gamesContainer = document.getElementById("gamesContainer");

  if (games.length > 0) {
    for (let index = 0; index < games.length; index++) {
      const game = games[index];
      const gameComponent = new GameComponent(game);

      gamesContainer.insertAdjacentHTML("beforeend", gameComponent.html);
    }
  } else {
    const noDataHtml = `<div class="col-12 text-center">
        <h2><em>No Games Found...</em></h2>
    </div>
    `;
    gamesContainer.insertAdjacentHTML("beforeend", noDataHtml);
  }
}


function toggleFetchingAnimation(fetching) {
  const searchButton = document.getElementById("searchButton");
  const loadingDiv = document.getElementById("loading");

  if (fetching) {
    searchButton.innerHTML =
      '<i class="fas fa-dice-five fa-spin mr-2"></i>Searching...';
    loadingDiv.innerHTML =
      '<h1 class="m-auto"><i class="fas fa-dice-five fa-spin mr-2"></i>Loading...</h1>';
  } else {
    searchButton.innerHTML = '<i class="fas fa-dice-five mr-2"></i>Search';
    loadingDiv.innerHTML = "";
  }
}

const gamesProperty = "games";
const fetchingProperty = "fetching";

export default {
  set(target, property, newValue) {
    if (property === gamesProperty) {
      displayGames(newValue);
    } else if (property === fetchingProperty) {
      toggleFetchingAnimation(newValue);
    }
    return Reflect.set(target, property, newValue);
  }
};
