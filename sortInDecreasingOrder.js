/**
 * Sort in decreasing order
 * importance: 4
 * let arr = [5, 2, 1, -10, 8];
 * // ... your code to sort it in decreasing order
 * alert( arr ); // 8, 5, 2, 1, -10
 */

/**
 * Merge Sort
 * Uses Recursion to make a more efficient sort algorithm
 * If only one number
 *  Quit
 * Else
 *  Sort left half of number
 *  Sort right half of number
 *  Merge sorted halves
 * 
 * Divide - The algorithm starts with breaking up the array
 * into smaller and smaller pieces until one such sub-array
 * only consists of one element.
 * 
 * Conquer: The algorithm merges the small pieces of the array
 * back together by putting the lowest values first,
 * resulting in a sorted array.
 * 
 * Worst-case time complexity of O(n⋅log n) 
 * @param {*} arr array to be sorted
 * @returns sorted array
 */
function sortInDecreasingOrderCStyle(arr)
{
    if (arr.length > 1)
    {
        merge_sort(arr, 0, arr.length - 1);
    }

    return arr
}

/**
 * Merges two subarrays of arr
 * First subarray is arr[left..mid]
 * Second subarray is arr[mid+1..right]
 * @param {*} arr 
 * @param {*} left 
 * @param {*} mid 
 * @param {*} right 
 */
function merge(arr, left, mid, right)
{
    // initate counters and lengths of sub arrays
    let i, j, k;
    let n1 = mid - left + 1;
    let n2 = right - mid;

    // create temp arrays
    let leftArr = [], rightArr = [];

    // copy data into arrays
    for (i = 0; i < n1; i++)
    {
        leftArr[i] = arr[left + i];
    }

    for (j = 0; j < n2; j++)
    {
        rightArr[j] = arr[mid + 1 + j];
    }

    // merge temp array back into arr[left..right]
    i = 0;
    j = 0;
    k = left;

    while (i < n1 && j < n2)
    {
        if (leftArr[i] >= rightArr[j])
        {
            arr[k] = leftArr[i];
            i++;
        }
        else
        {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements of leftArr[], if any
    while (i < n1)
    {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    // Copy remaining elements of rightArr[] if any
    while (j< n2)
    {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}


function merge_sort(arr, left, right)
{
    if (left < right)
    {
        // get midpoint
        let mid = Math.floor(left + (right - left) /2);

        // sort first and second halves
        merge_sort(arr, left, mid);
        merge_sort(arr, mid + 1, right);

        // merge the sorted halves
        merge(arr, left, mid, right);
    }
}

/**
 * Concise Merge Sort (Decreasing Order) Functional Style
 * Modern JS Style
 * Uses .slice() to avoid mutating the original array.
 * Recursively splits until size 1, then merges back in descending order.
 * Uses .shift() to grab and remove the smallest values (most performant for small arrays).
 */
function sortInDecreasingOrderJSStyle(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = sortInDecreasingOrderJSStyle(arr.slice(0, mid));
  const right = sortInDecreasingOrderJSStyle(arr.slice(mid));

  return mergeDescending(left, right);
}

function mergeDescending(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] >= right[0] ? left.shift() : right.shift());
  }
  return result.concat(left, right);
}

/**
 * Minimalist decreasing
 * arr.length >> 1 is the same as Math.floor(arr.length / 2) (bitwise fast floor).
 * Splits into l and r — recursively sorted.
 * Merges with a simple sort((a, b) => b - a) instead of writing a merge function.
 * It’s not the most performant for huge arrays due to .sort() on concatenated arrays, but it's elegant.
 */
const sortInDecreasingOrderMinimalist = arr =>
  arr.length <= 1
    ? arr
    : (([l, r] = [
        sortInDecreasingOrderMinimalist(arr.slice(0, arr.length >> 1)),
        sortInDecreasingOrderMinimalist(arr.slice(arr.length >> 1))
      ]),
      [...l, ...r].sort((a, b) => b - a));

/**
 * The built-in .sort() method in JavaScript
 * Can be insertion sort OR TimSort depending on array size
 */
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);