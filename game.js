class Game {
  constructor(turnLeft = 10, currentTurn = 1, players = [], turnPlayers = [], status = []) {
    this.turnLeft = turnLeft,
    this.currentTurn = currentTurn,
    this.players = players,
    this.turnPlayers = turnPlayers,
    this.status = status
  }

  skipTurn = (turnLeft) => {
    this.turnLeft -= 1;
    this.currentTurn += 1
  }

  startTurn = () => {
    console.log(`------- TOUR ${this.currentTurn} -------`);
    if (this.status.length === 0) {
      this.status.push(0)
    } else if (this.status[this.status.length -1] === 1) {
      this.status.push(0)
    } else if (this.status[this.status.length -1] === 0){
      this.status.push(1)
    }
  }

  deadPlayer = (attacker) => {
    this.players.filter(victim => {
      if (victim.hp < 1 && victim.status !== "loser") {
        console.log(`${victim.name} est mort ! ${attacker.name} reçoit 20 points de mana !`)
        attacker.mana += 20
        victim.status = "loser"
      }
    });
  }

  watchStats = () => {
    this.players.map(function(player) {
      if (player.status === "loser") {
        console.log(`${player.name} a été éliminé`)
      } else {
      console.log(`${player.name} est ${player.constructor.name} et a ${player.hp} pv, ${player.dmg} points d'attaque, et ${player.mana} de mana`);
      }
    })
  }

  playerAboutToAttack = () => {
    let playersLeft = this.players.filter(player => player.status !== "loser")
    let randomValue = Math.floor(Math.random() * playersLeft.length);
    while (this.turnPlayers.includes(randomValue)) {
      randomValue = Math.floor(Math.random() * playersLeft.length);
    }
    let aboutToAttack = playersLeft[randomValue];
    this.turnPlayers.push(randomValue)
    console.log(`It's time for ${aboutToAttack.name} to play !`)
    return aboutToAttack
  }

  whatYouWannaDo = (attacker) => {
    let attack_choice = prompt(`Que souhaitez vous faire ${attacker.name}? (attaque basique : A, pouvoir spécial : B, voir l'état des joueurs: C)`, "A");
      if (attack_choice == "A") {
        return "A"
      } else if (attack_choice == "B") {
        return "B"
      } else if (attack_choice == "C") {
        this.watchStats()
        return this.whatYouWannaDo(attacker)
      } else {
        return this.whatYouWannaDo(attacker)
      }

  }
  
  whoToAttack = (attacker, choice) => {
    let playersNames = this.players
      .filter(player => ((player.name !== attacker.name) && (player.status !== "loser")))
      .map(player => player.name);
    if (choice === "A") {
      let victim = prompt(`Qui souhaites-tu attaquer ? ${playersNames.join(" ; ")}`);
      let playersLeft = this.players.filter(player => ((player.name !== attacker.name) && (player.status !== "loser")));
      playersLeft.filter(player => {
        if (player.name == victim) {
            attacker.dealDamage(player);
            player.takeDamage(attacker.dmg, this.status[this.status.length - 1]);
        }
      });
    } else if (choice === "B" && attacker.specialOffensive === true && attacker.mana >= attacker.specialManaMin) {
      let victim = prompt(`Qui souhaites-tu attaquer ? ${playersNames.join(" ; ")}`);
      let playersLeft = this.players.filter(player => ((player.name !== attacker.name) && (player.status !== "loser")));
      playersLeft.filter(player => {
        if (player.name == victim) {
            attacker.special(player, this.status[this.status.length - 1]);
            player.takeDamage(attacker.dmg, this.status[this.status.length - 1]);
          }
        });
    } else if (choice === "B" && attacker.specialOffensive === false && attacker.mana >= attacker.specialManaMin) {
      attacker.special();
    } else if (choice === "B"  && attacker.mana < attacker.specialManaMin) {
      console.log("Tu n'as pas assez de mana pour utiliser ton attaque spéciale !")
      return this.whoToAttack(attacker, "A")
    }
  }

  winners = () => {
    let loserToWinner = this.players
      .filter(player => player.status !== "loser")
      .forEach(player => player.status = "winner")
    let winners = this.players
    .filter(player => player.status === "winner")
    .map(player => player.name)
    console.log(`La partie est terminée ! Winner(s) : ${winners.join("  ")} !`);
  }

  powersTurn = () => {
    this.players.forEach(player => {
      if ((player.shield === true) && (player.specialActivator !== this.status[this.status.length - 1])){
        player.shield = false
      }
    });
  }

  havePlayed = () => {
    this.players.forEach(player => player.hasPlayed = false)
    return this.players
  }
}

  

// ---- GAME ----

let fighter = new Fighter("Grace");
let paladin = new Paladin("Ulder");
let monk = new Monk("Moana");
let berzerker = new Berzerker("Draven");
let assassin = new Assassin("Carl");
let wizard = new Wizard("Gandalf")

let game = new Game
game.players.push(fighter, paladin, monk, berzerker, assassin, wizard)

while (game.players.filter(player => player.status === "loser").length < (game.players.length - 1)) {
  if (game.currentTurn === 10) {
    break
  } else {
    game.startTurn();
    game.watchStats()
    let actualAttacker;
    while (game.turnPlayers.length < (game.players.filter(player => player.status !== "loser").length)) {
      actualAttacker = game.playerAboutToAttack()
      game.whoToAttack(actualAttacker, game.whatYouWannaDo(actualAttacker))
      game.deadPlayer(actualAttacker)
      actualAttacker.hasPlayed = true
    }
    game.powersTurn()
    game.turnPlayers = []
    game.skipTurn()
    game.havePlayed()
  }
}

game.winners();