import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class NewDeck extends Component {
	state = {
		decks: {}
	}
	componentDidMount() {
		var data = getDecks();
		var dataValues = Object.values(data);
		this.setState({
			decks: dataValues
		});
	}
	onClick() {
		return;
	}
	render() {
		return (
			<View style={styles.contentContainer} >
        <Text>What is the title of your new deck?</Text>
        <TextInput placeholder="Deck Title" />
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
