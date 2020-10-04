#part 1

##Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

1. 2 == "2"; //true
2. 2 === 2; //true
3. 10 % 3; //1
4. 10 % 3 === 1;//true
5. true && false;//false
6. false || true;//true
7. true || false;//true

#part 2
##Answer the following questions about this code block:

```
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
```
1. keep it up
2. There was no need to specify `if(isLearning === true)` because `if(isLearning)` is already a truthy value, so whichever way it's declared, it would still return true.

```
let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}
```

1. The above code would log "third", reason is that the first and second condition contains falsey values. the third condition also contain a falsey value and a truthy value. but the or operator would return true if either or all of its variables is true.
2. The value of firstvariable is undefined
3. No. The value of firstvariable is not a truthy value. because the variable is not assinged any valid value. so, it would return undefined - which is a falsey value
4. secondvariable is also not a truthy value. and that's bacause the assigned value - an empty string is a falsey value
5. the thirdvariable is a truth value. since, since it has a truthy value assigned to it

#part 3

1. 
```
if (Math.random > 0.5){
    console.log("over 0.5")
}
    else{
        console.log("under 0.5")
    }
```
2. falsey values are values that are translated to false when evaluated in a boolean expression. examples incluse - null, undefined, false, 0,  "" and NaN.

