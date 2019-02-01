import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const asyncStorageDeck = "flashcards:decks";

export default class DeckView extends Component {
	onClick() {
    if (this.props.navigation.state.params.deck.item.questions.length === 0) {
      this.props.navigation.navigate('Percentage', { deck: this.props.navigation.state.params.deck, correct: 0, incorrect: 0 });
    } else {
      this.props.navigation.navigate('Quiz', { deck: this.props.navigation.state.params.deck, index: 0, correct: 0, incorrect: 0 });
    }
  }
	render() {
		return (
      <View style={styles.contentContainer} >
				<TouchableOpacity>
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
      <TouchableOpacity onPress={() => this.onClick()}>
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
		justifyContent: 'center'
	}
});
