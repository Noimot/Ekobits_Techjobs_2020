### Higher Order Functions, Timers, and Closures Exercises. 

- Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

```
function countdown(num) {
    let intervalid = setInterval(function () {
        if (num > 0) {
            console.log(num--);
        }
        else if (num == 0) {
            console.log("DONE");
            clearInterval(intervalid)
        }
    }, 1000)

}
countdown(5);

```


- Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

```

function randomGame() {
    let counter = 0;
    let intervalId = setInterval(function () {
        if (Math.random() <= 0.75) {
            counter++;
        }
        else if (Math.random() > 0.75) {
            counter++;
            clearInterval(intervalId)
        }
        console.log(counter)
    }, 1000)
}
randomGame();

```


- Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

```
function isEven(val) {
    return val % 2 === 0 ? true : false
}
isEven(1);

```


- Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

```
function isOdd(val) {
    return val % 2 === 0 ? true : false
}
isOdd(1);

```


- Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false

```

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(isPrime(16));

```

- Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

```
function isEven(num) {
    return num % 2 === 0 ? true : false;
}

function isOdd(num) {
    return num % 2 !== 0 ? true : false; 
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
function numberFact(num, fn) {
    return (fn(num));
}

console.log(numberFact(4,isEven));

```


- Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

```

function find(arr, fn) {
    for (let num of arr) {
        if (fn(num)){
            return num;
        }
    }
}
function findNum(val) {
    return val >= 10;
}
console.log(find([2, 3, 20, 8], findNum));

```


- Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.

```
function findIndex(arr, fn){
    for(let num of arr){
        if (fn(num))
        return arr.indexOf(num)
    }
}
function numIndex(val){
    return val>=10
}
console.log(findIndex([8,1,5,30], numIndex));

```



- Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function 

```
function specialMultiply(param1) {
    return function (param2) {
        return param1 * param2;
    }
}
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));
//specialMultiply(3,4);

function anotherMultiply() {

    console.log(arguments[0] * arguments[1])
}

anotherMultiply(3, 4);


```

```
function specialMultiply(param1) {
    return {
        getMultiply: function (param2) {
        return param1 * param2;
    },
    useArg: function () {
        console.log(arguments[1] * arguments[0]);
    }
}
}

let newSpecialMultiply = specialMultiply(3);
console.log(newSpecialMultiply.getMultiply(4))
newSpecialMultiply.useArg(3,4)

```