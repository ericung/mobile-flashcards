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
		value: true,
		deck: this.props.navigation.state.params.deck,
		index: 0,
		correct: this.props.navigation.state.params.correct,
		incorrect: this.props.navigation.state.params.incorrect
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
		var index = this.state.index;
		var entry = this.state.deck.item.questions[index];
		if (entry.value === "true") {
			this.setState({
				index: this.state.index + 1,
				correct: this.state.correct + 1,
				incorrect: this.state.incorrect
			});
		} else {
			this.setState({
				index: this.state.index + 1,
				correct: this.state.correct,
				incorrect: this.state.incorrect + 1
			});
		}
		return;	
	}
	answerIncorrect() {
		var index = this.state.index;
    var entry = this.state.deck.item.questions[index];
		if (entry.value === "false") {
			this.setState({
				index: this.state.index + 1,
				correct: this.state.correct + 1,
				incorrect: this.state.incorrect
			});
		} else {
			this.setState({
				index: this.state.index + 1,
				correct: this.state.correct,
				incorrect: this.state.incorrect + 1
			});
		}
		return;	
	}
	render() {
		var index = this.state.index;
    var entry;
		if (index < (this.state.deck.item.questions.length)) {
			entry = this.state.deck.item.questions[index];
		} else {
			this.props.navigation.navigate('Percentage', { correct: this.state.correct, incorrect: this.state.incorrect });
			entry = this.state.deck.item.questions[this.state.deck.item.questions.length - 1];
		}
		return (
			<View style={styles.contentContainer}>
				<View>
					<View>
						{
							(this.state.display === QuestionType) ?
								<Text style={{ color: 'black' }}>{entry.question}</Text>
								:
								<Text style={{ color: 'black' }}>{entry.answer}</Text>
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
		justifyContent: 'center'
	}
});
