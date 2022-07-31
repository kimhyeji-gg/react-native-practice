import React from 'react';
import AppStack from './screens';
import * as Font from "expo-font";
import { useState } from 'react';
import AppLoading from 'expo-app-loading';

const App = () => {
  const [isReady, setIsReady] = useState(false);
 
  const getFonts = async () => {
    await Font.loadAsync({
      "GBold": require("./assets/fonts/GmarketSansTTFBold.ttf"),
      "GLight": require("./assets/fonts/GmarketSansTTFLight.ttf"),
      "GMedium": require("./assets/fonts/GmarketSansTTFMedium.ttf"),
    });
  }
  return isReady ? (
    <AppStack />
  ) : (
    <AppLoading
            startAsync={getFonts}
              onFinish={() => setIsReady(true)}
              onError={() => {}}
        />
    );
};

export default App;

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
