export default {
  fetchSearchData: name => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://www.boardgameatlas.com/api/search?name=${name}&client_id=fedCzdzOWG`;
    return fetch(proxyUrl + targetUrl);
  }
};
