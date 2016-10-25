/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MyScene from './navigator/MyScene';

class YoDawgApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

AppRegistry.registerComponent('MyFirstApp', () => YoDawgApp);
