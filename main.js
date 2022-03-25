'use strict';

const arenas = document.querySelector('.arenas');
const randomBtn = document.querySelector('button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'katana', 'arrow', 'sword'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...');
  },
};

const player2 = {
  player: 2,
  name: 'Subzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['katana', 'sword', 'magic', 'ice'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...');
  },
};

function randomHP() {
  return Math.ceil(Math.random() * 20);
}

function playerLoose(name) {
  const loseTitle = createElement('div', 'loseTitle');
  loseTitle.innerText = name + ' lose';
  return loseTitle;
}

function playerWin(name) {
  const loseTitle = createElement('div', 'loseTitle');
  loseTitle.innerText = name + ' Win';
  return loseTitle;
}

function createElement(tagName, className) {
  let element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function createPlayer(playerObj) {
  const player = createElement('div', 'player'+playerObj.player),
        progressbar = createElement('div', 'progressbar'),
        name = createElement('div', 'name'),
        life = createElement('div', 'life'),
        character = createElement('div', 'character'),
        img = createElement('img');

  img.src = playerObj.img;

  player.appendChild(progressbar);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  player.appendChild(character);
  character.appendChild(img);

  name.innerText = playerObj.name;
  life.style.width = playerObj.hp + '%';

  return player;
}

function changeHP(player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= randomHP();
  playerLife.style.width = player.hp + '%';

  if(player.hp < 0) {
    player.hp = 0;
    arenas.appendChild(playerLoose(player.name));
  }
}



randomBtn.addEventListener('click', function () {
  changeHP(player1);
  changeHP(player2);
})

arenas.appendChild(createPlayer(player2));
arenas.appendChild(createPlayer(player2));
