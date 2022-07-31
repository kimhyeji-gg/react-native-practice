import React from "react";
import { Text, Image, View, TouchableOpacity, Button, useEffect } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import * as Font from "expo-font";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import TravelRecordScreen from "./TravelRecordScreen";
import TravelSearchScreen from "./TravelSearchScreen";
import MypageScreen from "./MypageScreen";
import SearchScreen from "./SearchScreen";

/*
Font.loadAsync({
      "GBold": require("../assets/fonts/GmarketSansTTFBold.ttf"),
      "GLight": require("../assets/fonts/GmarketSansTTFLight.ttf"),
      "GMedium": require("../assets/fonts/GmarketSansTTFMedium.ttf"),
});
*/

const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "홈",
      headerTitle:"같이갈래?",
      headerTintColor: '#92B4EC',
      // 타이틀 텍스트의 스타일
      headerTitleStyle: {
        fontFamily:"GBold",
        fontSize: 25,
        
      },
      headerRight: () => (
        <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen')}}>
          <Image source = {require("../assets/images/search.png")} style={{width:22, height : 22, marginRight:20}}/>
        </TouchableOpacity>
      ),
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
        title: "마이페이지",
        headerTitle:"같이갈래?",
        headerTintColor: '#92B4EC',
        // 타이틀 텍스트의 스타일
        headerTitleStyle: {
          fontFamily:"GBold",
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen')}}>
            <Image source = {require("../assets/images/search.png")} style={{width:22, height : 22, marginRight:20}}/>
          </TouchableOpacity>
        ),
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
        title: "여행기록",
        headerTitle:"같이갈래?",
        headerTintColor: '#92B4EC',
        // 타이틀 텍스트의 스타일
        headerTitleStyle: {
          fontFamily:"GBold",
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen')}}>
            <Image source = {require("../assets/images/search.png")} style={{width:22, height : 22, marginRight:20}}/>
          </TouchableOpacity>
        ),
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
        title: "여행탐색",
        headerTitle:"같이갈래?",      
        headerTintColor: '#92B4EC',
        // 타이틀 텍스트의 스타일
        headerTitleStyle: {
          fontFamily:"GBold",
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen')}}>
            <Image source = {require("../assets/images/search.png")} style={{width:22, height : 22, marginRight:20}}/>
          </TouchableOpacity>
        ),
      }),
    }
);
  
const SearchStack = createStackNavigator(
    {
        SearchScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Search',
        }),
    }
);

const TabNavigator = createBottomTabNavigator(
  {
    홈: HomeStack,
    여행탐색: TravelSearchStack,
    여행기록: TravelRecordStack,
    마이페이지: MypageStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;

        if (routeName === "홈") {
          icon = focused ? require("../assets/images/home_color.png") : require("../assets/images/home_black.png");
        } else if (routeName === "여행탐색") {
          icon = focused ? require("../assets/images/location_color.png") : require("../assets/images/location_black.png");
        } else if (routeName === "여행기록") {
            icon =focused ? require("../assets/images/write_color.png") : require("../assets/images/write_black.png");
        } else if (routeName === "마이페이지") {
            icon = focused ? require("../assets/images/user_color.png") : require("../assets/images/user_black.png");
        }

        // can use react-native-vector-icons
        // <Icon name={iconName} size={iconSize} color={iconColor} />
        return (
          <Text style={{ color: (focused && "#92B4EC") || "#000000", fontFamily:"GBold" }}>
            <Image source = {icon} style={{width:22, height : 22}}/>
          </Text>
        );
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "#92B4EC",
      inactiveTintColor: "#000000",
      labelStyle:{
        fontFamily:"GMedium",
        fontSize:12,
      }
    },
    
  }
);

const AppStack = createStackNavigator({
  LoginScreen: LoginScreen,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  SearchScreen: SearchScreen,
});

export default createAppContainer(AppStack);