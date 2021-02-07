### Regular Expression Exercises

##### part 1

##### Answer the following questions:

###### What is a regular expression? What are some use cases of regular expressions?

- Regular Expression is a sequence of characters that design a search pattern. These patterns are use to match characters on strings. it is use to validate emails, phone numbers, password, match route etc.

###### What are the two ways to create regular expression in JavaScript?

- The first is by using regular expression literal and by using regular expression constructor.

###### what is a flag?

- Flags are optional parameters that we can add to a plain expression to make it search in a different way.

###### What is the difference between ?, + *?

- ? matches at most one of the previous match, + matches one or more of the previous match while * matches zero or more of the prevoous match.

###### What is the difference between [] and {}?

- [] is use to specify range of character while {} ismuse to specify the quantity of character

###### What does the search function do?

- The search function executes a search for a match between a regular expression and a specified string. Returns the first starting point of where a match is found or -1 if a match is not found.

###### What do the exec and test functions do (these functions exist on the RegExp prototype)?

- The exec() method executes a search for a match in a specified string. Returns a result array, or null while The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.


#### Part ii


###### Write a function called countNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.

```

function countNumbers(num){
let numCount = num.match(/[0-9]/g).length
return numCount;
}
countNumbers("321321dsadsa930-29d132b13a")
```

###### Write a function called capitalSentence which accepts a string and returns another string with all the capital letters joined together.

```
function capitalSentence(str){
let caps = str.match(/[A-Z]/g)
return caps.join("")
}
capitalSentence("The Cat In The Hat")
```

###### Write a function caled isValidPassword, which accepts a string. If the string is longer than 7 characters and includes at least one special character (!,@,#, or $) , the function should return true. Otherwise, return false.

```
function isValidPassword(str){
let specialChar =str.match(/[a-z]{7,}[!@#$]/gi);
if(specialChar) return true
else return false
   }
isValidPassword('awesome$') //true
```

