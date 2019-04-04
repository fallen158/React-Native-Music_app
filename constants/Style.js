import { StyleSheet } from "react-native";

const styleModels = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: "#000"
  },
  textColor: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    marginTop:5,
    marginBottom: 2,
  },
  titleStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop:20
  },

  briefColor: {
    color: "#808080",
    textAlign: "center",
    fontSize: 10
  },
  ButtonColor: {
    color: "#fff",
    backgroundColor: "#29b759"
  }
});

const themeStyles = {
  textColor: "#fff",
  mainBackground: "#000",
  themeBackground: "#282828"
};

export { styleModels, themeStyles };
