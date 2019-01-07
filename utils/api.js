import { AsyncStorage } from 'react-native'

export const asyncStorageDeck = "flashcards:decks"
export const asyncStorageCards = "flashcards:cards"

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
	return AsyncStorage.getAllKeys();
}

export function saveDeckTitle(key, title) {
	AsyncStorage.mergeItem(asyncStorageDeck, JSON.stringify({ [key]: title }));
}

export function addCardToDeck(title, card) {
	AsyncStorage.mergeItem(asyncStorageCard, JSON.stringify({title}));
}
