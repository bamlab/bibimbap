import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Page from "./Page";
import { StackNavigator } from "react-navigation";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const actionTypes = { saveInput: "SAVE_INPUT" };

const saveInputCreator = value => ({
  type: actionTypes.saveInput,
  payload: value
});

const intitialState = {
  currentName: ""
};

const reducer = (state = intitialState, action) => {
  console.log(action);
  switch (action.types) {
    case actionTypes.saveInput:
      return { currentName: action.payload };
    default:
      return state;
  }
};

const getCurrentName = store => store.currentName;

const store = createStore(reducer);

const styles = StyleSheet.create({
  page: {
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#30d1e5",
    marginBottom: 62,
    fontFamily: "Menlo"
  },
  input: {
    alignSelf: "stretch",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginBottom: 25,
    paddingBottom: 8,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Menlo",
    color: "white"
  },
  button: {
    alignSelf: "stretch",
    borderRadius: 25,
    backgroundColor: "#ffffff",
    paddingVertical: 12
  },
  textInput: {
    backgroundColor: "transparent",
    fontFamily: "Menlo",
    fontSize: 20,
    textAlign: "center",
    color: "#4a4a4a",
    fontFamily: "Menlo"
  }
});

class MainPage extends React.Component {
  render() {
    return (
      <Page style={styles.page}>
        <Text style={styles.text}>BIBIMBAP</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Enter your name"
          onChangeText={this.props.setName}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textInput}> Sign In </Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

const mapState = state => ({});
const mapDispatch = {
  setName: saveInputCreator
};
const ConnectedMainPage = connect(mapState, mapDispatch)(MainPage);

class GreetingsPage extends React.Component {
  render() {
    return <Page style={styles.page} />;
  }
}

const Router = StackNavigator({
  Main: { screen: ConnectedMainPage },
  Greetings: { screen: GreetingsPage }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
