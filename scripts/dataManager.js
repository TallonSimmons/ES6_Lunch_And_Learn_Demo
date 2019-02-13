
export default {
  fetchSearchData: (parameter, value) => {
    const targetUrl = `https://www.boardgameatlas.com/api/search?${parameter}=${value}&client_id=fedCzdzOWG`;
    return fetch(targetUrl, {mode: 'no-cors'});
  },
  fetchPopularGames: () => {
    const targetUrl = `https://www.boardgameatlas.com/api/search?order_by=popularity&client_id=fedCzdzOWG`;
    return fetch(targetUrl, {mode: 'no-cors'});
  }
};
