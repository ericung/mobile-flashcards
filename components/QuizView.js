import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class QuizView extends Component {
	render() {
		// console.log(this.props.navigation.state.params.deck);
		return (
			<View style={styles.contentContainer} >
				<FlatList contentContainerStyle={styles.contentContainer} data={ this.props.navigation.state.params.deck.item.questions }
					renderItem={entry => {
						console.log( entry.item.question );
						return (
							<View>
								<TouchableOpacity onPress={entry => this.onClick()}>
									<View>
										<Text style={{ color: 'black' }}>{entry.item.question}</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={entry => this.onClick()}>
									<View>
										<Text style={{ color: 'black' }}>Answer</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={entry => this.onClick()}>
									<View>
										<Text style={{ color: 'black' }}>Correct</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={entry => this.onClick()}>
									<View>
										<Text style={{ color: 'black' }}>Incorrect</Text>
									</View>
								</TouchableOpacity>
							</View>
						)
					}} />
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
