import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

export default class PersonRow extends Component {
  state = {
    showInfo: false
  };

  infoPressed = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { person, index } = this.props;
    return (
      <View
        key={person.name.first}
        style={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}
      >
        <View style={styles.row}>
          <View style={styles.edges}>
            <Text>{index + 1}</Text>
          </View>

          <View style={styles.nameAddress}>
            <Text>{person.name.first}</Text>
            <Text style={styles.addressText}>{person.email}</Text>
          </View>

          <View style={styles.edges}>
            <TouchableHighlight
              onPress={this.infoPressed}
              style={styles.button}
              underlayColor="#5398DC"
            >
              <Text style={styles.buttonText}>Info</Text>
            </TouchableHighlight>
          </View>
        </View>

        {this.state.showInfo && (
          <View style={styles.info}>
            <Text>Person Info</Text>
            <Image
              source={{ uri: person.picture.medium }}
              style={{ height: 100, width: 100 }}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50
  },
  nameAddress: { flexDirection: "column", flex: 8, padding: 5 },
  addressText: { color: "grey" },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
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
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4
  }
});
