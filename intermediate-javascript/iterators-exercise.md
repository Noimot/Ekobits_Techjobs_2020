### Iterators Exercises


#### Part I

##### Use the following object for this set of questions:

```
let users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

```

###### Write a function called printEmails which console.log's each email for the users.


###### answer
```
function printEmails(key){
  users.forEach(function(val){
    console.log(val[key]);
  })
}
printEmails("email");

```


###### Write a function called printHobbies which console.log's each hobby for each user.

###### answer

```

function printHobbies(key){
  users.forEach(function(val){
    val[key].forEach(function(val){
      console.log(val);
    })
  })
}
printHobbies("hobbies");

```

###### Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

###### answer

```

function findHometownByState(value){
  return users.find(function(val){
    return (val["hometown"]["state"]==value);
  })
}
console.log(findHometownByState("CA"));

```

###### Write a function called allLanguages which returns an array of all of the unique values

###### answer

```

function allLanguages(){
  return users.map(function(val){
   return val["favoriteLanguages"];
}).flat().filter(function(value, index, arr){
    return arr.indexOf(value) === index;
  })
}
console.log(allLanguages());

```

###### Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

###### answer

```

function hasFavoriteEditor(str){
  return users.some(function(val){
    return val["favoriteEditor"]==str;
  })
}
console.log(hasFavoriteEditor("Eclipse"));

```

###### Write a function called findByUsername which takes in a string and returns an object in the users array that has that username


###### answer

```

function findByUsername(str){
  return users.find(function(val){
    return val["username"] == str;
  })
}
console.log(findByUsername('david'));

```


#### Part II

###### Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).

```
function vowelCount(str){
  let vowelList = {};
let strCounter = 0;
  for(let letter of str.toLowerCase()){
    for(let vowelLetter of "aeiou"){
      if(letter === vowelLetter){
      if(vowelList[letter]){
        vowelList[letter] +=1
      } 
        else{
          vowelList[letter] =1
        }
      }   
    }
  }
  return vowelList;
}
console.log(vowelCount('incredible'))

```

###### Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).

###### answer

```
function removeVowels(str){
   let newStr = str.replace(/[aeiou]/gi, '')
   return newStr.split("")
}
console.log(removeVowels("fun"));

```