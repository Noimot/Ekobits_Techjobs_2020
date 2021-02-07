### Stacks Exercise

##### part 1

###### Write a constructor function for a Stack

```
function Stack(){
    this.stack = []
}

```

###### This function adds the value to the beginning of the stack. This should be an O(1) operation and return the size of the stack.

```
Stack.prototype.unshift = function(val){
    this.stack.unshift(val)
    return this.stack.length
}
```

###### This function removes the value at the beginning of the stack. This should be an O(1) operation and return the value removed.

```
Stack.prototype.shift = function(){
    let shiftedVal = this.stack.shift()
    return shiftedVal
}
```

###### This function returns the first value in the stack.

```
Stack.prototype.shift = function(){
    let shiftedVal = this.stack.shift()
    return shiftedVal
}
```

###### This function console.log's all the values in the stack.

```
Stack.prototype.allValues = function(){
    let allVal;
    this.stack.forEach((val) => allVal = console.log(val))
    return allVal
}
```
