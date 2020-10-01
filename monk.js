class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status = "playing", specialOffensive = false, specialManaMin = 25, shield, hasPlayed = false) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin, shield, hasPlayed)
  }

  special = () => {
    console.log(`${this.name} lance heal (heal de 8)`)
    this.hp += 8;
    this.mana -= 25;
  }
}