import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class DeckList extends Component {
  render() {
    return (
		<View style={styles.container}>
        <TextInput>Hey there!</TextInput>
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

