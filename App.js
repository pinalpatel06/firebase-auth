/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import SignUp from './src/component/SignUp';
import SignIn from './src/component/SignIn';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAiogeX_AArbKhoKf--untvKRrZTMIRTDw',
      authDomain: 'one-time-password-3c093.firebaseapp.com',
      databaseURL: 'https://one-time-password-3c093.firebaseio.com',
      projectId: 'one-time-password-3c093',
      storageBucket: 'one-time-password-3c093.appspot.com',
      messagingSenderId: '569836817014'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <SignUp />
        <SignIn />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
};
