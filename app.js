document.addEventListener('DOMContentLoaded', () => {
	//card options
	const cardArray = [
		{
			name: 'andy',
			img: 'images/andy.jpg',
		},
		{
			name: 'andy',
			img: 'images/andy.jpg',
		},
		{
			name: 'donna',
			img: 'images/donna.jpg',
		},
		{
			name: 'donna',
			img: 'images/donna.jpg',
		},
		{
			name: 'jerry',
			img: 'images/jerry.png',
		},
		{
			name: 'jerry',
			img: 'images/jerry.png',
		},
		{
			name: 'jralphio',
			img: 'images/johnRalphio.png',
		},
		{
			name: 'jralphio',
			img: 'images/johnRalphio.png',
		},
		{
			name: 'ron',
			img: 'images/ron.jpg',
		},
		{
			name: 'ron',
			img: 'images/ron.jpg',
		},
		{
			name: 'tom',
			img: 'images/tom.jpg',
		},
		{
			name: 'tom',
			img: 'images/tom.jpg',
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];

	//create your board

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img'); // makes an element for each image, type of element: img
			card.setAttribute('src', 'images/blank.jpg'); // takes new img element, specifies name = src, and value = *relative url of image*
			card.setAttribute('data-id', i); // takes new img element, specifies name = data-id and value = 1-11 as loop executes
			card.addEventListener('click', flipCard); // executes function flipcard when card is clicked
			grid.appendChild(card); // all img elements w/ their different ids will be put into the div with class=grid
		}
	}

	//check for matches

	function checkForMatch() {
		var cards = document.querySelectorAll('img'); // pick out the images created in the first function
		const optionOneId = cardsChosenId[0]; // id of first card chosen
		const optionTwoId = cardsChosenId[1]; // id of second card chosen
		if (cardsChosen[0] === cardsChosen[1]) {
			// test is the pair matches
			alert('Bully for you, you found a match. Keep going!');
			cards[optionOneId].setAttribute('src', 'images/white.jpg'); // if so, change card images to white to take them off the grid visually
			cards[optionTwoId].setAttribute('src', 'images/white.jpg');
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
			cardsWon.push(cardsChosen); // store correct matches in a new array
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.jpg'); // if no match, reset the clicked images back to blank
			cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
			alert('TREAT YO SELF, try again!');
		}
		cardsChosen = []; // empty these arrays to keep playing
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length; // display the length of the cardsWon array as the current score
		if (cardsWon.length === cardArray.length / 2) {
			// how to tell if all the matches have been found
			resultDisplay.textContent = 'Congrats! You won!';
		}
	}

	//flip your card
	function flipCard() {
		var cardId = this.getAttribute('data-id'); // gets the id number for the card selected
		if (cardsChosenId.length === 1 && cardsChosenId[0] === cardId) {
			return;
		} // if you click the same image twice, you will not get a match
		cardsChosen.push(cardArray[cardId].name); // pushes the name of the card chosen into cardsChosen array
		cardsChosenId.push(cardId); // pushes the card id number into cardsChosenId array
		this.setAttribute('src', cardArray[cardId].img); // will let us add an image to the selected square based on the card id it holds
		if (cardsChosenId.length === 2) {
			// when there are two elements in the array, runs "check for match"
			setTimeout(checkForMatch, 500); // runs checkForMatch after a short delay so things don't happen all at once
		}
	}

	function stayWhite() {
		cards[optionOneId].setAttribute('src', 'images/white.jpg');
		cards[optionTwoId].setAttribute('src', 'images/white.jpg');
	}

	createBoard();
});
