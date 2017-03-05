import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

class Gretting extends Component {
  render () {
    return (
      <Text>
        hello {this.props.name}!
      </Text>
    )
  }
}


class HelloWordApp extends Component {
  render () {

    return (
      <View style={{alignItems: 'center'}}>
        <Gretting name='Rossana'/>
        <Gretting name='luis'/>
        <Gretting name='test '/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => HelloWordApp);
