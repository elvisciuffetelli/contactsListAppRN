import React, { Component } from "react";

import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 40 }}>
        <Text style={styles.header}>About People</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.text}>
          Mauris Lorem ipsum dolor sdi Cras _ultrsa
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20
  },
  icon: {
    marginVertical: 20,
    alignSelf: "center"
  },
  text: {
    fontSize: 14,
    color: "#444",
    marginTop: 20
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff"
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12
  }
});
