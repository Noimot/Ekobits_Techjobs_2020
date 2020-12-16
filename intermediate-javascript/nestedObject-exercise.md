## { Nested Objects Exercises. }

#### Given the following nested object:

```
let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

```


###### Answer - Using a for loop, console.log all of the numbers in the primeNumbers array.
```
for (let nestedArrayElement in nestedData.innerData.numberData.primeNumbers){
console.log(nestedData.innerData.numberData.primeNumbers[nestedArrayElement]);
}
```


###### Using a for loop, console.log all of the even Fibonnaci numbers.
```
let nestedObj = nestedData.innerData.numberData.fibonnaci
for(let eachArrayElem in nestedObj){
if(nestedObj[eachArrayElem]%2===0){
console.log(nestedObj[eachArrayElem])
}
}

```


###### Console.log the value "second" inside the order array.
```
console.log(nestedData.innerData.order[1]); // second

```


###### Invoke the addSnack function and add the snack "chocolate".
```
function addSnack(snack){
let newNestedVal=nestedData.innerData.snacks
newNestedVal.push(snack)
return newNestedVal
}
addSnack("chocolate");

```



###### Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
```
the 'this' keyword is referencing the innerData object

```



### Given the following nested object:

```
let nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

```

###### answer - Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

```
function addSpeaker(){
let newObj={
name:"naima"
}
nestedObject.speakers.push(newObj);
return nestedObject.speakers;
}
addSpeaker();

```


###### Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

```
function addLanguage(addedLanguage, value){
    nestedObject.data.languages[addedLanguage]={
    hello:value
    }
    return nestedObject;
    }
    console.log(addLanguage("yoruba", "bawo ni"));

```

###### Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

```
function addCountry(europeanCountry, capital, population){
 nestedObject.data.continents.europe.countries[europeanCountry] = {
     capital,
     population
 }
 return nestedObject.data.continents.europe.countries;
}
console.log(addCountry("Turkey", "Anakara", 84979215));

```