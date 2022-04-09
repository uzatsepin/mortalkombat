import {changeHP, elHP, renderHP} from "./changesHP.js";

export const player1 = {
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

export const player2 = {
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