## Debugging Exercises

##### What does the throw keyword do?

answer: The throw keyword is used by the programmer to throw a user-defined exception. this alt the program execution and passes control to the catch block. but where a catch block does not exist, the program will terminate.

##### What does the finally keyword do?

answer: The finally keyword is used to execute code after the try...catch block. the fanally block executes, whether an error is thrown or not.


##### What is the difference between a TypeError and ReferenceError?

answer:  A TypeError occurs when you are trying to perform the wrong type of operation on a variable, example: NaN();- this throws a TypeError. WHILE RefenrenceError occurs when you are trying to refenrence variable that does not exist.

##### How do you create a snippet in the Chrome dev tools?

answer: 
- on windows, press ctr + shift j, to open the dev tool
- focus your mouse anywhere in the dev tool environment, and press shift + ctrl p
- at the top of the drop down box that appears, start typing snippet
- choose show snippets from the list 
- at the left hand side, select the "+ New snippet", this highlights a snippet
- enter a name for the snippet and press enter to save the name


##### In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?

answer: An exception is a runtime error, which occurs during compilation.

##### How do we "catch" errors in JavaScript? Give an example with code for what that might look like.

answer: In javascript, we "catch" errors in the catch block using the catch keyword, after the try block. the statement in the catch block executes if an error is thrown in the try block.

```
        try{
            let a=3;
            if (a==3){
            throw "this is an error"
            }
        }
        catch(error){
            console.log(error);
        }
        console.log("we caught the bug");   

```


### Explain what type of error will be thrown, why the error is occuring, and how to fix it:

` person;
- this will throw a ReferenceError. because the variable person was not declared. and this can be fixed by declaring the variable using var, let or const keyword.



```
let data = {};
data.displayInfo(); 

``` 
- This will throw a TypeError, because, we are trying to call a function on an key that does not exist in the data object. this can be fixed by assigning displayInfo has a key in data object and make the value a function.



```
function data(){
    let thing = "foo";
}
data();
thing;

```
- This will throw a ReferenceError. because, variable thing does not exist outside of the function scope. This can be fixed by declaring thing in the global scope.


### part 2

##### Fix the broken code and explain what was wrong:

###### question
```
for(let i=0; i > 5; i++){
    console.log(i);
}

```


###### answer
```
for(let i=0; i > 5; i++){
    console.log(i);
}

```
- The code returns undefined and that is because the condition says that the value for (i) should only be printed if the value for (i) is greater than 5. we get get the value for i by changing the condition to < 5.


###### question

```
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}

```

###### answer

```
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

```

- in the above code snippet, the wrong operator was used- here, we were trying to assign 0 to num%2 instead of comparing the value of num%2 with 0.


###### question
```
function loopToFive(){
    for(let i=0, i < 5, i++){
        console.log(i);
    }
}

```

###### answer
```
function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}
```
- the for loop contains three statements, which are meant to be seperated by semicolons(;) and not comma (,)


###### question
```
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8]

```

###### answer
```
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
      
    }
return evenNumbers;
}
displayEvenNumbers();

```
- The i++ in the loop should not have a ;
- In the if conditional statement, an equality operator should be used in place of the assignment operator
- Using "i<numbers.length-1" inside the loop won't return the last element in the array. instead, use 'i<numbers.length'
- Using "evenNumbers.push(i) will keep pushing the value of i in the new array instead of the even numbers in the array. so evenNumbers.push(numbers[i]) should be used
- the return statement should be placed out the for loop block
- if (numbers%2=0) should be if (numbers[i]%2===0)
- There shoukdn't be a ; after the if condition
