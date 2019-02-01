import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getDecks, saveDeckTitle } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class NewDeck extends Component {
	state = {
		title: ""
	}
  onClick() {
    saveDeckTitle(this.state.title);
		var data = getDecks();
		var title = this.state.title;
		data.then(result => {
			this.props.navigation.navigate('Deck', { deck: { "item": { "title": title, "questions": [] }}});
    });
  }
  handleInputChange(title) {
    this.setState({
      title: title
    });
  }
	render() {
		return (
			<View style={styles.contentContainer} >
        <Text>What is the title of your new deck?</Text>
        <TextInput placeholder="Deck Title" onChangeText={(title) => this.handleInputChange(title)} />
        <TouchableOpacity onPress={() => this.onClick()}>
          <View>
            <Text style={{ color: 'black' }}>Submit</Text>
          </View>
        </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contentContainer: {
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
