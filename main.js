let cardsArray = [
  {'name': '1up', 'img': './img/1up.png'},
  {'name': 'blueshell', 'img': './img/blueshell.png'},
  {'name': 'bobomb', 'img': './img/bobomb.png'},
  {'name': 'bulletbill', 'img': './img/bulletbill.png'},
  {'name': 'coin', 'img': './img/coin.png'},
  {'name': 'goomba', 'img': './img/goomba.png'},
  {'name': 'luigi', 'img': './img/luigi.png'},
  {'name': 'mario', 'img': './img/mario.png'},
  {'name': 'mushroom', 'img': './img/mario.png'},
  {'name': 'peach', 'img': './img/peach.png'},
  {'name': 'star', 'img': './img/star.png'},
  {'name': 'thwomp', 'img': './img/thwomp.png'},
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

  // create front of card
  let front = document.createElement('div');
  front.classList.add('front');

  //create back of card
  let back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${gameGrid[i].img})`
  
  //append card to grid
  grid.appendChild(card);
  card.append(front);
  card.append(back);
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
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      // assign second guess
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
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