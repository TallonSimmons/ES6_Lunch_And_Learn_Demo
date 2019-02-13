import handler from "./proxyConfig.js";
import dataManager from "./dataManager.js";

export default class IndexViewManager {
  constructor(games) {
    const properties = {
      games: null,
      fetching: false
    };
    const propertiesProxy = new Proxy(properties, handler);
    this.properties = propertiesProxy;
    this.properties.games = games;
    this.bindDomEvents();
  }

  bindDomEvents(){
    this.bindOnClickEvents();
    this.bindOnKeyUpEvents();
  }

  bindOnClickEvents() {
    document.getElementById("searchButton").addEventListener("click", () => {
      this.displaySearchItems();
    });
  }

  bindOnKeyUpEvents() {
    document.getElementById("searchBox").addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        this.displaySearchItems();
      }
    });
  }

  displaySearchItems() {
    const thisInstance = this;
    const searchBox = document.getElementById("searchBox");
    const fetchRequest = dataManager.fetchSearchData(searchBox.value);
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
