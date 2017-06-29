Find a board game app.

Initial Goal (solution to a problem):
	-find a board game for the user to enjoy
	-asks questions to determine what the user likes in board games
		+ initially, we can just do 1 of each genre, tooltip highlight = genre description
			Genres of Mainstream Games:
				Family Games - Monopoly, Risk, Candy Land
				Dexterity Games - Jenga, Operation, Twister
				Party Games - Taboo, Apples to Apples, Pictionary
				Abstracts (*) - Checkers, Chess, Tic-Tac-Toe

			Genres of Hobby Games:
				Thematic Games - Dune, Axis & Allies, Twilight Imperium (Third Edition)
				Eurogames - Catan, Power Grid, Caylus
				Wargames - Advanced Squad Leader, Paths of Glory, Empires in Arms
				Abstracts(*) - YINSH, Ingenious, Blokus
			(*) Abstracts generally exist equally within the Hobby and Mainstream game families.
			
	-UX and UI are seamless and smooth and stylish
	-a web application that feels complete and easy to use

Initial structure:
App component:
	Find-Board-Game component (provides a question and a user input area)
	Suggestion component

Future Features:
	-allow user to enter in board games they like/are similar
	-API with boardgamegeek:
		+ pictures
		+ ratings & reviews
		+ genres
		+ amount of players
		+ hours each game
		+ themes
	-pricing and sites where game can be found
	-a user wish list
	-friends and suggestions
	-comments, accounts, etc..