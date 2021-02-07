### ES2015 Exercises

#### Convert the following es5 code blocks into es2015 code

###### question:

```
var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}

```

###### answer:

```
var person = {
    fullName: "Harry Potter",
    sayHi() {
          setTimeout(function(){
            console.log(`Your name is ${this.fullName}`)
        }.bind(this),1000)
    }
}
```


###### question:

```
let name = "Josie"
console.log("When " + name + " comes home, so good")

```

###### answer:

```
let name = "Josie"
console.log(`When ${name} comes home, so good`)
```

###### question

```
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

###### answer:

```
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // throw uncaught typeError
```

###### question

```
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

```

###### answer

```
var arr = [1,2]
var temp = arr[0]
[arr[1], arr[0]] = [arr[0], arr[1]]
arr[1] = temp
```

###### question 

```
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```

###### answer

```
function double(arr){
    return arr.map(val => val * 2);
}
```

###### question

```
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;
```




