/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name} !</Text>
    );
  }
}

class LotsOfGreentings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Julian" />
        <Greeting name="Yoel" />
        <Greeting name="Valeria" />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyFirstApp', () => LotsOfGreentings);
