import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';
import { DeckView } from './DeckView';

export const asyncStorageDeck = "flashcards:decks";

export default class DeckList extends Component {
	state = {
		decks: {}
	}
	componentDidMount() {
    var data = getDecks();
    data.then(result => {
      var values = Object.values(result);

      this.setState({
        decks: values
      });
    });
	}
  render() {
		return (
			<View style={ styles.contentContainer } >
        <FlatList contentContainerStyle={styles.contentContainer} data={this.state.decks}
					renderItem={entry => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', { deck: entry })} key={entry.index}>
								<View>
									<Text style={{ color: 'black' }}>{entry.item.title}</Text>
									<Text style={{ color: 'black' }}>{entry.item.questions.length} Cards</Text>
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
