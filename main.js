import {enemyAttack, playerAttack} from "./modules/attacks.js";
import {arenas, formFight, randomBtn} from "./modules/mainElements.js";
import {logs} from "./modules/logs.js";
import {chat} from "./modules/mainElements.js";
import {getRandom} from "./modules/attacks.js";
import Player from "./modules/Player.js";
import {createElement, createReloadButton} from "./modules/create.js";


let player1;
let player2;

class Game {
    getPlayers = async () => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res =>  res.json());
        return body;
    }
    start = async () => {
        const players = await this.getPlayers();
        const p1 = players[getRandom(players.length) - 1];
        const p2 = players[getRandom(players.length) - 1];
        player1 = new Player({
            ...p1,
            player: 1,
            rootSelector: 'arenas',
        });
        player2 = new Player({
            ...p2,
            player: 2,
            rootSelector: 'arenas',
        });
        player1.createPlayer();
        player2.createPlayer();

        generateLogs('start', player1, player2);
    }
}

const game = new Game();
game.start();

function getDate() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`;
}

function getTextLog(type, playerName1, playerName2) {
    switch(type) {
        case 'start':
            return logs[type]
                .replace('[player1]', playerName1)
                .replace('[player2]', playerName2)
                .replace('[time]', getDate);
            break;
        case 'hit':
            return logs[type][getRandom(logs[type].length -1) - 1]
                .replace('[playerKick]', playerName1)
                .replace('[playerDefence]', playerName2)
            break;
        case 'defence':
            return logs[type][getRandom(logs[type].length -1) - 1]
                .replace('[playerWins]', playerName1)
                .replace('[playerLose]', playerName2)
            break;
        case 'draw':
            return logs[type];
            break;
    }
}

function generateLogs(type, {name} = {}, {name: playerName2, hp} = {}, valueAttack) {
    let text = getTextLog(type, name, playerName2);
        switch (type) {
            case 'hit':
                text = `${getDate()} ${text} - ${valueAttack} [${hp}/100]`;
                break;
            case 'defence':
            case 'end':
            case 'draw':
                text = `${getDate()} ${text}`;
                break;
        }

    const el = `<p>${text}</p>>`

    chat.insertAdjacentHTML('afterbegin', el);
}

function showResult() {
    if(player2.hp === 0 || player1.hp === 0) {
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
}

function playerWin(name) {
    const winTitle = createElement('div', 'winTitle');
    winTitle.innerText = name + ' win';
    if(name === undefined) {
        winTitle.innerText = 'Draw (No one win)'
    }
    return winTitle;
}


formFight.addEventListener('submit', function (event) {
    event.preventDefault();
    const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = enemyAttack();
    const {hit, defence, value} = playerAttack();

   if(defence !== hitEnemy) {
       player1.changeHP(valueEnemy);
       player1.renderHP();
       generateLogs('hit', player2, player1, valueEnemy);
   } else {
       generateLogs('defence', player2, player1);
   }

   if(defenceEnemy !== hit) {
       player2.changeHP(value);
       player2.renderHP();
       generateLogs('hit', player1, player2, value);
   } else {
       generateLogs('defence', player1, player2)
    }

   showResult();
});


