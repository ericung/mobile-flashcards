import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

export const asyncStorageDeck = "flashcards:decks";

export default class CardView extends Component {
	onClick() {
		return;
	}
	render() {
		return (
			<View style={styles.contentContainer} >
				<FlatList contentContainerStyle={styles.contentContainer} data={this.props.navigation.state.params.deck.item.questions}
					renderItem={entry => {
						return (
							<TouchableOpacity onPress={entry => this.onClick()} key={ entry.index }>
								<View>
									<Text style={{ color: 'black' }}>{entry.item.question}</Text>
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
		justifyContent: 'center',
	}
});
