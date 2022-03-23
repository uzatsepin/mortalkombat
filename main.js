'use strict';

const scorpion = {
  name: '',
  hp: 100,
  img: '',
  weapon: ['knife', 'katana', 'arrow', 'sword'],
  attack: function () {
    console.log(`Fight ${scorpion} vs Fight ${subzero}`);
  },
};

const subzero = {
  name: '',
  hp: 100,
  img: '',
  weapon: ['katana', 'sword', 'magic', 'ice'],
  attack: function () {
    console.log(`Fight ${scorpion} – Fight ${subzero}`);
  },
};

const arenas = document.querySelector('.arenas');

function createPlayer(player, playerName, health) {
  const player1 = document.createElement('div');
  player1.classList.add(player);

  const progressbar = document.createElement('div');
  progressbar.classList.add('progressbar');
  progressbar.appendChild(player);

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
}

console.log(arenas);
