class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status = "playing", specialOffensive = true, specialManaMin = 20, shield = false, shieldValue, specialActivator, hasPlayed = false) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin, specialActivator, shield, shieldValue, hasPlayed)
  }

  special = (victim, activator) => {
    console.log(`${this.name} lance Shadow Hit sur ${victim.name} (Inflige 7 de dmg, perd 7 pv, et pas de dégats au prochain tour)`)
    this.dmg = 7;
    if (victim.hp < 1) {
      this.hp -= 7
    }
    this.mana -= 20;
    this.shield = true;
    this.specialActivator = activator
  }
}