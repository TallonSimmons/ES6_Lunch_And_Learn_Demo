import GameComponent from "./gameComponent.js";

function displayGames(games) {
  clearGamesList();
  const gamesContainer = document.getElementById("gamesContainer");

  if (games.length > 0) {
    for (let index = 0; index < games.length; index++) {
      const game = games[index];
      const gameComponent = new GameComponent(game);

      gamesContainer.insertAdjacentHTML("beforeend", gameComponent.html);
    }
  } else {
    const noDataHtml = 
    `<div class="col-12 text-center">
        <h2><em>No Games Found...</em></h2>
    </div>
    `;
    gamesContainer.insertAdjacentHTML("beforeend", noDataHtml);
  }
}

function clearGamesList() {
  document.getElementById("gamesContainer").innerHTML = "";
}

function toggleFetchingAnimation(fetching) {
  const searchButton = document.getElementById("searchButton");
  if (fetching) {
    searchButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Fetching...';
  } else {
    searchButton.innerHTML = "Search";
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
