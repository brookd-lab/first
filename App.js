import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './components/HelloWorld';
import LotsOfGreetings from './components/HelloProps';
import TestState from './components/HelloHooks';
import TestClass from './components/HelloClasses';
import {NavigationContainer} from '@react-navigation/native';
import { IndexScreen } from './components/IndexScreen';

export default function App() {
  return (
    // <NavigationContainer>
    //     <Stack.Navigator> 
    //     <Stack.Screen name="HomeScreen" component = {IndexScreen} /> 
    //   </Stack.Navigator> 
    // </NavigationContainer> 
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <HelloWorldApp />
      <LotsOfGreetings />
      <TestState />
      <TestClass />
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
