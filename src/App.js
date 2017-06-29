//TO-DO still..
//more styling
//reset button does not work during findboardgame states..
//	perhaps this has to do with allowing children to handle parent states
//suggestions template

import React, { Component } from 'react';
import style from './style';
import DATA from './data';
import FindBoardGame from './FindBoardGame';
import SuggestionBox from './SuggestionBox';

const initial_state = {
	finalAnswer: '', question: 0, answer: 'initial'
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {question: 0, answer: 'initial', finalAnswer : ''}
		this.updateAnswer = this.updateAnswer.bind(this)
		this.finalAnswer = this.finalAnswer.bind(this)
		this.updateQuestion = this.updateQuestion.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}

	updateQuestion(question) {
		this.setState({question: question})
	}

	updateAnswer(answer) {
		this.setState({answer: answer})
	}

	finalAnswer(answer) {
		this.setState({finalAnswer : answer})
	}

	handleReset() {
		this.setState(initial_state)
	}

	render() {
		var x = this.state.finalAnswer === '' ? 
		(<FindBoardGame question={this.state.question} answer={this.state.answer} updateAnswer={this.updateAnswer} updateQuestion={this.updateQuestion} finalAnswer={this.finalAnswer}/>) : 
		(<SuggestionBox finalAnswer={this.state.finalAnswer}/>);

		return (
			 <div style={ style.app }>
			 	<h1>Find a Board Game</h1>
				 {x}
				 <button style={ style.reset } onClick={this.handleReset}>Reset</button>
			 </div>
		 )
	}

}

export default App;