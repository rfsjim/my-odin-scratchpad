// Basic take two arguments and add togther
function addTwoNumbers(a, b)
{
    return a + b
}

// Doesn't scale very well - to handle six arguments
function addSixNumbers(a = 0, b = 0, c = 0, d = 0, e = 0, f = 0)
{
    return a + b + c + d +e + f
}

// Better to take an indefinite number of arguments as an actual array.
function addIndefiniteNumber(...numbers)
{
    return numbers
        .reduce((sum, current) => sum + current, 0)
}

// Add Seven
function add7(number)
{
    return number + 7
}

// Multiply
function multiply(a, b)
{
    return a * b
}

// Capitalise
function capitalise(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

// Last Letter
function lastLetter(string)
{
    return string.at(-1)
}