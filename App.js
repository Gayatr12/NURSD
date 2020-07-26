import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "./screen/Home";
import Help from "./screen/Help";
import Feed from "./screen/Feed";
import Profile from "./screen/Profile";

import { Ionicons } from "@expo/vector-icons";

const tabNavigator = createBottomTabNavigator(
  {
    Home: createStackNavigator({
      Home: Home,
    }),

    Feed: createStackNavigator({
      Feed: Feed,
    }),
    Profile: createStackNavigator({
      Profile: Profile,
    }),
    Help: createStackNavigator({
      Help: Help,
    }),
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "Feed") {
          iconName = "md-apps";
        } else if (routeName === "Help") {
          iconName = "ios-help";
        } else if (routeName === "Profile") {
          iconName = "ios-person";
        }

        return;
        <IconComponent
          name={iconName}
          size={25}
          color={tintColor}
        ></IconComponent>;
      },
    }),
  }
);

const App = createAppContainer(tabNavigator);
export default App;
