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
  hp: 85,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['katana', 'sword', 'magic', 'ice'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...');
  },
};

const arenas = document.querySelector('.arenas');

function createPlayer(player, playerName, health) {
  const player1 = document.createElement('div');
  player1.classList.add(player);

  const progressbar = document.createElement('div');
  progressbar.classList.add('progressbar');
  progressbar.appendChild(player1);

  const name = document.createElement('div');
  name.classList.add('name');
  name.appendChild(progressbar);
  name.textContent = playerName;

  const life = document.createElement('div');
  life.classList.add('life');
  life.style.width = health;
  life.appendChild(progressbar);

  const character = document.createElement('div');
  character.classList.add('character');
  const img = document.createElement('img');
  img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
  img.appendChild(character);

  arenas.appendChild(player);
}

createPlayer('player1', 'Scorpion', 85);
