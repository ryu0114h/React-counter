import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core/';

const button = {
	margin: "20px"
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
		this.countUp = this.countUp.bind(this);
		this.countDown = this.countDown.bind(this);
		this.countReset = this.countReset.bind(this);
	}

	countUp(){
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	countDown(){
		this.setState({
			counter: this.state.counter - 1,
		})
	}

	countReset(){
		this.setState({
			counter: 0,
		})
	}

	render() {
		return (
			<div className="container">
				<h1>Counter: {this.state.counter}</h1>
				<Button style={button} variant="contained" color="secondary" onClick={this.countUp}>INCREMENT</Button>
				<Button style={button} variant="contained" color="primary" onClick={this.countDown}>DECREMENT</Button>
				<Button style={button} variant="contained" onClick={this.countReset}>RESET</Button>
			</div>
		)
	}
}

export default App;
