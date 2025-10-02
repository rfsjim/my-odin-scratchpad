/**
 * Filter unique array members
 * importance: 4
 * Let arr be an array.
 * Create a function unique(arr) that should return an array with unique items of arr.
 * For instance:
 * function unique(arr) {
 * // your code
 * }
 * let strings = ["Hare", "Krishna", "Hare", "Krishna",
 * "Krishna", "Krishna", "Hare", "Hare", ":-O"
 * ];
 * alert( unique(strings) ); // Hare, Krishna, :-O
 */

function unique(arr)
{
    let returnedArray = [];

    // iterate through arr
    // if current element is in returnedArray do nothing
    // otherwise put current element into returnedArray

    arr.forEach(element => {
        if (!returnedArray.includes(element))
        {
            returnedArray.push(element);
        }
    });

    return returnedArray
}