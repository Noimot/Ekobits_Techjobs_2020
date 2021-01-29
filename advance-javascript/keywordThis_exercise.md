## Keyword 'this' Exercises

#### Part 1

###### What is the value of the keyword this in the following example:

```
var data = this;
console.log(data);

```
- The value of the keyword "this" in the example is the "Window".


###### What does this function output? Why?

```
function logThis(){
    return this;
}

logThis();

```

- The function output "Window" and that is because, the "this" keyword points to the global context, which in this case, is the "window".


###### What does this function output? Why?

```
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi()

```

- The function output "Hello Tim". and that is because the "this" keyword in this example refers to the functions's parent object(implicitly binded to the parent object).


###### What does this function output? Why?

```
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo()

```

- This would output "Cat owner? undefined" and that is because the "this" keyword in this context refers to the parent object which does not have the "catOwner" as its property. the "catOwner" is a property of a nested object (info).


###### What does this function output? Why?

```
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() 

```

- This example output "Oakland". and this is because, the call site refers to the property within the parent object.


###### What does this function output? Why?

```
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation()

```

- This output throws a TypeError. and thats because logLocation() is not a function. and also, the data object which the "this" keyword refers does not have a displayLocation property.



### Part 2

#### Call, Apply and Bind Exercises


###### Fix the following code:

```
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

```
- obj.person.sayHi.call(obj) // This person's name is Harry Potter

or

```
var obj = {
    fullName: "Harry Potter",
    sayHi: function(){
        return "This person's name is " + this.fullName
        }    
}

```
- obj.sayHi() // This Person's name is Harry Potter


###### List two examples of "array-like-objects" that we have seen.

```
 let array-like-object = {
     0: "name"'
     1: "favColor"'
     length:2
 }

```

```
function arrayLikeObj(){
    for(let i=0; i<arguments.length; i++){
    console.log(arguments[i])
    }
}

arrayLikeObj(1,2,3,4)
```

##### Functions to write:

###### Make the tests pass for the following functions:

###### Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

```
function sumEvenArguments(...args){
    let sum = 0;
    for(let val of args){
        if(val%2 === 0){
        sum += val;
        }
    }
    return sum;
}
sumEvenArguments(1,2,6)

```

###### Write a function called arrayFrom which converts an array-like-object into an array.

```
function arrayFrom(...args){
    return args
}
function sample(){
    var arr = arrayFrom(1,2,3,4,5)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}
sample()//15

```

###### Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out!"

```
function add(a,b){
    return a+b
}
```
var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"
