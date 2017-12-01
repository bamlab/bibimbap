import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';
export default class Page extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#25c8f9', '#3a82d4']}
        style={[styles.container, this.props.style]}
      >
        {this.props.children}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
