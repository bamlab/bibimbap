import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import Page from './Page';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
const actionTypes = { saveInput: 'SAVE_INPUT' };

const actionCreator = value => ({
  type: actionTypes.saveInput,
  payload: value
});

const initialState = {
  currentName: ''
};

const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case actionTypes.saveInput:
      return {
        currentName: action.payload
      };

    default:
      return state;
  }
};

const getCurrentName = store => store.currentName;

const store = createStore(reducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#48c89a',
    marginBottom: 80
  },
  input: {
    alignSelf: 'stretch',
    borderColor: 'white',
    borderBottomWidth: 1,
    fontSize: 20,
    color: 'white',
    paddingBottom: 7,
    marginBottom: 33,
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 13,
    alignSelf: 'stretch',
    backgroundColor: 'white'
  },
  buttonText: {
    textAlign: 'center',
    color: '#4a90e2',
    fontSize: 20
  }
});

class MainPage extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="height"
        keyboardVerticalOffset={20}
      >
        <Page style={styles.container}>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="white"
            style={styles.input}
            onChangeText={this.props.setName}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Validate</Text>
          </TouchableOpacity>
        </Page>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  setName: actionCreator
};
const ConnectedMainPage = connect(mapStateToProps, mapDispatchToProps)(
  MainPage
);

class GreetingsPage extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const Router = StackNavigator(
  {
    Main: { screen: ConnectedMainPage },
    Greetings: { screen: GreetingsPage }
  },
  {
    cardStyle: {
      margin: 0,
      marginHorizontal: 0,
      padding: 0
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
