import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styleModels } from "../constants/Style";
import axios from 'axios'


export class SongCard extends Component {
  // componentDidMount(){
  //   try {
  //     axios.get('https://facebook.github.io/react-native/movies.json').then(res=>{
  //       console.log(res)
  //     })
  //   } catch (error) {
      
  //   }
  // }
  render() {
    return (
     <>
      <View>
        <Text style={styleModels.titleStyle}>Made For You</Text>
        <ScrollView horizontal={true} style={{ margin: 7.5 }}>
          <View style={{ margin: 7.5 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>

          <View style={{ margin: 7.5 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>

          <View style={{ margin: 7.5 }}>
            <Image
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
              style={{ width: 150, height: 150 }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text style={styleModels.titleStyle}>Made For You</Text>
        <ScrollView horizontal={true} style={{ margin: 7.5 }}>
          <View style={{ margin: 7.5 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>

          <View style={{ margin: 7.5 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>

          <View style={{ margin: 7.5 }}>
            <Image
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
              style={{ width: 150, height: 150 }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text style={styleModels.titleStyle}>Made For You</Text>
        <ScrollView horizontal={true} style={{ margin: 7.5 }}>
          <View style={{ margin: 7.5 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>

          <View style={{ margin: 7.5 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>

          <View style={{ margin: 7.5 }}>
            <Image
              source={{
                uri:
                  "http://p1.music.126.net/Bh8D8ZlWp863MEYVepoMFg==/18931391207465006.jpg"
              }}
              style={{ width: 150, height: 150 }}
            />
            <Text style={styleModels.textColor}>Made For You</Text>
            <Text style={styleModels.briefColor}>DPR LIVE Sik-K</Text>
          </View>
        </ScrollView>
      </View>
     
     </>
    );
  }
}

export default SongCard;
