function createGameComponent(game){
    const html = 
    `<div class="col-12 col-md-4 mb-3 d-flex">
      <div class="card flex-fill">
        <div class="col-12 m-auto" style="background: url(${game.image_url}); background-size: contain; background-repeat: no-repeat; background-position: center; max-height: 150px;">
        </div>
        <h5 class="card-title ml-2">${game.name}</h5>
      <div class="card-body bg-info text-white">
          <ul>
              <li>Players: ${game.min_players}-${game.max_players}</li>
              <li>Playtime: ${game.min_playtime}-${game.max_playtime} minutes</li>
              <li>Designer: ${game.designers[0]}</li>
              <li>Publisher: ${game.primary_publisher}</li>
              <li>MSRP: $${game.msrp}</li>
              <li>Current Price: $${game.price}</li>
          </ul>
        <a href="${game.url}" target="_blank" class="btn btn-warning">Go To Listing</a>
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