import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class DeckView extends Component {
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
	render() {
		return (
			<View style={styles.contentContainer} >
				<TouchableOpacity onPress={entry => this.onClick()}>
					<View>
						<Text style={{ color: 'black' }}>{this.props.navigation.state.params.deck.item.title}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View>
						<Text style={{ color: 'black' }}>{this.props.navigation.state.params.deck.item.questions.length} Cards</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Card', { deck: this.props.navigation.state.params.deck })}>
					<View>
						<Text style={{ color: 'black' }}>Add Card</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz', { deck: this.props.navigation.state.params.deck, index: 0, correct: 0, incorrect: 0 })}>
					<View>
						<Text style={{ color: 'black' }}>Start Quiz</Text>
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
		justifyContent: 'center',
	}
});
