class Character {
  constructor(name, hp, dmg, mana, status = "playing", specialOffensive, specialManaMin) {
    this.name = name
    this.hp = hp,
    this.dmg = dmg,
    this.mana = mana,
    this.status = status,
    this.specialOffensive = specialOffensive,
    this.specialManaMin = specialManaMin
  }

  takeDamage = (damages) => {
    this.hp -= damages;
    if (this.hp < 1) {
      console.log(`${this.name} have been killed`);
      this.status = "loser";
    }
  }

  dealDamage = (victim) => {
    victim.hp -= this.dmg;
    if (victim.hp < 1) {
      victim.hp = 0
    }
    console.log(`${this.name} is attacking ${victim.name}. He deals him ${this.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left`)
  }

  stats = () => {
    if (this.hp > 1) {
    console.log(`${this.name} a ${this.hp} pv, ${this.dmg} points d'attaque, et ${this.mana} de mana`);
    } else {
      console.log(`${this.name} est mort !`);
    }
  }
}