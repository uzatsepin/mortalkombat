export function changeHP(randomNumber) {
    this.hp -= randomNumber;

    if(this.hp <= 0) {
        this.hp = 0;
    }
}

export function renderHP() {
    this.elHP().style.width = this.hp + '%'
}

export function elHP() {
    return document.querySelector('.player' + this.player+' .life')
}
