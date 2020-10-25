# Functions Exercises.

### Your assignment is to write the following functions in the descriptions below

### Part 1

1. this function takes in two parameters and returns the difference of the two;

```
          (function(firstNum,secondNum){
             return secondNum - firstNum;
           })(2,2)

```

2. this function takes in two parameters and returns the product of the two;

```
            let product = (function(firstNum,secondNum){
                return secondNum * firstNum;
            })
            product(2,2);
```

3. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

```
            let printDayOfTheWeek = (function(day){
                let daysOfTheWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
                if(daysOfTheWeek[day-1]!==undefined){
                    return daysOfTheWeek[day-1];
                }
            })
            printDayOfTheWeek(8);
```

4. this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

```
            let lastElementInArray = (arrayElements) => {
                let lastElement = arrayElements.pop();
                return lastElement;
            }
            lastElementInArray([2,7,9,0,4,5]);

```

5. this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

```     
            function numberCompare(firstNum,secondNum){
                return (firstNum>secondNum)? "first Number is greater"
                      :(firstNum<secondNum)? "second number is greater"
                      : "first Number is equal to second Number";
            }
            numberCompare(10,10);
```
