import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {createUser} from '../actions/actions';

const mapStateToProps = (state) =>{
	return {
		loading: state.createUser.loading,
		data: state.createUser.data,
		loaded: state.createUser.loaded,
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		...bindActionCreators({createUser},dispatch)
	}
}

class Create extends React.Component {
	constructor(props) {
	  super(props);
	
	   this.state = {name:'',email:'',password:''};
	   this.createUser = this.createUser.bind(this);
	}
	createUser(){
		this.props.createUser(this.state.name,this.state.email,this.state.password);
		this.setState({name:'',email:'',password:''});
	}
    render() {
    	if(this.props.loading){
    		return(<div>Loading...</div>)
    	}
        return (
            <div className="App">form<br />
    <input type="text" placeholder="Name" value={this.state.name} onChange={e=>{this.setState({name: e.target.value})}} /><br />
    <input type="email" placeholder="Email" value={this.state.email}  onChange={e=>{this.setState({email: e.target.value})}} /><br />
    <input type="password" placeholder="Password" value={this.state.password}  onChange={e=>{this.setState({password: e.target.value})}} /><br />
    <input type="submit" onClick={this.createUser} /></div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);