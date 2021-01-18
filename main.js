let cardsArray = [
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

  // grab div with id of game-board and assign to a variable game
  let game = document.getElementById('game-board');
  // create a section element and assign it to variable grid
  let grid = document.createElement('section');
  // give section element a class of grid
  grid.setAttribute('class', 'grid');
  // append the grid section to the game-board div
  game.appendChild(grid);

  // loop through each item in cardsArray
  for(i = 0; i < cardsArray.length; i++) {
    // create a div element and assign it to variable card
    let card = document.createElement('div');
    // apply a card class to that div
    card.classList.add('card');
    // set the data-name attribute of the div to cardsArray[i].name
    card.dataset.name = cardsArray[i].name;
    // apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${cardsArray[i].img})`;
    // append the div to the grid section
    grid.appendChild(card);

  }