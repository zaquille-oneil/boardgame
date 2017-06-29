import React, { Component } from 'react';
import style from './style';
import Suggestion from './Suggestion';

const data = {
	Monopoly:[5],
	Risk:[36218],
	'Candy Land':[2407],
	Jenga:[17329],
	Operation:[169124],
	Twister:[194626],
	Taboo: [178900],
	'Apples to Apples':[39856],
	Pictionary:[46213],
	Checkers:[116215],
	Chess:[160477],
	'Tic-Tac-Toe':[163412],
	Dune:[166859],
	'Axis and Allies':[55863],
	'Twilight Imperium (Third Edition)':[205637],
	Catan:[126163],
	'Power Grid':[4098],
	Caylus:[34635],
	'Advanced Squad Leader':[14105],
	'Paths of Glory':[161936],
	'Empires in Arms':[2494],
	YINSH:[194655],
	Ingenious:[162286],
	Blokus:[148228]
}

class SuggestionBox extends Component {
	constructor(props) {
		super(props);
		this.showSuggestions = this.showSuggestions.bind(this)
	}

	showSuggestions(answer) {
		return data[answer].map(function(item,index){
			return (<Suggestion item={item}/>)
		})
	}

	render(){
		return (
			<div> 
				Great! <br></br>
				Now that we know more about you, here are some board game 
				suggestions you might want to check out <br></br>
				<div style={style.suggestionbox}>
					{this.showSuggestions(this.props.finalAnswer)}
				</div>
			</div>
		)
	}
}

export default SuggestionBox;