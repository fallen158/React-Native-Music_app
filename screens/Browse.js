import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleModels, themeStyles } from '../constants/Style';

export default class Browse extends Component {
  static navigationOptions = {
    title: 'Browse',
    headerStyle: {
      backgroundColor: themeStyles.themeBackground
    },
    headerTintColor: themeStyles.textColor
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styleModels.container}>
        <Text style={styleModels.textColor}> 我是专辑页面 </Text>
      </View>
    );
  }
}
