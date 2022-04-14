import {createElement} from "./create.js";

class Player {
    constructor(props) {
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.selector = `player${this.player}`
        this.rootSelector = props.rootSelector;
    }
    elHP = () => {
        return document.querySelector(`.${this.selector} .life`);
    }
    changeHP = (randomNumber) => {
        this.hp -= randomNumber;
        if(this.hp <= 0) {
            this.hp = 0;
        }
    }
    renderHP = () => {
        this.elHP().style.width = this.hp + '%'
    }
    createPlayer = () => {
        const $player = createElement('div', this.selector),
            progressbar = createElement('div', 'progressbar'),
            $name = createElement('div', 'name'),
            life = createElement('div', 'life'),
            character = createElement('div', 'character'),
            $img = createElement('img');

        $img.src = this.img;

        $player.appendChild(progressbar);
        progressbar.appendChild(life);
        progressbar.appendChild($name);
        $player.appendChild(character);
        character.appendChild($img);

        $name.innerText = this.name;
        life.style.width = this.hp + '%';

        const $root = document.querySelector(`.${this.rootSelector}`);
        $root.appendChild($player);
        return $player;
    }
}

export default Player;

// export const player1 = new Player({
//     player: 1,
//     name: 'Scorpion',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//     rootSelector: 'arenas'
// })
//
// export const player2 = new Player({
//     player: 2,
//     name: 'Subzero',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//     rootSelector: 'arenas'
// });
