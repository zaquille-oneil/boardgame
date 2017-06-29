import React, { Component } from 'react';
import style from './style';

class Suggestion extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={style.suggestion}>{this.props.item}</div>
		)
	}
}

export default Suggestion;