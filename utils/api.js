import { AsyncStorage } from 'react-native'

export const asyncStorageDeck = "flashcards:decks"

let data = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces',
				value: true
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event',
				value: false
			}
		]
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer: 'The combination of a function and the lexical environment within which that function was declared.',
				value: true
			}
		]
	}
}

export function getDecks() {
	return data;
}

export function getDeck(key) {
	return data[key];
}	

export function saveDeckTitle(title) {
	data[title] = { title: title, questions: [] };
}

export function addCardToDeck(title, card) {
	data[title].questions.push(card);
}
