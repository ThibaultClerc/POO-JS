class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status = "playing", specialOffensive = true, specialManaMin = 20) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin)
  }

  special = (victim) => {
    console.log(`${this.name} lance Shadow Hit sur ${victim.name} (pas de dmg ce tour, puis 7)`)
    victim.hp -= 7;
    this.dmg -= 7;
    this.mana -= 20;
  }
}