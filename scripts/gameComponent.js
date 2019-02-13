function createGameComponent(game){
    const html = 
    `<div class="col-12 col-md-4 mb-3">
      <div class="card">
      <img class="card-img-top" src="${game.image_url}" alt="Card image cap" style="max-height: 180px; max-width: 180;">
      <div class="card-body">
        <h5 class="card-title">${game.name}</h5>
          <ul>
              <li>Players: ${game.min_players}-${game.max_players}</li>
              <li>Playtime: ${game.min_playtime}-${game.max_playtime} minutes</li>
              <li>Designer: ${game.designers[0]}</li>
              <li>MSRP: $${game.msrp}</li>
              <li>Current Price: $${game.price}</li>
          </ul>
        <a href="${game.url}" target="_blank" class="btn btn-primary">Go To Listing</a>
      </div>
    </div>
  </div>
    `

    return html;
}

export default class GameComponent {
    constructor(game){
        this.html = createGameComponent(game);
    }
    
}