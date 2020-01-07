import React from 'react';
import '../css/App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '', email: '', password: '' };

    }

    render(){
        return(<div className="main-container">Hellow</div>);
    }

}

export default App;