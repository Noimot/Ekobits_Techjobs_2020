### Constructors Exercise

##### Answer the following questions and make the tests pass.

1. What is the purpose of a constructor function?

- Constructor function is use to create a blueprint there by reducing code duplication.

2. What does the new keyword do?

- The new keyword creates an empty object
- It then set the 'this' keyword into the new object
- It adds an implicit return this to the end of the function
- It adds a property to the empty object called __proto__, which link the prototype property of the constructor function to the empty object

3. What does the keyword this refer to inside of a constructor function?

- Without the 'key' keyword, the 'this' keyword inside the constructor function refers to the global scope which is "window".

4. What is a class? What is an instance?
- class is the blueprint for creating for objects while instance is an object containing data described by the class.

5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

```
function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

```

6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number.


```
function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;

    this.multiplyFavoriteNumber = function(number){
        return this.favoriteNumber * number;
    }
}

```

7. Refactor the following code so that there is no duplication inside the Child function.

```
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

```

##### answer:

```
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this, arguments)
}
```

