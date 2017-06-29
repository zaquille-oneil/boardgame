//data.js
//id: 1, question: 'Do you prefer Mainstream Games or Hobby Games?', inputType: 'button_2', 
// 	options: ['Mainstream', 'Hobby']
// const data = [
// 		{ id: 1, question: 'Which of these genres do you enjoy the most?', inputType: 'button_4', 
//  	options: ['Family', 'Dexterity', 'Party', 'Abstract(*)'],
// 	 	suggestions: [
// 	 		{id: 1, gameNames: ['Monopoly','Risk','Candy Land']},
// 	 		{id: 2, gameNames: ['Jenga','Operation','Twister']},
// 	 		{id: 3, gameNames: ['Taboo','Apples to Apples','Pictionary']},
// 	 		{id: 4, gameNames: ['Checkers','Chess','Tic-Tac-Toe']}
//  	]},

// 		{ id: 2, question: 'Which of these genres do you enjoy the most?', inputType: 'button_4', 
//  	options: ['Thematic', 'Euro', 'War', 'Abstract(*)'],
// 	 	suggestions: [
// 	 		{id: 1, gameNames: ['Dune','Axis and Allies','Twilight Imperium (Third Edition)']},
// 	 		{id: 2, gameNames: ['Catan', 'Power Grid', 'Caylus']},
// 	 		{id: 3, gameNames: ['Advanced Squad Leader', 'Paths of Glory', 'Empires in Arms']},
// 	 		{id: 4, gameNames: ['YINSH','Ingenious','Blokus']}
//  	]}
//  	]
// module.exports = data;
const data = {
	questionList : [
		{id: 'a', question: 'Do you prefer Mainstream Games or Hobby Games?', inputType: 2},
		{id: 'b', question: 'Which of these genres do you enjoy the most?', inputType: 4},
		{id: 'c', question: 'Out of these games, which one did you enjoy playing the most?', inputType: 3}
	],
	answerList : [
		{id: 'initial', answers: ['Mainstream', 'Hobby']},
		{id: 'Mainstream', answers: ['Family', 'Dexterity', 'Party', 'Abstract(*)']},
		{id: 'Hobby', answers: ['Thematic', 'Euro', 'War', 'Abstract(*)']},
		{id: 'Family', answers: ['Monopoly','Risk','Candy Land']},
		{id: 'Dexterity', answers: ['Jenga','Operation','Twister']},
		{id: 'Party', answers: ['Taboo','Apples to Apples','Pictionary']},
		{id: 'AbstractM', answers: ['Checkers','Chess','Tic-Tac-Toe']},
		{id: 'Thematic', answers: ['Dune','Axis and Allies','Twilight Imperium (Third Edition)']},
		{id: 'Euro', answers: ['Catan', 'Power Grid', 'Caylus']},
		{id: 'War', answers: ['Advanced Squad Leader', 'Paths of Glory', 'Empires in Arms']},
		{id: 'AbstractH', answers: ['YINSH','Ingenious','Blokus']}
	]
}

module.exports = data;