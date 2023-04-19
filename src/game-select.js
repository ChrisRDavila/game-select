export default class GameSelect {
  static getGames(category) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}&rapidapi-key=${process.env.API_KEY}`;
      request.addEventListener("load", function() {
        const catOptions = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([catOptions, category]);
        } else {
          reject([this, catOptions, category]);
        }
      });
      request.open("GET", url, true);
      request.send();
            
    });
  }
}
