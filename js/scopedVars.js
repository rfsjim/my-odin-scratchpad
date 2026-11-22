// Where is a certain variable available to me?

// Global Variable
let globalAge = 23;

/**
 * Print Age
 * Example of function variables and block scope beacuse of the curly brackets
 * @param {number} age
 * @returns {void} 
 */
function printAge(age) {
    // Function scoped variiable
    var varAge = 34;

    // More curly brackets block scoped variables
    if (age > 0) {
        // scoped in the if block
        const constAge = age * 2;
        console.log(constAge);
    }

    // This won't work - as it is out of scope
    console.log(constAge);
}

printAge(globalAge);

// This will throw error - out of scope variable
console.log(varAge);
