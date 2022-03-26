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

function randomHP(max) {
  return Math.ceil(Math.random() * max);
}

function playerWin(name) {
  const winTitle = createElement('div', 'winTitle');
  winTitle.innerText = name + ' win';
  if(name === undefined) {
    winTitle.innerText = 'Draw (No one win)'
  }
  return winTitle;
}

function createElement(tagName, className) {
  let element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function createPlayer(playerObj) {
  const player = createElement('div', 'player' + playerObj.player),
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
  player.hp -= randomHP(20);
  playerLife.style.width = player.hp + '%';


  if (player.hp < 0) {
    player.hp = 0;
    playerLife.style.width = 0+'%';
  }
}

randomBtn.addEventListener('click', function () {
  changeHP(player1);
  changeHP(player2);

 if(player1.hp === 0 || player2.hp === 0) {
   randomBtn.style.cursor = 'unset';
   randomBtn.disabled = true;
 }
  if (player1.hp === 0 && player1.hp < player2.hp) {
    arenas.appendChild(playerWin(player2.name))
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    arenas.appendChild(playerWin(player1.name))
  } else if (player1.hp === 0 && player2.hp === 0) {
    arenas.appendChild(playerWin())
  }
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

