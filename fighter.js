class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status = "playing", specialOffensive = true, specialManaMin = 20) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin)
  }

  special = (victim) => {
    console.log(`${this.name} lance Dark Vision (dmg à 5) sur ${victim.name} et prendra 2 dégâts de moins par coup reçu au prochain tour.`)
    victim.hp -= 5;
    this.mana -= 20
  }
}