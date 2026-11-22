// Factory  functions work very similar to how constructors did, but with one key difference -
// they levy the power of closures.
// Instead of using the new keyword to create an object,
// factory functions set up and return the new object when you call the function.

/**
 * User Object Constructor
 * Can be refactored into a factory.
 * @param {string} name 
 */
function User(name) {
  this.name = name;
  this.discordName = "@" + name;
}

// Constructor - no return & requires new
// Factory Function - has return & does not require new

/**
 * @typedef {object} DiscordUserObject
 * @property {string} name
 * @property {string} discordName
 */

/**
 * Create User Factory Function
 * Refactored version of the User object constructor
 * @param {string} name 
 * @returns {DiscordUserObject}
 */
function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}


function objectShorthandExample () {
    // Object shorthand
    const name = 'Bob';
    const age = 28;
    const colour = 'red';

    /**
     * @typedef {Object} PersonObject
     * @property {string} name
     * @property {number} age
     * @property {string} colour
     */

    // Pre 2015
    /**
     * @type {PersonObject}
     */
    const thatObject = {
        name: name,
        age: age,
        colour: colour,
    };

    // Since 2015
    /** @type {PersonObject} */
    const nowFancyObject = {
        name,
        age,
        colour,
    };

    console.log({name, age, colour});
}

objectShorthandExample();

// deconstructing
const obj = {
    a: 1,
    b: 2,
};

const {a, b} = obj;

const array = [1, 2, 3, 4, 5];
const [zeroEle, firstEle] = array;

// using closures and deconstructing to create private functions & variables

/**
 * Create User Factory
 * with private variables & functions
 * using closures and deconstructing
 * @param {string} name 
 */
function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => { reputation++; };

    return {name, discordName, getReputation, giveReputation};
}

const josh = createUser('Josh');
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation(),
});

// Note - The only way to access private variables is via closure.

// return { name, discordName, reputation }; - Would not work as expected it would just create a plain object
// the long form would be return { name: name, discordName: discordName, reputation: reputation };

// Composition with factories

/**
 * Create Player Factory
 * As in constructors we can use inheritance
 * In factories we can mimic it or
 * Give it access to some or all of the properties of another object
 * Say a player gets access to some user properties
 * @param {string} name 
 * @param {number} level 
 */
function createPlayer(name, level) {
    const { getReputation, giveReputation} = createUser(name);

    const getLevel = () => level;
    const increaseLevel = () => { level++; };
    return {
        name,
        getReputation,
        giveReputation,
        getLevel,
        increaseLevel,
    };
}

// Creates its own user - takes and returns what it needs from it.
// Hiding the rest as private

/**
 * Create Player Factory
 * Uses the Object.assign method 
 * When you have multiple objects you want to take things from
 * @param {string} name 
 * @param {number} level 
 * @returns 
 */
function createPlayer(name, level) {
    const user = createUser(name);

    const getLevel = () => level;
    const increaseLevel = () => { level++; };
    return Object.assign(
        {},
        user,
        {
            getLevel,
            increaseLevel,
        },
    );
}

// IIFEs - Immediately Invoked Function Expression

// Function expression
() => console.log('Cow Say');

// Function expression is now an IIFE
(() => console.log('Cow Say'))();

/**
 * Calculator
 * A use of IIFEs is the pattern of wrapping “private” code inside an IIFE:
 * the module pattern. This is often done with factory functions
 */
const calculator = (() => {
    /**
     * @type {number}
     */
    let lastResult;

    /**
     * Add two given numbers
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    const add = (a, b) => {
        lastResult = a + b;
        return lastResult;
    };

    /**
     * Subtracts two given numbers
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    const subtract = (a, b) => {
        lastResult = a - b;
        return lastResult;
    };

    /**
     * Multiply two given numbers
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    const multiply = (a, b) => {
        lastResult = a * b;
        return lastResult;
    };

    /**
     * Divide two given numbers
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    const divide = (a, b) => {
        lastResult = a / b;
        return lastResult;
    };

    const getLastResult = () => lastResult;

    return {
        add,
        subtract,
        multiply,
        divide,
        getLastResult
    };
})();

console.log(calculator.add(3, 5));
console.log(calculator.subtract(10,5));
console.log(calculator.getLastResult());
console.log(calculator.multiply(5,5));
console.log(calculator.divide(10,2));