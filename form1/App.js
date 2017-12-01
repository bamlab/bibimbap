import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Page from './Page';


// ACTION TYPES
export const actionTypes = {
  SAVE_INPUT: 'SAVE_INPUT',
};

export const saveInput = (currentName) => ({ type: actionTypes.SAVE_INPUT, payload: currentName });

const initialState = {
  currentName: '',
};

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.SAVE_INPUT:
      return {
        currentName: action.payload
      };
    default:
      return state;
  }
};

export function getCurrentName(state) {
  return state.currentName;
}


const store = createStore(reducer);


const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: '#48c89a',
    fontSize: 40,
    color: '#48c89a',
    marginBottom: 80
  },
  input: {
    color: '#9b9b9b',
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
    alignSelf: 'stretch',
    marginVertical: 33,
    paddingBottom: 5
  },
  button: {
    backgroundColor: '#48c89a',
    borderRadius: 4,
    width: 288,
    height: 41,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff'
  }
});

class MainPage extends React.Component {
  render() {
    return (
      <Page style={styles.page}>
        <Text style={styles.label}>BIBIMBAP</Text>
        <TextInput style={styles.input} placeholder="Entrez votre nom" onChangeText={this.props.saveInput}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>C'est bien mon nom</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = {
  saveInput,
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
