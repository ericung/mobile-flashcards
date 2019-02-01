import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import CardView from './components/CardView';
import NewDeck from './components/NewDeck';
import NewQuestion from './components/NewQuestion';
import QuizView from './components/QuizView';
import Percentage from './components/Percentage';
import { getDecks, setNotification } from './utils/api';

export default class App extends Component {
	componentDidMount() {
		setNotification();
	}

  render() {
    return (
      <Stack/>
    );
  }
}

var data = getDecks();
var deckData;
data.then(result => {
  var values = Object.values(result);
	deckData = values;
});

const Stack = createStackNavigator({
	Home: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      decks: deckData
    })
	},
	Deck: {
		screen: DeckView
	},
	Card: {
		screen: CardView
	},
	NewDeck: {
		screen: NewDeck
	},
	NewQuestion: {
		screen: NewQuestion
	},
	Quiz: {
		screen: QuizView
	},
	Percentage: {
		screen: Percentage
	}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
