export default class GameSelect {
  static category() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.freetogame.com/api/games?category`;
      request.addEventListener("load", function() {
        if (this.status === 200) {
          const categories = JSON.parse(request.responseText);
          resolve(categories);
        } else {
          reject(Error(this.statusText));
        }
      });
      request.open("GET", url, true);
      request.send();
    }
  }
}