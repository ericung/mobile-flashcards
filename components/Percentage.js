import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';

export const asyncStorageDeck = "flashcards:decks";

export default class DeckView extends Component {
	state = {
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
