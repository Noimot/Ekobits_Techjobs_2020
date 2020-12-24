#### Exercises

###### Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:

```
function map(arr, fn) {
  let arr2 = [];
    for (let val of arr) {
        arr2.push(fn(val));
    }
    return arr2;
}
let mapAns = map([1, 2, 3, 4], function (val) {
    return val * 2
}); // [2,4,6,8]

console.log({mapAns})

```



###### Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:

```
let callbackFunction = function (val) {
    return val % 2 === 0
}

function reject(arr, fn) {
    let newArray = [];
    for (let num of arr) {
        if (!fn(num)) {
            newArray.push(num)
        };
    }
    console.log(newArray);
}

reject([1, 2, 3, 4], callbackFunction);

```