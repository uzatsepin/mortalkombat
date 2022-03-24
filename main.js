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

function createElement(tagName, className) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}

function createPlayer(player, PlayerObj) {
  const player1 = createElement('div', 'player'),
    progressbar = createElement('div', 'progressbar'),
    name = createElement('div', 'name'),
    life = createElement('div', 'life'),
    character = createElement('div', 'character'),
    img = createElement('img');

  player1.classList.add(player);
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
