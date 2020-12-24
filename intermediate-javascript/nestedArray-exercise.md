### Nested Arrays Exercises

###### Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

```
function rotate(arr, num){
  for(i=0; i<num; i++){
    let poppedval=arr.pop();
    arr.unshift(poppedval);
  }
  return arr;
}
console.log(rotate([2,3,4,5,6],3));

```

###### Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

["X","O","X","O"]]
/*/

// makeXOGrid(3,2) 

// function makeXOGrid(rows, columns){
//   let subArray1=[];
//   let subArray2=[];
//   for(let i=1; i<=rows.length; i++){
//     for(let j=1; j<=columns.length; j++){

//     }

