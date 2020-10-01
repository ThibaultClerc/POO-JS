class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status = "playing", specialOffensive = true, specialManaMin = 40) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin)
  }

  special = (victim) => {
    console.log(`${this.name} lance Healing Lighting sur ${victim.name} (dmg à 4 et heal de 5)`)
    victim.hp -= 4;
    this.mana -= 40;
    this.hp += 5;
  }
}