import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { addCardToDeck } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class CardView extends Component {
	state = {
		question: '',
		answer: ''
	}
  onClick() {
    addCardToDeck(this.props.navigation.state.params.deck.item.title, { question: this.state.question, answer: this.state.answer });
		this.props.navigation.navigate('Home');
	}
	render() {
		return (
			<View style={styles.contentContainer} >
				<TextInput placeholder="Question" onChangeText={(question) => this.setState({ question })} />
				<TextInput placeholder="Answer" onChangeText={(answer) => this.setState({ answer })} />
				<TouchableOpacity onPress={entry => this.onClick()}>
					<View>
						<Text style={{ color: 'black' }} onPress={ entry => this.onClick() }>Submit</Text>
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
