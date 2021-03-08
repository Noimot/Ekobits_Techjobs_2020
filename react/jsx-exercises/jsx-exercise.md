## JSX Exercises

##### Part 1
##### question

###### For this assignment you will be creating three components:

1. FirstComponent, which is an h1 with the text "My very first component."
2. SecondComponent, which is an h2 with the text "My second component."
3. NamedComponent, which is a p that should accept a property of "name" and display the text "My name is " + name.

###### answer

###### html file
```

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>

<body>

    <div id="app"></div>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.js"></script>
    <script type="text/babel" src="app.jsx"></script>

</body>

</html>

```

###### jsx file

```
class FirstComponent extends React.Component {
    render() {
        return(
            <div>
                <h1>My very first component</h1>
            </div>
        );
    }
}

class SecondComponent extends React.Component {
    render() {
        return(
            <div>
                <h2>My second component</h2>
            </div>
        );
    }
}


class NamedComponent extends React.Component {
    render() {
        var name = "Noimot";
        return(
            <div> 
                <p>my name is {name}</p>
                <FirstComponent />
                <SecondComponent />
            </div>
        );
    }
}


ReactDOM.render(<NamedComponent />, document.getElementById("app"))

```

##### Part 2
##### question

1. Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.
2. Create an App component that renders at least three tweets.
3. Style your Tweet component!


###### answer
###### html file

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>

<body>

    <div id="app"></div>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.js"></script>
    <script type="text/babel" src="app.jsx"></script>

</body>

</html>

```

###### jsx file

```
class Tweet extends React.Component {
    render() {
        var style= {border:'solid 2px skyblue', backgroundColor:'#00cccc', color:"#00c"}
        return (
            <div style={style}>
                <p>Username: {this.props.username}</p>
                <p>Name: {this.props.name}</p>
                <p>Date potsed: {this.props.date}</p>
                <p>Message: {this.props.message}</p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>

                <Tweet username="n'eema" name="Naima" date="28th February, 2021" message="Top of the morning to you all"/>
                <Tweet username="abbie" name="Abiodun" date="28th February, 2021" message="A beautiful day to be great"/>
                <Tweet username="kikkyal" name="Kikelomo" date="28th February, 2021" message="Learn web development with just these simple steps - HTML, CSS and Javascript"/>

            </div>
        );
    }
}





ReactDOM.render(<App />, document.getElementById("app"))

```