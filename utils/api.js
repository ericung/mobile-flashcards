import { AsyncStorage } from 'react-native'

export const asyncStorageDeck = "flashcards:decks"

let data = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces'
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event'
			}
		]
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer: 'The combination of a function and the lexical environment within which that function was declared.'
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
	AsyncStorage.setItem(asyncStorageDeck, JSON.stringify(data));
}

export function addCardToDeck(title, card) {
	AsyncStorage.mergeItem(asyncStorageCard, JSON.stringify({title}));
}
