### DOM Exercises


###### Given the following HTML:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>

```

#####  Write the code necessary to do the following:

######  Select the section with an id of container without using querySelector.
```
let container = document.getElementById("container");

```


###### Select the section with an id of container using querySelector.
```
let container = document.querySelector("#container");

```


###### Select all of the list items with a class of "second".
```
let listItems = document.querySelectorAll(".second");

```


###### Select a list item with a class of third, but only the list item inside of the ol tag.
```
let li = document.querySelector("ol> .third");

```


###### Give the section with an id of container the text "Hello!".
```
let container = document.getElementById("container");
container.innerText = "Hello!";

```


###### Add the class main to the div with a class of footer.
```
let footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");

```


###### Remove the class main on the div with a class of footer.
```
footerDiv.classList.remove("main");

```


###### Create a new li element.
```
let newLi = document.createElement("li");

```


###### Give the li the text "four".
```
 newLi.innerText = "four";

```


###### Append the li to the ul element.
```
let ul = document.querySelector("ul");
ul.appendChild(newLi);

```

###### Loop over all of the lis inside the ol tag and give them a background color of "green".
```
let li = document.querySelectorAll("ol>li");
for(let i =0; i<li.length; i++){
    li[i].style.background = "green";
}

```


###### Remove the div with a class of footer.
```
footerDiv.remove();

```