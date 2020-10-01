class Character {
  constructor(name, hp, dmg, mana, status = "playing", specialOffensive, specialManaMin, specialActivator, shield, shieldValue, hasPlayed = false) {
    this.name = name
    this.hp = hp,
    this.dmg = dmg,
    this.mana = mana,
    this.status = status,
    this.specialOffensive = specialOffensive,
    this.specialManaMin = specialManaMin,
    this.specialActivator = specialActivator,
    this.shield = shield,
    this.shieldValue = shieldValue,
    this.hasPlayed = hasPlayed
  }

  takeDamage = (damages, activator) => {
    if ((typeof this.shield !== 'undefined') && (this.shield === true) && (this.constructor.name !== 'Assassin')) {
      let finalDamages = (damages - (this.shieldValue))
      this.hp -= finalDamages
      if (this.hp >= 1) {
        console.log(`He deals him ${finalDamages} damages. ${this.name} got ${this.hp} lifepoints left`)
      }
    } else if ((this.shield === true) && (this.constructor.name === 'Assassin') && (this.specialActivator !== activator)) {
      let finalDamages = 0
      console.log(this.hp, "Points de vie de l'assassin quand il se fait attaquer avec son pouvoir activé")
      if (this.hp >= 1) {
        console.log(`${this.name} a activé Shadow Hit et ne prend donc pas de dégats`)
      }
    } else {
      let finalDamages = damages;
      this.hp -= finalDamages
      if (this.hp >= 1) {
        console.log(`He deals him ${finalDamages} damages. ${this.name} got ${this.hp} lifepoints left`)
      }
    }
  }

  dealDamage = (victim) => {
    console.log(`${this.name} is attacking ${victim.name}.`)
  }

  stats = () => {
    if (this.hp > 1) {
    console.log(`${this.name} a ${this.hp} pv, ${this.dmg} points d'attaque, et ${this.mana} de mana`);
    } else {
      console.log(`${this.name} est mort !`);
    }
  }
}