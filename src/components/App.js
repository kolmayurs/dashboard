import React from 'react';
import '../css/App.css';
import Create from './Create';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '', email: '', password: '' };

    }

    render(){
        return(<div className="main-container"><Create /></div>);
    }

}

export default App;