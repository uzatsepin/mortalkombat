// 'use strict';

const arenas = document.querySelector('.arenas');
const randomBtn = document.querySelector('button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  changeHP,
  elHP,
  renderHP,
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
  changeHP,
  elHP,
  renderHP,
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['katana', 'sword', 'magic', 'ice'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...');
  },
};

function getRandom(maxNum) {
  return Math.ceil(Math.random() * maxNum);
}

function elHP() {
  return document.querySelector('.player' + this.player+' .life')
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

function createReloadButton() {
  const reloadWrap = createElement('div', 'reloadWrap'),
        button = createElement('button', 'button');
        button.innerText = 'Restart';
  button.addEventListener('click', () => {
    window.location.reload();
  })
  reloadWrap.appendChild(button);
  arenas.appendChild(reloadWrap);

}

function changeHP(randomNumber) {
  this.hp -= randomNumber;

  if(this.hp <= 0) {
    this.hp = 0;
  }
}

function renderHP() {
  this.elHP().style.width = this.hp + '%'
}

randomBtn.addEventListener('click', function () {
  player1.changeHP(getRandom(20));
  player1.renderHP();

  player2.changeHP(getRandom(20));
  player2.renderHP();

 if(player1.hp === 0 || player2.hp === 0) {
   randomBtn.style.cursor = 'unset';
   randomBtn.disabled = true;
   createReloadButton();
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

