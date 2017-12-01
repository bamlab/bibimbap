import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Page from './Page';
import {createStore} from 'redux';

const initialState = {
  currentName: '',
};

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Page style={styles.page}>
        <TextInput style={styles.input} placeholder="Entrez votre nom" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Validez</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffd21a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  input: {
    alignSelf: 'stretch',
    paddingVertical: 13,
    backgroundColor: '#FCE696',
    fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'center',
    color: '#9b9b9b',
    marginBottom: 32
  },
  button: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    paddingVertical: 12
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    color: '#4a4a4a'
  }
});
