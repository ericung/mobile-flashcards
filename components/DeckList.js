import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { submitDeck, submitCard, getDeck, getCard } from '../utils/helpers';

export default class DeckList extends Component {
	componentDidMount() {

	}
  render() {
    return (
			<View style={styles.container}>
        <TextInput>udacicards!</TextInput>
        <TextInput>udacicards!</TextInput>
        <TextInput>udacicards!</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

