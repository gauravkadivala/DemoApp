import { StyleSheet, Text, View } from 'react-native'
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Home from './Screens/Home';
import SettingsScreen from './Screens/SettingsScreen';
import About from './Screens/About';
import Contact from './Screens/Contact';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='About' component={About} />
        <Drawer.Screen name='Contact' component={Contact} />
        <Drawer.Screen name='SettingScreen' component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})