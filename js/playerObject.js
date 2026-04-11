/**
 * Tic Tac Toe Player Object Constructor
 */

function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;

    this.sayName = function() {
        return this.name;
    };
}