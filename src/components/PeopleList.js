import React, { Component } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import Header from "components/Header";
import PersonRow from "components/PersonRow";
import axios from "axios";

export default class PeopleList extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    search: null,
    people: []
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=25")
      .then(({ data }) => this.setState({ people: data.results }));
  }

  render() {
    console.log(this.state.people);
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Live search"
          onChangeText={text => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        />

        <FlatList
          data={this.state.people.filter(person => {
            return (
              !this.state.search ||
              person.name.first
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <PersonRow
              person={item}
              index={index}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item => item.name.first}
          initialNumToRender={16}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  }
});
