import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class NewQuestion extends Component {
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
      <View style={ styles.contentContainer } >
        <FlatList contentContainerStyle={ styles.contentContainer } data={ this.state.decks }
					renderItem={entry => {
						return (
							<TouchableOpacity>
								<View>
									<Text style={{ color: 'black' }}>{entry.item.title}</Text>
									<Text style={{ color: 'black' }}>{entry.item.questions.length}</Text>
								</View>
							</TouchableOpacity>
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
		justifyContent: 'center'
	}
});
