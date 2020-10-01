class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status = "playing", specialOffensive = true, specialManaMin = 25, hasPlayed = false) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin, hasPlayed)
  }

  special = (victim) => {
    console.log(`${this.name} lance Fireball (dmg à 7) sur ${victim.name}`)
    this.dmg = 7;
    this.mana -= 25
  }
}