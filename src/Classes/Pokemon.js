class Pokemon {
  constructor(
    pokemonObject,
    level = 1,
    xp = 0,
    encounter = false,
    favorite = false
  ) {
    this.name = pokemonObject.name;
    this.stats = pokemonObject.stats;
    this.life = pokemonObject.stats[0].base_stat;
    this.max_life = pokemonObject.stats[0].base_stat;
    this.attack = pokemonObject.stats[1].base_stat;
    this.defence = pokemonObject.stats[2].base_stat;
    this.speed = pokemonObject.stats[5].base_stat;
    this.id = pokemonObject.id;
    this.type = pokemonObject.types;
    this.image = pokemonObject.sprites.other["official-artwork"].front_default;
    this.encounter = encounter;
    this.favorite = favorite;
    this.level = level;
    this.xp = xp;
    this.nextLevelXp = 100 + 50 * (this.level - 1);
  }

  gainXp(amount) {
    this.xp += amount;
    if (this.xp >= this.nextLevelXp) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level += 1;
    this.life += 5;
    this.attack += 2;
    this.defense += 2;
    this.speed += 2;
    this.nextLevelXp = 100 + 50 * (this.level - 1);
    this.xp = 0;
    console.info(`${this.name} level up to ${this.level} !`);
  }

  getFirstType() {
    return this.type[0].type.name;
  }

  getSecondType() {
    return this.type[1].type.name;
  }

  getTypes() {
    return this.type.map((typeObject) => typeObject.type.name);
  }

  setLife(value) {
    this.life = value;
  }

  fight(defender) {
    if (defender instanceof Pokemon) {
      setTimeout(() => {
        const attackPoints = this.getRandomInt(this.attack);

        const damages = Math.max(
          attackPoints - Math.round(defender.defence * 0.5),
          0
        );

        defender.setLife(Math.max(defender.life - damages, 0));
        console.warn(attackPoints, damages, defender.life, this.life);
        if (defender.isAlive()) {
          defender.fight(this);
          console.info(`${defender.name} is alive`);
        }
      }, 1000);
    }
    return defender.life;
  }

  getRandomInt(max) {
    console.info(this.attack);
    return 1 + Math.floor(Math.random() * max);
  }

  isAlive() {
    return this.life > 0;
  }
}

export default Pokemon;
