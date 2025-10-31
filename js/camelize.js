/**
  * Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
  * That is: removes all dashes, each word after dash becomes uppercased
  * camelize("background-color") == 'backgroundColor';
  * camelize("list-style-image") == 'listStyleImage';
  * camelize("-webkit-transition") == 'WebkitTransition';
  */

function camelize(str)
{
  // split string
  // find element with "-"
  // make next character uppercase
  // filter dash
  
  let arr = str.split("");

  arr.forEach((element, index) => {
    if (element === "-")
    {
      arr[index + 1] = arr[index + 1].toUpperCase();
    }
  });

  return arr
    .filter(element => element !== '-')
    .join("")
}

/**
 * Published solution
 * function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
 */