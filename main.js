import {playerWin} from "./modules/playerWin.js";
import {createPlayer, createReloadButton} from "./modules/create.js";
import {player1, player2} from "./modules/players.js";
import {enemyAttack, playerAttack} from "./modules/attacks.js";
import {arenas, randomBtn, formFight} from "./modules/mainElements.js";

formFight.addEventListener('submit', function (event) {
    event.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();


   if(player.defence !== enemy.hit) {
       player1.changeHP(enemy.value);
       player1.renderHP();
   }

   if(enemy.defence !== player.hit) {
       player2.changeHP(player.value);
       player2.renderHP();
   }

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
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

