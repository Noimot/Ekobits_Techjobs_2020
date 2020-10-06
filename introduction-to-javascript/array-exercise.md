# part 1

## write the code necessary to do the following:

##### question: create an empty array callet arr
   
    ` let arr = []; `

##### add your first name to the arr variable

    ` arr[0] = "Noimot; `

##### add your last name to the end of the array

    ` arr.push("Alabi"); `

##### add your favorite color to the beginning of the array
   
    ` arr.unshift("blue"); `

#### result
    ` (3) ["blue", "Noimot", "Alabi"] `

##### Remove the favorite color from the arr variable (remember this is the first value in the array - what method can you use to remove the first value in an array?)

    ` arr.shift(); ` , the shift() method is used to remove the first value in an array

##### Create another array called arr2
     ` let arr2 = []; `

##### Add your favorite number to arr2
    ` arr2[0]=8; `

##### Add the string "JavaScript" to the end of the arr2 variable
  
    ` arr2.push("JavaScript"); `

##### See if the value 42 exists in the arr2 array. Do this using the indexOf method. What does indexOf return to you if the value passed to it can not be found in the array?
    
    ` arr2.indexOf(42); ` // it returns -1 if the value passed to it is not found.

# part 2

## Complete the following, starting from the following array: ` let arr = ["JavaScript", "Python", "Ruby", "Java"] `

##### Return the following array: ["Python", "Ruby"]
    
     ` arr.splice(1,2); ` 

##### Combine the array with the array ["Haskell", "Clojure"]
  
    ` arr.splice(1,2).concat("Haskell", "Clojure"); `

##### Return the string "JavaScript, Python, Ruby, Java"
  
    ` arr.splice(1,0,"Python","Ruby"); `
    ` arr.join(" "); `

##### Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference

    ```
     let num = 23; 
     let newNum = num; 
     ```

//using the above code sample - passing by value means directly assigning the value (23) to the variable (num). this same value in num is also directing assigned to newNum. here, no amount of manipulation done on newNum can affect the value of num. this is most common with primitive data type.

//passing by reference, if the above example were to be an array/object then manipulating the value of the num array would affect the newNum since they are the same reference.