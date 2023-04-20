import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GameSelect from './game-select.js';

// Business Logic

function getGames(category) {
  let promise = GameSelect.getGames(category);
  promise.then(function(gameInfo) {
    displayGames(gameInfo);
  }, function(errorArray) {
    printError(errorArray); 
  });
}
//UI Logic

function displayGames(data) {
  const games = data[0];
  let gameList = "";
  const gameRandom = new Set();

  while (gameRandom.size < 4) {
    const randomIndex = Math.floor(Math.random() * games.length);
    if(!gameRandom.has(randomIndex)) {
      gameRandom.add(randomIndex);
      const game = games[randomIndex];
      const title = game.title;
      const description = game.short_description;
      const platform = game.platform;
      const image = game.thumbnail;
      const link = game.game_url;
      const publisher = game.publisher; 
      const release = game.release_date;
      const genre = game.genre;

      const card = `
      <div class ="card">
        <img src="${image}">
        <div class="card-body">
          <h5>${title}</h5>
          <p>Description: ${description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Platform(s): ${platform}</li>
            <li class="list-group-item">Genre(s): ${genre}</li>
            <li class="list-group-item">Release Date: ${release}</li>
            <li class="list-group-item">Publisher: ${publisher}</li>
          </ul>
          <a href="${link}" class="btn btn-primary" target="_blank" rel="noopener">Play Now</a>
        </div>
      </div>`
      ;
      gameList += card;
    }
  }

  const showGames = document.querySelector('#showGames');
  showGames.innerHTML = `<h2>Here are some games that match the category ${data[1]}:<h2>
  <div class="card-group">
   ${gameList}
  </div>`;
}



function printError(error) {
  document.querySelector('#showGames').innerText = `There was an error accessing our free games for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const category = document.querySelector('#gameList').value;
  const errorMessage = document.getElementById("error-message");
  document.getElementById("gif").style.visibility = "invisible"

  if  (!category) {
    errorMessage.innerText = "Please select a category"
  }

  getGames(category);
  document.getElementById("submit").textContent = "See More"
  document.getElementById("gif").style.visibilty = "invisible"
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);

});


