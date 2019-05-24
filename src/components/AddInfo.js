import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class AddInfo extends Component {
  close = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.root}>
        <Text>Add info</Text>
        <TouchableOpacity style={styles.button} onPress={this.close}>
          <Icon name="close" size={30} color="#0066CC" />
        </TouchableOpacity>

        <Text style={styles.addInfo}>Add Info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  button: {
    paddingHorizontal: 10
  },
  addInfo: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20
  }
});
