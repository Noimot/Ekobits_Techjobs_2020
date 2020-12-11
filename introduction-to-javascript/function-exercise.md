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


6. this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

```

            function singleLetterCount(str, eachChar){
                let letterCount=0;
                for (let letter of str){
                    if (letter.toLowerCase()===eachChar.toLowerCase()){
                    letterCount++
                    }
                }
                return letterCount;
            }

            console.log(singleLetterCount('amazing','a'));

```

### Part 2

##### this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

```

            
        function multipleLetterCount(str){
            let stringObject={};
            for(let eachLetter of str){
                if(str.toLowerCase().include(eachLetter)){
                    stringObject[eachLetter]=+1
                }
                else{
                    stringObject[eachLetter]=1;
                }
                }
            return stringObject;
       }
        console.log(multipleLetterCount("noimot"));

```

##### this function should take in at most four parameters (an array, command, location, and value).
##### If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
##### If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
##### If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
##### If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

``` 
    function arrayManipulation(array, command, location, value){
        if(command==="remove" && location==="end"){
            return array.pop();
        }
        else if (command==="remove" && location==="beginning"){
            return array.shift();
        }
        else if (command==="add" && location ==="beginning"){
            array.unshift(value);
            return array;
        }
        else if (command==="add" && location==="end"){
            array.push(value);
            return array;
        }
    }
    console.log(arrayManipulation([1,2,3], "remove", "end"));

```


##### A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true

```

        function isPalindrome(characters){
            let eachCharacterCheck = characters.toLowerCase().match(/[a-z0-9]/gi);
           return eachCharacterCheck.join('')===eachCharacterCheck.reverse().join('')?true:false
        }

        console.log(isPalindrome("a man a plan a canal panama"))


```

### part 3

##### using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

```
        let playerPick = prompt("select the game of your choice: 'Rock' 'Paper' 'Scissor'");
        let gameSelection = ['ROCK', 'PAPER', 'SCISSOR'];;
        function randomSelectionGame(){
            let playerGameSelection = playerPick.toUpperCase();
            let randomValue=Math.ceil(Math.random()*gameSelection.length-1)
            let computerGameSelection = gameSelection[randomValue]
            if (playerGameSelection===computerGameSelection){
                console.log('${playerGameSelection} ties with the computer selection`)
            }
            else{
                console.log("The player selection does not tally" , "computer WINS!!")
            }

        }
        randomSelectionGame();
