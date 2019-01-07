import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AsyncStorage } from 'react-native';
import { saveDeckTitle, getDecks, getDeck } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class DeckList extends Component {
	state = {
		deck: "hey"
	}
	getDeck(key) {
		return AsyncStorage.getItem(asyncStorageDeck, (err, result) => {
			var res = JSON.parse(result);
			res = Object.values(res);
			this.setState({
				deck: res
			});
		});
	}
	componentDidMount() {
		saveDeckTitle("hey","there");
		this.getDeck("hey");
	}
  render() {
    return (
			<View style={styles.container}>
				<TextInput>{this.state.deck}</TextInput>
        <TextInput>udacicards!</TextInput>
        <TextInput>udacicards!</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

