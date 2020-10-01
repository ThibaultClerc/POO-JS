class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status = "playing", specialOffensive = true, specialManaMin = 25) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin)
  }

  special = (victim) => {
    console.log(`${this.name} lance Fireball (dmg à 7) sur ${victim.name}`)
    victim.hp -= 7;
    this.mana -= 25
  }
}