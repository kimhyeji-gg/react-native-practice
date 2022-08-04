import React from "react";
import { Image, TouchableOpacity, TextInput } from "react-native";
import { createAppContainer, NavigationEvents } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";


import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import TravelRecordScreen from "./TravelRecordScreen";
import TravelSearchScreen from "./TravelSearchScreen";
import MypageScreen from "./MypageScreen";
import SearchScreen from "./SearchScreen";
import SignupScreen from "./SignupScreen";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";


const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Home",
      headerTitle:"같이갈래?",
      headerTintColor: '#448EF6',
      headerTitleStyle: {
        fontFamily:"GBold",
        fontSize: 30,
        
      },
      //headerShown:false,
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
    {
      defaultNavigationOptions: ({ navigation }) => ({
        title: "Mypage",
        headerTitle:"같이갈래?",
        headerTintColor: '#448EF6',
        headerTitleStyle: {
          fontFamily:"GBold",
          fontSize: 30,
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
    {
      defaultNavigationOptions: ({ navigation }) => ({
        title: "TravelRecord",
        headerTitle:"같이갈래?",
        headerTintColor: '#448EF6',
        headerTitleStyle: {
          fontFamily:"GBold",
          fontSize: 30,
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
      TravelSearchScreen:{
        screen: TravelSearchScreen,
        navigationOptions: ({ navigation }) => ({
          
            title: "TravelSearch",
            headerTitle:"같이갈래?",      
            headerTintColor: '#448EF6',
            headerTitleStyle: {
              fontFamily:"GBold",
              fontSize: 30,
            },
            headerRight: () => (
              <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen')}}>
                <Image source = {require("../assets/images/search.png")} style={{width:22, height : 22, marginRight:20}}/>
              </TouchableOpacity>
            ),
          
        }),
      },
    },
    
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
        
        tabBarIcon: ({ focused }) => {
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

          return (
            <Image source = {icon} style={{width:22, height : 22}}/>
          );
        }
      
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "#448EF6",
      inactiveTintColor: "#000000",
      labelStyle:{
        fontFamily:"GMedium",
        fontSize:12,
      }
    }
 
  }
);

const AppStack = createStackNavigator({
  LoginScreen: {
    screen:LoginScreen,
    navigationOptions:({navigation}) => ({
      headerShown:false
    }),
  },
  SignupScreen: SignupScreen,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  SearchScreen:SearchScreen,
});

export default createAppContainer(AppStack);