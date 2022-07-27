import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import TravelRecordScreen from "./TravelRecordScreen";
import TravelSearchScreen from "./TravelSearchScreen";
import MypageScreen from "./MypageScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Home",
    }),
  }
);

const MypageStack = createStackNavigator(
    {
      MypageScreen,
    },
    // if you need.
    // recommend custom header
    {
      defaultNavigationOptions: ({ navigation }) => ({
        title: "Mypage",
      }),
    }
  );

  
  const TravelRecordStack = createStackNavigator(
    {
      TravelRecordScreen,
    },
    // if you need.
    // recommend custom header
    {
      defaultNavigationOptions: ({ navigation }) => ({
        title: "TravelRecord",
      }),
    }
  );

  
  const TravelSearchStack = createStackNavigator(
    {
      TravelSearchScreen,
    },
    // if you need.
    // recommend custom header
    {
      defaultNavigationOptions: ({ navigation }) => ({
        title: "TravelSearch",
      }),
    }
  );
  


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    TravelSearch: TravelSearchStack,
    TravelRecord: TravelRecordStack,
    Mypage: MypageStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = "▲";

        if (routeName === "Home") {
          icon = "❤";
        } else if (routeName === "TravelSearch") {
          icon = "🧡";
        } else if (routeName === "TravelRecord") {
            icon = "💛";
        } else if (routeName === "Mypage") {
            icon = "💚";
        }

        // can use react-native-vector-icons
        // <Icon name={iconName} size={iconSize} color={iconColor} />
        return (
          <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
            {icon}
          </Text>
        );
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "#46c3ad",
      inactiveTintColor: "#888",
    },
  }
);

const AppStack = createStackNavigator({
  LoginScreen: LoginScreen,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: false,
    }),
  },
});

export default createAppContainer(AppStack);