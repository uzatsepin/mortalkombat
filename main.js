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

function createElement(tagName) {
  return document.createElement(tagName);
}

function createElementWithClass(tagName, className) {
  // document.createElement(tagName);
  // varName.classList.add(`'${varName}'`);
  // varName.appendChild(arenas);

  let element = document.createElement(tagName);
  element.classList.add(`'${className}'`);
  return element;
}

createElementWithClass('div', 'test');

function createPlayer(player, PlayerObj) {
  const player1 = createElement('div'),
    progressbar = createElement('div'),
    name = createElement('div'),
    life = createElement('div'),
    character = createElement('div'),
    img = createElement('img');

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
