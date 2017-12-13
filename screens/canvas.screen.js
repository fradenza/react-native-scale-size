import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';


export default class CanvasScreen extends Component {
  static navigationOptions = {
    title: 'Canvas'
  };

  render() {
    const { draw, size } = this.props.navigation.state.params;
    if (draw === 'shape') {
      return (
        <View style={{
          backgroundColor: 'red',
          width: size.width,
          height: size.height
        }}/>
      )
    } else {
      return (
        <Text style={{ fontSize: size.fontSize, textAlign: 'center' }}>CONTROL your budget with x-Cards</Text>
      )
    }
  }
}