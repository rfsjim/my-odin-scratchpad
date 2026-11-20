// Given the following objects

const head = {
  glasses: 1,
};

const table = {
  pen: 3,
  __proto__: head,
};

const bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

const pockets = {
  money: 2000,
  __proto__: bed,
};

/**
 * Use __proto__ to assign prototypes in a way that any property lookup will follow the path:
 * pockets → bed → table → head.
 * For instance,
 * pockets.pen should be 3 (found in table), and
 * bed.glasses should be 1 (found in head).
 * Answer the question:
 * is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
*/

console.log(pockets.pen);
console.log(bed.glasses);

// Both work at same speed

// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple


// Both have common stomach on hamster - fix by giving lazy and speedy their own stomach


// Does not get affected by a simple assignment
hamster = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  }
};

speedy = {
   __proto__: hamster
};

lazy = {
  __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>

// Giving each hampster its own stomach solves the push issue
hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

speedy = {
  __proto__: hamster,
  stomach: []
};

lazy = {
  __proto__: hamster,
  stomach: []
};

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>
