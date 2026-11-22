// We can use functions to return functions

/**
 * Make Adding Function
 * Closures Example
 * @param {number} firstNumber 
 * @returns {number}
 */
function makeAddingFunction(firstNumber) {
    // Because firstNumber is scoped anywhere inside this function block
    // we can use it within another function

    /**
     * @param {number} secondNumber
     * @returns {number}
     */
    return function (secondNumber) {
        // second number is scoped only inside this function block
        return firstNumber + secondNumber;
    }
}

const add5 = makeAddingFunction(5);
console.log(add5(4)); // 9

const add8 = makeAddingFunction(8);
console.log(add8(2)); // 10

const add79100105110 = makeAddingFunction(79100105110);
console.log(add79100105110(111687378)); // 79211792488

console.log(makeAddingFunction(2)(2));  // 4