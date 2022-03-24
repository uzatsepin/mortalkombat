'use strict';

const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'katana', 'arrow', 'sword'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...');
  },
};

const player2 = {
  name: 'Subzero',
  hp: 55,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['katana', 'sword', 'magic', 'ice'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...');
  },
};

const arenas = document.querySelector('.arenas');

function createElementOnPage(tagName) {
  return document.createElement(tagName);
}

function createElementWithClass(tagName, varName) {
  document.createElement(tagName);
  varName.classList.add(`'${varName}'`);
  varName.appendChild(arenas);
}

let test = createElementWithClass('div', test);

function createPlayer(player, PlayerObj) {
  const player1 = createElementOnPage('div'),
    progressbar = createElementOnPage('div'),
    name = createElementOnPage('div'),
    life = createElementOnPage('div'),
    character = createElementOnPage('div'),
    img = createElementOnPage('img');

  player1.classList.add(player);
  progressbar.classList.add('progressbar');
  name.classList.add('name');
  life.classList.add('life');
  character.classList.add('character');
  img.src = PlayerObj.img;

  arenas.appendChild(player1);
  player1.appendChild(progressbar);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  player1.appendChild(character);
  character.appendChild(img);

  name.innerText = PlayerObj.name;
  life.style.width = PlayerObj.hp + '%';
}

createPlayer('player1', player1);
createPlayer('player2', player2);
