import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Divider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';

const QuestionType = "QuestionType";
const AnswerType = "AnswerType";

export default class QuizView extends Component {
	state = {
		display: QuestionType,
		value: true
	}
	switchDisplay() {
		if (this.state.display === QuestionType) {
			this.setState({
				display: AnswerType
			});
		} else {
			this.setState({
				display: QuestionType
			});
		}
	}
	answerCorrect() {
		var index = this.props.navigation.state.params.deck.index;
		var entry = this.props.navigation.state.params.deck.item.questions[index];
		if (this.props.navigation.state.params.deck.item.questions[index].value === true) {
			this.props.navigation.navigate('Quiz', { deck: this.props.navigation.state.params.deck, index: this.props.navigation.state.params.deck.index + 1, yes: this.props.navigation.state.params.deck.yes + 1, no: this.props.navigation.state.params.deck.no });
		}
		return;	
	}
	answerIncorrect() {
		var index = this.props.navigation.state.params.deck.index;
		var entry = this.props.navigation.state.params.deck.item.questions[index];
		if (this.props.navigation.state.params.deck.item.questions[index].value === true) {
			this.props.navigation.navigate('Quiz', { deck: this.props.navigation.state.params.deck, index: this.props.navigation.state.params.deck.index + 1, yes: this.props.navigation.state.params.deck.yes, no: this.props.navigation.state.params.deck.no + 1 });
		}
		return;	
	}
	render() {
		var index = this.props.navigation.state.params.deck.item.index;
		var entry = this.props.navigation.state.params.deck.item.questions[index];
		console.log(this.props.navigation.state.params.deck.item)
		return (
			<View style={styles.contentContainer}>
				<View>
					<View>
						{
							(this.state.display === QuestionType) ?
								<Text style={{ color: 'black' }}>Hello</Text>
								:
								<Text style={{ color: 'black' }}>{ entry.answer }</Text>
						}
					</View>
					<TouchableOpacity onPress={entry => this.switchDisplay()}>
						{
							(this.state.display === QuestionType) ?
								<Text style={{ color: 'black' }}>Answer</Text>
								:
								<Text style={{ color: 'black' }}>Question</Text>
						}
					</TouchableOpacity>
					<TouchableOpacity onPress={entry => this.answerCorrect()}>
						<View>
							<Text style={{ color: 'black' }}>Correct</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={entry => this.answerIncorrect()}>
						<View>
							<Text style={{ color: 'black' }}>Incorrect</Text>
						</View>
					</TouchableOpacity>
				</View>
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
