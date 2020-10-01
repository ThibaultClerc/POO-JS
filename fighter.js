class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status = "playing", specialOffensive = true, specialManaMin = 20, shield = false, shieldValue = 2, specialActivator, hasPlayed = false) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin, specialActivator, shield, shieldValue, hasPlayed)
  }

  special = (victim, activator) => {
    console.log(`${this.name} lance Dark Vision (dmg à 5) sur ${victim.name} et prendra 2 dégâts de moins par coup reçu au prochain tour.`)
    this.dmg = 5;
    this.mana -= 20
    this.shield = true
    this.specialActivator = activator
    console.log(this.shield, "Fighter shield status")
  }
}