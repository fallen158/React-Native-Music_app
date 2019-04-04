import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function TabBarIcon(props) {
  const { name, color, size } = props;
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
}

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === "Home") {
    iconName = "ios-home";
  } else if (routeName === "Browse") {
    iconName = "ios-browsers";
  } else if (routeName === "Your Library") {
    iconName = "logo-buffer";
  }else if (routeName === "Search") {
    iconName = "ios-search";
  }else if (routeName === "Radio") {
    iconName = "ios-radio";
  }
  return <TabBarIcon name={iconName} size={25} color={tintColor} />;
};

export default getTabBarIcon;
