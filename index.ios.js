import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    }

    setInterval(() => {
      this.setState({ showText: !this.state.showText })
    }, 1000)
  }

  render() {
    let display = this.state.showText ? this.props.text: ' ';
    return (
      <Text>
        {display}
      </Text>
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

AppRegistry.registerComponent('AwesomeProject', () => HelloWordApp);
