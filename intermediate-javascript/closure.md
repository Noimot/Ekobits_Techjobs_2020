#### Exercises

##### Answer the following questions:


###### What is a closure?

answer - closure is when a function is able to access variable of a outer function after it has returned.


###### List two reasons why closures are useful

1) to create a private variable
2) to create module pattern


###### what is a module?

answer - a module is a piece of code that is encapsulated and can be reused quite easily


###### What is the arguments array-like object?

answer - The arguments object is an array-like object accessible inside all non- arrow functions that represents the values of the arguments passed to that function. You can use numerical indexes to access values of arguments from the arguments object. The arguments object is a lot like an array, but it is not an actual array. Although it has the length property, some common array methods like map(), slice(), and filter() on it.


###### Why do we call arguments an array-like-object?

answer - Because the arguments object is a lot like an array, but it is not an actual array. Although it has the length property, some common array methods like map(), slice(), and filter() on it. array method like push() can not be used on it.


###### Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

```
function createCount(){
    let count = 0;
    return function(){
        return ++count;
    }
}
let numCount = createCount();
console.log(numCount());
console.log(numCount());
console.log(numCount());
console.log(numCount());

```