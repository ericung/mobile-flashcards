import { AsyncStorage } from 'react-native';

export const asyncStorageDeck = "flashcards:decks";

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

export function initData() {
  AsyncStorage.setItem(asyncStorageDeck, JSON.stringify(data));
}

export function getDecks() {
  return AsyncStorage.getItem(asyncStorageDeck).then(results => {
    return results;
  });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(asyncStorageDeck, JSON.stringify({ title: title, questions: [] }));
}

export function addCardToDeck(title, card) {
  AsyncStorage.getItem(asyncStorageDeck, (err, result) => {
    let decks = JSON.parse(result);

    AsyncStorage.merge(asyncStorageDeck, JSON.stringify({ [deckName]: { title: title, questions: JSON.parse(JSON.stringify(decks[title].questions)) } }));
  });
}
