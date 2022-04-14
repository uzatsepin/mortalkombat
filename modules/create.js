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

