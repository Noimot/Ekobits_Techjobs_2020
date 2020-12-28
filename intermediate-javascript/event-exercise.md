### { Events Exercises. }

##### Given the following HTML, create a script.js file to complete the first two parts.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Exercise</title>
    <style>
        div {
          width: 50px;
          height: 50px;
          display: inline-block;
        }
        .brown{
          background-color: brown;
        }
        .green{
          background-color: green;
        }
        .blue{
          background-color: blue;
        }
        .purple{
          background-color: purple;
        }
        .yellow{
          background-color: yellow;
        }
        .car1 {
         background-color: #8C9C12;
        }
        .car2 {
         background-color: #1DA788;
        }
        .car1, .car2 {
            margin-left: 0;
        }
    </style>
</head>
<body>
    <h1 id="change_heading">Change Me!</h1>
    SELECTED COLOR <span class="selected">None!</span>
    <section>
        <div class="brown"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="yellow"></div>
    </section>
    <h2>Race!</h2>
    <button>Start the race!</button>
    <br>
    <div class="car1"></div>
    <br>
    <div class="car2"></div>
    <script src="script.js"></script>
</body>
</html>

```

#### Part 1


###### 
Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.


###### answer
```
<head>
<script>
window.addEventListener("load", function(){
    let h1 = document.querySelector("#change_heading");
    h1.addEventListener("click", function(){
        h1.innerText = "i am the heading";
    })
})

</head>
</script>
```


###### Replace the text "Change me" with "Hello World!".

```
let h1 = document.querySelector("#change_heading);
h1.onclick = function(){
    h1.innerText = "Hello World!";
}

```


###### When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

```
let divBrown = document.querySelector(".brown");
divBrown.onmouseover = function(){
    divBrown.style["color"] = "purple";
}

```


###### Create a new div element.

```
document.createElement("div");

```


###### Give your new div a class of purple and style it so that it has a background color of purple.

```
div.classList.add("purple");
div.style.background = "purple";

```


###### Append your new div to the page to the section tag.

```
let section = document.querySelector("section");
section.appendChild("div");

```



#### part 2 

###### Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"


###### answer

- css style - add position: relative; left:0; to car1 and car2 then add the js code below in the js file

```
let raceBtn = document.querySelector(".raceBtn");
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");

var movCar1Left = 0;
var movCar2Left = 0;


function carMovement() {
    
    let timerId = setInterval(function () {
        movCar1Left += 50;
        movCar2Left += 20;
        car1.style.left = movCar1Left + 'px';
        car2.style.left = movCar2Left + 'px';

        if(movCar1Left === 1200 || movCar2Left===1200){
            clearInterval(timerId)
            alert("Winner!");
        }
    }, 1000)   
}

raceBtn.addEventListener("click", carMovement);

```

### Part 3

###### For this assignment you will be combining your knowledge of DOM access and events to build a todo app! As a user, you should be able to:
- Add a new todo (by submitting a form)
- Mark a todo as completed (cross out the text of the todo)
- Remove a todo


###### answer

###### HTML code snippet

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>TO-DO List App</title>
   
</head>

<body>


<h1>TO-DO App</h1>
<form action="#" class="container" onsubmit="addTodo()" >
  <input type="text" class="enterTodo">
  <button class="addTodoBtn">+</button>
  <ul class="todoList"></ul>
</form>

<script src="todo.js><script>
</body>
</html>
```

###### css
```
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  background: #d580ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container, h1 {
  margin-top: 20px;
}

.enterTodo {
  width: 250px;
  height: 30px;
  border-radius: 5px;
  outline: 0;
  border: none; 
}

.addTodoBtn {
  width: 30px;
  height: 30px;
}

.todoList {
  margin-top: 20px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

```

###### javascript

```
let enterTodo = document.querySelector(".enterTodo");
let addTodoBtn = document.querySelector(".addTodoBtn");
let todoList = document.querySelector(".todoList")


function addTodo(){
    let list = document.createElement("li");
    list.innerText = enterTodo.value;
    if(enterTodo.value){
    todoList.appendChild(list);
    }
    enterTodo.value="";
    enterTodo.focus();
    list.addEventListener("mouseover", function(){
        list.style.textDecoration = "line-through";
    })
  list.addEventListener("click", function(){
      list.remove();
  })
}

```



###### Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete!