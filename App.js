
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';

import NUX1 from './Screens/NUX1';
import home from './Screens/home';
import Accept from './Screens/Accept';
import sending from './Screens/sending';
import NUX2 from './Screens/NUX2';

const firebaseConfig = {
    apiKey: "AIzaSyB4yALj75vJ8HKNrJGxBMKxdAOoEbjDHNM",
    authDomain: "plunklunk-app.firebaseapp.com",
    databaseURL: "https://plunklunk-app.firebaseio.com",
    projectId: "plunklunk-app",
    storageBucket: "plunklunk-app.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
} 

const AppStackNavigator = StackNavigator({
  NUX1: {screen: NUX1},
  Accept: {screen: Accept},
  home: {screen: home},
  sending: {screen: sending},
  NUX2: {screen: NUX2}
        
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
