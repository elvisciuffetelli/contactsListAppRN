import React, { Component } from "react";

import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class PeopleInfo extends Component {
  static navigationOptions = {
    title: "Restaurant Info"
  };

  addInfo = () => {
    this.props.navigation.navigate("AddInfo");
  };

  render() {
    const person =
      // getParam is like state.params but we don't need to check for null using it
      // this.props.navigation.state.params &&
      // this.props.navigation.state.params.person;
      this.props.navigation.getParam("person");

    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <Image
            source={{ uri: person.picture.medium }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.info}>
            <Text style={styles.name}>{`${person.name.first} ${
              person.name.last
            }`}</Text>
            <Text style={styles.address}>{`City: ${
              person.location.city
            }`}</Text>
            <Text style={styles.address}>{`Age: ${person.dob.age}`}</Text>
            <TouchableOpacity style={styles.button} onPress={this.addInfo}>
              <Text style={styles.buttonText}>Add info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  infoHeader: {
    flexDirection: "row"
  },
  info: {
    marginTop: 20
  },
  name: {
    fontSize: 24
  },
  address: {
    color: "grey",
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
