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