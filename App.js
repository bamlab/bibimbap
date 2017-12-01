import React from 'react';
import { StyleSheet, View } from 'react-native';
import Page from './Page';

export default class App extends React.Component {
  render() {
    return <Page style={styles.page} />;
  }
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16
  }
});
