import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleModels } from '../constants/Style';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styleModels.container}>
        <Text style={styleModels.textColor}> 我是搜索页面 </Text>
      </View>
    );
  }
}
