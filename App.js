import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Page from './Page';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


const actionTypes = { saveInput: 'SAVE_INPUT'};

const saveInputCreator = (value) => ({ type: actionTypes.saveInput, payload: value});

const initialState = {
  currentName: '',
};

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.saveInput:
      return state.currentName;
  default:
    return state;
}
};

const getCurrentName = () => state.currentName;

const store = createStore(reducer);

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


class MainPage extends React.Component {
  render() {
    return (
      <Page style={styles.page}>
        <TextInput
          placeholderTextColor="white"
          placeholder="nom"
          style={styles.input}
          onChangeText={this.props.setName}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setName: saveInputCreator,
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
