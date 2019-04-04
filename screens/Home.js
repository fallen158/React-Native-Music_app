import React, { Component } from 'react';
import { View } from 'react-native';
import { styleModels, themeStyles } from '../constants/Style';
import SongCard from '../components/SongCard';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
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
        <SongCard />
      </View>
    );
  }
}
