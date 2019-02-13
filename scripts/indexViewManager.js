import handler from "./proxyConfig.js";
import dataManager from "./dataManager.js";

function clearGamesList() {
  document.getElementById("gamesContainer").innerHTML = "";
}

export default class IndexViewManager {
  constructor() {
    const properties = {
      games: null,
      fetching: false
    };
    const propertiesProxy = new Proxy(properties, handler);
    this.properties = propertiesProxy;
    this.bindDomEvents();
    this.getPopularGames();
  }

  bindDomEvents() {
    this.bindOnClickEvents();
    this.bindOnKeyUpEvents();
  }

  bindOnClickEvents() {
    document.getElementById("searchButton").addEventListener("click", () => {
      this.getSearchData();
    });
  }

  bindOnKeyUpEvents() {
    document.getElementById("searchBox").addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        this.getSearchData();
      }
    });
  }

  getSearchData() {
    clearGamesList();
    const thisInstance = this;
    const searchTerm = document.getElementById("searchBox").value;
    const searchBy = document.getElementById("searchBy").value;
    const fetchRequest = dataManager.fetchSearchData(searchBy, searchTerm);
    
    thisInstance.properties.fetching = true;

    fetchRequest
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        thisInstance.properties.games = data.games;
        thisInstance.properties.fetching = false;
      });
  }

  getPopularGames() {
    const thisInstance = this;
    const fetchRequest = dataManager.fetchPopularGames();    
    thisInstance.properties.fetching = true;

    fetchRequest
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        thisInstance.properties.games = data.games;
        thisInstance.properties.fetching = false;
      });
  }
}
