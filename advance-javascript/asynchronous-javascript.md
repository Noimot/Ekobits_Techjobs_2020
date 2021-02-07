### Asynchoronous Javascript Exercises

###### Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.

```
var logOne = setTimeout(function() {
  console.log("one!");
}, Math.random() * 1000);

var logTwo = setTimeout(function() {
  console.log("two!");
}, Math.random() * 1000);

inOrder(logOne, logTwo);

```

###### solution

```
logOne = setTimeout(function() {
  console.log("one!");
}, Math.random() * 1000);

 logTwo = setTimeout(function() {
  console.log("two!");
}, Math.random() * 1000);


function inOrder(callback1, callback2){
setTimeout(function(){
callback1
callback2
}, 1000)
           }
inOrder(logOne, logTwo);

```

###### Refactor inOrder to use promises.

```

```