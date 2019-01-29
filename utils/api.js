import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

export const asyncStorageDeck = "flashcards:decks";

export const NOTIFICATION_KEY = 'notification:mobile-flashcards';

let data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
        value: "true"
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        value: "false"
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        value: "true"
      }
    ]
  }
};

export function initData() {
  AsyncStorage.setItem(asyncStorageDeck, JSON.stringify(data));
  return data;
}

export function getDecks() {
  AsyncStorage.clear();
  return AsyncStorage.getItem(asyncStorageDeck).then(results => {
		console.log(JSON.parse(results));
    return results === null ? initData() : JSON.parse(results);
  });
}

export function saveDeckTitle(title) {
	data[title] = { title: title, questions: [] };
	AsyncStorage.setItem(asyncStorageDeck, JSON.stringify(data));
}

export function addCardToDeck(title, card) {
  data[title].questions.push(card);
  AsyncStorage.setItem(asyncStorageDeck, JSON.stringify(data));
}

export function createNotification() {
  return {
    title: 'Flashcards',
    body: "Today's Questions.",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate
    }
  };
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (!data) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            /*
            tomorrow.setDate(tomorrow.getDate());
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            */
            tomorrow.setDate(tomorrow.getDate());
            tomorrow.setMinutes(1);
            /*
            tomorrow.setHours(20);
            tomorrow.setMinutes
            */

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: now,
                repeat: 'day'
              }
            );

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
  return;
}
