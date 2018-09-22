
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import home from './Screens/home';
import NUX1 from './Screens/NUX1';
import Accept from './Screens/Accept';
import sending from './Screens/sending';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
} 

const AppStackNavigator = StackNavigator({
  Accept: {screen: Accept},
  NUX1: {screen: NUX1},
  home: {screen: home},
  sending: {screen: sending},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
