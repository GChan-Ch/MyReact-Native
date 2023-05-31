import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
      </View>
    );
  }
}