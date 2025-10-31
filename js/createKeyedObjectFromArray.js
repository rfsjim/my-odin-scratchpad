/**
 * Create keyed object from array
 * Let’s say we received an array of users in the form {id:..., name:..., age:... }.
 * Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
 * Such function is really handy when working with server data.
 * In this task we assume that id is unique. There may be no two array items with the same id.
 * Please use array .reduce method in the solution.
 */

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/**
 * Groups User by their ID returning a keyed object from array
 * @param {object []} arr Array of User Objects 
 * @returns {object} keyed object
 */
function groupById(arr)
{
    return arr
        .reduce((obj, item) => {
            obj[item.id] = item;

            return obj;
        }, {});
}