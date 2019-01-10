import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from './components/DeckList';

export default class App extends Component {
  render() {
    return (
			<Stack/>
    );
  }
}

const Stack = createStackNavigator({
	Home: {
		screen: DeckList
	}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
