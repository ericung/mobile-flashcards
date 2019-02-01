import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getDecks, saveDeckTitle } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class NewDeck extends Component {
	state = {
		title: ""
	}
  onClick() {
    const { title } = this.state;
    if (!title) {
      return alert("please fill the form");
    }
    saveDeckTitle(this.state.title);
		getDecks().then( () => {
			this.props.navigation.navigate('Deck', { deck: { "item": { "title": title, "questions": [] }}});
    });
    this.setState({ title: "" });
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
        <TextInput placeholder="Deck Title" onChangeText={(title) => this.handleInputChange(title)} value={ this.state.title }/>
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
