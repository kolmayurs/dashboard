import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Create from './components/Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Index = () => (
    <Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/create" component={Create} />
		</Switch>
	</Router>
)

ReactDOM.render(
    <Provider store={store}>
	<Index />
</Provider>, document.getElementById('root'));