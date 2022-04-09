import {createElement} from "./create.js";

export function playerWin(name) {
    const winTitle = createElement('div', 'winTitle');
    winTitle.innerText = name + ' win';
    if(name === undefined) {
        winTitle.innerText = 'Draw (No one win)'
    }
    return winTitle;
}