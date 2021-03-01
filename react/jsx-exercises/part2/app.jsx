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