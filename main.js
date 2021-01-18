var cardsArray = [
  {'name': 'CSS', 'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true'},
  {'name': 'HTML', 'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true'},
  {'name': 'jQuery', 'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true'},
  {'name': 'JS', 'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true'},
  {'name': 'Node', 'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true'},
  {'name': 'Photo Shop', 'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true'},
  {'name': 'PHP', 'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true'},
  {'name': 'Python', 'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true'},
  {'name': 'Ruby', 'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true'},
  {'name': 'Sass', 'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true'},
  {'name': 'Sublime', 'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true'},
  {'name': 'Wordpress', 'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true'}
];

// duplicate cardsArray to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);
  
// randomize grid on reload
gameGrid.sort(function() {
  return 0.5 - Math.random();
})

// grab div with id of game-board and assign to a variable game
let game = document.getElementById('game-board');
// create a section element and assign it to variable grid
let grid = document.createElement('section');
// give section element a class of grid
grid.setAttribute('class', 'grid');
// append the grid section to the game-board div
game.appendChild(grid);

// loop through each item in cardsArray
for(i = 0; i < gameGrid.length; i++) {
  // create a div element and assign it to variable card
  let card = document.createElement('div');
  // apply a card class to that div
  card.classList.add('card');
  // set the data-name attribute of the div to cardsArray[i].name
  card.dataset.name = gameGrid[i].name;
  // apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${gameGrid[i].img})`;
  // append the div to the grid section
  grid.appendChild(card);
}

let firstGuess = '';
let secondGuess = '';
// set clickedCount to 0
let clickedCount = 0;
let previousTarget = null;
let delay = 1200;

// add match CSS
let match = function() {
  let selected = document.querySelectorAll('.selected');
  // loop through the array like object containing 'selected' class
  for(let i = 0; i < selected.length; i++) {
    selected[i].classList.add('match');
  }
};

// reset guesses after two attempts
let resetGuesses = function() {
  firstGuess = '';
  secondGuess = '';
  clickedCount = 0;
  previousTarget = null;

  let selected = document.querySelectorAll('.selected');
  for(let i = 0; i < selected.length; i++) {
    selected[i].classList.remove('selected');
  }
};
 
// add event listener to grid
grid.addEventListener('click', function(event) {
  // declare variable to target our clicked item
  let clicked = event.target;
  // do not allow the grid section to be selected
  if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
    return;
  }
  // add 'selected' class if the count is less than 2
  if(clickedCount < 2) {
    clickedCount++
    if(clickedCount === 1) {
      // assign first guess
      firstGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    } else {
      // assign second guess
      secondGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    }
    // if both guesses are not empty
    if(firstGuess !== '' && secondGuess !== '') {
      // and firstGuess matches secondGuess
      if(firstGuess === secondGuess) {
        // run match funtion
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }  
});