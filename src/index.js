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

  for(let i=0; i < 5; i ++) {
    const game = games[i];
    const title = game.title;
    const description = game.short_description;
    const platform = game.platform;


    gameList += `
    <div>
      <p>Title: ${title}</p>
      <p>Description: ${description}</p>
      <p>Platform: ${platform}</p>
    </div>`;
  }

  const showGames = document.querySelector('#showGames');
  showGames.innerHTML = `Here are some games that match the category ${data[1]}: ${gameList}`;
}



function printError(error) {
  document.querySelector('#showGames').innerText = `There was an error accessing our free games for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const category = document.querySelector('#gameList').value;
  getGames(category);
  

}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});


