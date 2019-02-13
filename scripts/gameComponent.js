function createGameComponent(game){
    const html = 
    `<div class="card col-4">
    <img class="card-img-top" src="${game.image_url}" alt="Card image cap" style="max-height: 280px">
    <div class="card-body">
      <h5 class="card-title">${game.name}</h5>
        <ul>
            <li>MSRP: $${game.msrp}</li>
            <li>Current Price: $${game.price}</li>
        </ul>
      <a href="${game.url}" target="_blank" class="btn btn-primary">Go To Listing</a>
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