import React, { Component } from 'react';
import style from './style';

const data = {
	q0: 'Do you prefer Mainstream Games or Hobby Games?',
	q1: 'Which of these genres do you enjoy the most?',
	q2: 'Out of these games, which one did you enjoy playing the most?',
	initial : ['Mainstream', 'Hobby'],
	Mainstream : ['Family', 'Dexterity', 'Party', 'Abstract(*)'],
	Hobby : ['Thematic', 'Euro', 'War', 'Abstract(*)'],
	Family : ['Monopoly','Risk','Candy Land'],
	Dexterity : ['Jenga','Operation','Twister'],
	Party : ['Taboo','Apples to Apples','Pictionary'],
	AbstractM : ['Checkers','Chess','Tic-Tac-Toe'],
	Thematic : ['Dune','Axis and Allies','Twilight Imperium (Third Edition)'],
	Euro : ['Catan', 'Power Grid', 'Caylus'],
	War : ['Advanced Squad Leader', 'Paths of Glory', 'Empires in Arms'],
	AbstractH : ['YINSH','Ingenious','Blokus']
}

class FindBoardGame extends Component {
	constructor (props) {
		super(props);
		//this.state = {currQuestion : 0, currAnswers : 'initial'}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// componentWillReceiveProps(nextProps){
	// 	console.log('componentWillReceiveProps')
	// 	if (this.props === nextProps) {
	// 		this.setState({currQuestion : 0, currAnswers : 'initial'})
	// 	}
	// }

	handleSubmit(e) {
		
		if (this.props.question < 2) {
			//this.setState({currQuestion : this.state.currQuestion + 1})
			this.props.updateQuestion(this.props.question + 1)
			if (this.props.answer === 'Mainstream' && e.target.value === 'Abstract(*)') {
				//this.setState({currAnswers: 'AbstractM'})
				this.props.updateAnswer('AbstractM')
			}
			else if (this.props.answer === 'Hobby' && e.target.value === 'Abstract(*)') {
				//this.setState({currAnswers: 'AbstractH'})
				this.props.updateAnswer('AbstractH')
			}
			else {
				//this.setState({currAnswers : e.target.value})
				this.props.updateAnswer(e.target.value)
			}
		}
		else {
			//move onto suggestions
			this.props.finalAnswer(e.target.value)
		}
		e.preventDefault();
	}
	
	

	render(){
		let buttons = data[this.props.answer].map(option => {
		//let buttons = data[this.state.currAnswers].map(option => {
			return (
				<button type="button" style={style.button} value={option} onClick={this.handleSubmit}>{option}</button>
			)
		})

		//var questionString = 'q' + this.state.currQuestion
		var questionString = 'q' + this.props.question
		return(
			<div>
				{data[questionString]}
				<br></br>
				{buttons}
			</div>
		)
	}
}

export default FindBoardGame;