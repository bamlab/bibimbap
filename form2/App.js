import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Page from './Page';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const actionTypes = { saveInput: 'SAVE_INPUT'};

const actionCreator = (value) => ({ type: actionTypes.saveInput, payload: value});

const initialState = {
  currentName : '',
}

const reducer = (state = initialState, action) => {
  console.log(action, state)
  switch (action.type) {
    case actionTypes.saveInput:
      return {
        currentName: action.payload
      };

    default:
      return state;
  }
}

const getCurrentName = (store) => store.currentName;

const store = createStore(reducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#48c89a',
    marginBottom: 80
  },
  input: {
    alignSelf: 'stretch',
    borderColor: '#979797',
    borderBottomWidth: 1,
    color: 'black',
    paddingBottom: 7,
    marginBottom: 33
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 13,
    alignSelf: 'stretch',
    borderRadius: 4,
    backgroundColor: '#48c89a'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});


class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BIBIMBAP</Text>
        <TextInput placeholder="Entrez votre nom" style={styles.input} onChangeText = {this.props.setName}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>C'est bien mon nom</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setName: actionCreator,
};
const ConnectedMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedMainPage />
      </Provider>
    );
  }
}
