import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import PeopleList from "components/PeopleList";
import PeopleInfo from "components/PeopleInfo";
import Icons from "react-native-vector-icons/FontAwesome";
import About from "components/About";

const List = createStackNavigator(
  {
    Home: { screen: PeopleList },
    Info: { screen: PeopleInfo }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#0066CC",
        color: "#FFF"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  }
);

const Tabs = createBottomTabNavigator(
  {
    List: { screen: List },
    About: { screen: About }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const name = {
          List: "list",
          About: "info-circle"
        };
        name[routeName];
        return <Icons name={name[routeName]} size={22} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeBackgroundColor: "#E6F0FA"
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Tabs: { screen: Tabs }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
