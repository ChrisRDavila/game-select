# Game Select

#### This javascript application will make an API call to free to play game database and parse out options based on genre input from the user

#### By Christopher Davila and Joseph Wilfong

## Technologies Used

* _webpack_
* _npm_
* _html_
* _javascript_
* _jist_
* _API_


## Description
### A javascript program with bootsrap stled UI that gathers html form input to make an API call to free to play games API.  With the fethced JSONified data, it filters the games by genres and uses math random to display five selcetions in the chosen genre displaying name and other information, as well as an image from the game and a link to a site where it can be played (free)

## Setup/Installation Requirements

* _clone repo [game-select](https://github.com/ChrisRDavila/game-select) from my github repository running 
```$ git clone https://github.com/ChrisRDavila/game-select```
_
* _create .env file and populate it with an API key from Free-tp-play-Database [RAPID API](https://rapidapi.com/digiwalls/api/free-to-play-games-database) in the following format_
```API_KEY=[YOUR-API-KEY]```
* _if you are wanting to create a repo, it would be most secure to then create a .gitignore file and add .env to it to ensure noone else getting your key before pushing anything to github_ 
* _run ```$ npm install dotenv-webpack@2.0.0 --save-dev``` to recognize the .env file in your application_
* _Installing all packages with ```$ npm install```._
* _Building the project using webpack with ```$ npm run build```_
* _Starting a development server with ```$ npm run start```_
* _Lint JS files in the src folder with ```$ npm run lint```_
* _Run tests with Jest using ```$ npm run test```_
* -APi set up/use_


## Known Bugs

* _Any known issues_
* _should go here_

## License