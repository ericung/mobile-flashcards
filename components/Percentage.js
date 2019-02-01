import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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
	onRestart() {
		if (this.props.navigation.state.params.deck.item.questions.length === 0) {
      this.props.navigation.navigate('Percentage', { deck: this.props.navigation.state.params.deck, index: 0, correct: 0, incorrect: 0 });
    } else {
      this.props.navigation.navigate('Quiz', { deck: this.props.navigation.state.params.deck, index: 0, correct: 0, incorrect: 0 });
    }
		return;
  }
  onBackToDeck() {
    this.props.navigation.navigate('Deck', { deck: this.props.navigation.state.params.deck, index: 0, correct: 0, incorrect: 0 });
  }
	render() {
		var correct = this.props.navigation.state.params.correct;
		var incorrect = this.props.navigation.state.params.incorrect;
		return (
			<View style={styles.contentContainer} >
				<TouchableOpacity onPress={entry => this.onClick()}>
          <View>
            <Text style={{ color: 'black' }}>{(correct + incorrect === 0) ? 100 : (correct / (correct + incorrect)) * 100}%</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
					<View>
						<Text style={{ color: 'black' }}>Home</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.onRestart()}>
					<View>
						<Text style={{ color: 'black' }}>Restart</Text>
					</View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onBackToDeck()}>
          <View>
            <Text style={{ color: 'black' }}>Back To Deck</Text>
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
