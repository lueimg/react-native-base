import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, TextInput } from 'react-native';

class PizzaTraslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput style={{height: 30}} placeholder="escribe aqui" onChangeText={(text) => this.setState({text: text}) }/>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) =>  word && '🍕' ).join(' ')}
        </Text>
      </View>
    )
  }
}


class HelloWordApp extends Component {
  render () {

    return (
      <View>
        <Blink text='I love to blink'/>
        <Blink text='other text'/>

      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => PizzaTraslator);
