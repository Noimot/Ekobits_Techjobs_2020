### Prototype Exercise

##### PArt 1

###### Make the tests pass for the following tasks:

- Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array).

- Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

-  answer should be  - var p = new Person("Shana", "Malarkin", "Green", 38);
p.fullName(); // Shana Malarkin

###### Answer

```
function Person (...[firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods]){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
}
    Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}
let p = new Person("Shana", "Malarkin", "Green", 38);
p.fullName()
```


- Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format: 
- var p = new Person("Shana", "Malarkin", "Green", 38);
- p.toString(); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38

```
function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
}
Person.prototype.toString = function(){
    
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor} Favorite Number: ${this.favoriteNumber}`;
}
let p1 = new Person("Shana", "Malarkin", "Green", 38);
console.log(p1.toString())
```

###### Add a property on the Person object called family which is an empty array.
###### Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should return the length of the family array.