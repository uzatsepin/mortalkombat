import {arenas} from "./mainElements.js";

export function createElement(tagName, className) {
    let element = document.createElement(tagName);
    if (className) {
        element.classList.add(className);
    }
    return element;
}

export function createReloadButton() {
    const reloadWrap = createElement('div', 'reloadWrap'),
        button = createElement('button', 'button');
    button.innerText = 'Restart';
    button.addEventListener('click', () => {
        window.location.reload();
    })
    reloadWrap.appendChild(button);
    arenas.appendChild(reloadWrap);
}

export function createPlayer(playerObj) {
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
