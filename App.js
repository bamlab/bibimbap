import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Page from './Page';

export default class App extends React.Component {
  render() {
    return (
      <Page style={styles.page}>
        <TextInput
          placeholderTextColor="white"
          placeholder="nom"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#25c8f9'
  },
  input: {
    alignSelf: 'stretch',
    color: 'white',
    paddingVertical: 5,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 30,
    fontSize: 20
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingVertical: 13
  },
  buttonText: {
    color: '#177aed',
    fontSize: 20,
    textAlign: 'center'
  }
});
