/**
 * Tic Tac Toe Player Object Constructor
 * 
 * Object.getPrototypeOf() vs .prototype
 * The constructor function has an in-built .prototype property
 * .prototype is a property of functions that determines what a new object instance’s [[Prototype]] will be set to when the function is called with new.
 * .prototype is not for accessing an object’s [[Prototype]] - that’s what Object.getPrototypeOf() is for.
 * .prototype object
 * 
 * There is an instance object for the actual objects
 * This has an internal link to [[Prototype]]
 * Accessed through Object.getPrototypeOf(player1) 
 * 
 * Use Object.getPrototypeOf() to ‘get’ or view the [[Prototype]] of an object,
 * Use Object.setPrototypeOf() to ‘set’ or mutate it. 
 */

/**
 * Object Person an Prototypal Inheritance example
 * @param {*} name 
 */
function Person(name) {
    this.name = name;
}

/**
 * Function added to Person prototype
 * @returns Object Name
 */
Person.prototype.sayName = function() {
    return `Hello I am ${this.name}`;
};

/**
 * Player construction function
 * @param {*} name 
 * @param {*} marker 
 */
function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
}

/**
 * Add function to Player prototype
 * @returns player marker
 */
Player.prototype.getMarker = function() {
    return `My marker is ${this.marker}`;
};

// Player object in Prototypal Inheritance of Person
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player("Steve", "X");
const player2 = new Player("Not Steve", "O");

console.log(player1.sayName());
console.log(player2.sayName());

console.log(player1.getMarker());
console.log(player2.getMarker());

Object.getPrototypeOf(player1) === Player.prototype;
Object.getPrototypeOf(player2) === Player.prototype;