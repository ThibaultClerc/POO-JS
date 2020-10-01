class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status = "playing", specialOffensive = true, specialManaMin = 40, shield, hasPlayed = false) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin, shield, hasPlayed)
  }

  special = (victim) => {
    console.log(`${this.name} lance Healing Lighting sur ${victim.name} (dmg à 4 et heal de 5)`)
    this.dm = 4;
    this.mana -= 40;
    this.hp += 5;
  }
}