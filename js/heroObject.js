/**
 * Hero Object
 * Example Object showing prototype usage in JS
 * For a fictional text based RPG with several different classes of characters
 */

/**
 * Initialise a constructor function for a new Hero
 * 
 * @param {string} name 
 * @param {number} level 
 */
function Hero(name, level) {
    
    this.name = name;
    this.level = level;
}

const hero1 = new Hero('Bjorn', 1);

console.log(hero1);

Object.getPrototypeOf(hero1);

/**
 * Greet - Common Method for all Hero classes
 * 
 * @returns {void}
 */
Hero.prototype.greet = function () {
    console.log(`${this.name} says hello`);
};

hero1.greet();

/**
 * A Warrior Class
 * 
 * @param {string} name
 * @param {number} level
 * @param {string} weapon
 */
function Warrior(name, level, weapon) {
    if (!new.target) {
        throw new Error("Need to use a new object assignment");
    }

    Hero.call(this, name, level);
    this.weapon = weapon;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

/**
 * A Healer Class
 * 
 * @param {string} name
 * @param {number} level
 * @param {string} spell
 */
function Healer(name, level, spell) {
    if (!new.target) {
        throw new Error("Need to use a new object assignment");
    }

    Hero.call(this, name, level);
    this.spell = spell;
}

Object.setPrototypeOf(Healer.prototype, Hero.prototype);

/**
 * Attack Method - Warrior only method
 * 
 * @returns {void}
 */
Warrior.prototype.attack = function () {
    return `${this.name} attacks with ${this.weapon}`;
}

/**
 * Heal Method - Healer only method
 * 
 * @returns {void}
 */
Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}`;
}

const hero2 = new Warrior('Bob', 1, 'axe');
const hero3 = new Healer('Kanin', 1, 'cure');

hero2.attack();
hero3.heal();