import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Page from './Page';

export default class App extends React.Component {
  render() {
    return (
      <Page>
        <Text style={styles.label}>BIBIMBAP</Text>
        <TextInput style={styles.input}/>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>C'est bien mon nom</Text></TouchableOpacity>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  label: {color: '#48c89a'},
  input: {},
  button: {},
  textButton: {} 
});
