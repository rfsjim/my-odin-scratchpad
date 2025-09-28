/**
 * Take in an array.
 * For every even number, it will triple it.
 * Then it will sum all those even numbers.
 * @param {number[]} array 
 */
function sumOfTripledEvens(array)
{
    
    return array
        .filter(number => number % 2 === 0)
        .map(number => number * 3)
        .reduce((total, currentNumber) => total + currentNumber, 0) 
}

console.log(sumOfTripledEvens([1,2,3,4]));