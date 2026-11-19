/**
 * Hero Object
 * Example Object showing prototype usage in JS
 * For a fictional text based RPG with several different classes of characters
 */

// 
/**
 * Initialise a constructor function for a new Hero
 * 
 * @param {string} name 
 * @param {number} level 
 */
function Hero(name, level) {
    if (!new.target) {
        throw new Error("Need to use a new object assignment");
    }
    this.name = name;
    this.level = level;
}

let hero1 = new Hero('Bjorn', 1);

console.log(hero1);

Object.getPrototypeOf(hero1);

Hero.prototype.greet = function () {
    console.log(`${this.name} says hello`);
};
