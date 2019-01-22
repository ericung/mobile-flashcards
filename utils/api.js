import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

export const asyncStorageDeck = "flashcards:decks";

export const notificationKey = 'notification:mobile-flashcards';

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
};

export function initData() {
  AsyncStorage.setItem(asyncStorageDeck, JSON.stringify(data));
  return data;
}

export function getDecks() {
  return AsyncStorage.getItem(asyncStorageDeck).then(results => {
    return results === null ? initData() : JSON.parse(results);
  });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(asyncStorageDeck, JSON.stringify({ title: title, questions: [] }));
}

export function addCardToDeck(title, card) {
  AsyncStorage.getItem(asyncStorageDeck, (err, result) => {
    let decks = JSON.parse(result);

    AsyncStorage.mergeItem(asyncStorageDeck, JSON.stringify({ [title]: { title: title, questions: JSON.parse(JSON.stringify(decks[title].questions)) } }));
  });
}

export function buildNotification() {
  return {
    title: 'Flashcards',
    body: "Today's Questions."
  };
}

export function setNotification() {
  AsyncStorage.getItem(notificationKey)
    .then(JSON.parse)
    .then(data => {
      if (!data) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync().then(() => {
              let today = new Date();
              today.setDate(today.getDate());
              today.setHours(23, 0, 0);

              const notification = buildNotification();

              Notifications.scheduleLocalNotificationAsync(notification, {
                time: today,
                repeat: 'day'
              }).then(result => {

              });
            });

            AsyncStorage.setItem(notificationKey, JSON.stringify(true));
          }
        });
      }
    });
  return;
}