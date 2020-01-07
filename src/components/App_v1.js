import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {name:'',email:'',password:''};
    this.createUser = this.createUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  createUser(){
    axios.post('https://backendv1.herokuapp.com/user/create', { name: this.state.name, email: this.state.email, password:this.state.password})
    .then(function(response){
        console.log(response);
        alert('User Created');
})
    .catch(err => {
      console.log(err);
      alert('User Created Failed');
    });
  }
  loginUser(){
     axios.post('https://backendv1.herokuapp.com/user/login', {email: this.state.email, password:this.state.password})
    .then(function(response){
        console.log(response);
        alert('Logged IN');
})
    .catch(err => {
      console.log(err);
      alert('Logged IN Failed');
    });
  }
  render(){
    return (
    <div className="App">form<br />
    <input type="text" placeholder="Name" value={this.state.name} onChange={e=>{this.setState({name: e.target.value})}} /><br />
    <input type="email" placeholder="Email" value={this.state.email}  onChange={e=>{this.setState({email: e.target.value})}} /><br />
    <input type="password" placeholder="Password" value={this.state.password}  onChange={e=>{this.setState({password: e.target.value})}} /><br />
    <input type="submit" onClick={this.createUser} />
    <br /><br />
    Login<br/>
    <input type="email" placeholder="Email" value={this.state.email}  onChange={e=>{this.setState({email: e.target.value})}} /><br />
    <input type="password" placeholder="Password" value={this.state.password}  onChange={e=>{this.setState({password: e.target.value})}} /><br />
    <input type="submit" onClick={this.loginUser} />
    </div>
  );
  }
  
}

export default App;
