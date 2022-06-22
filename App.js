import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
// const DrawerNavigation = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* STACK NAVIGATION */}

      {/* <Stack.Navigator>
        <Stack.Screen name="Screen A" component={ScreenA} />
        <Stack.Screen name="Screen B" component={ScreenB} />
      </Stack.Navigator> */}

      {/* BOTTOM TAB NAVIGATION */}

      {/* <BottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen A') {
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );
            } else {
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );
            }
          },
        })}>
        <BottomTab.Screen name="Screen A" component={ScreenA} />
        <BottomTab.Screen name="Screen B" component={ScreenB} />
      </BottomTab.Navigator> */}

      {/* MATERIAL BOTTOM TAB */}

      {/* <MaterialBottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen A') {
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );
            } else {
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );
            }
          },
        })}>
        <MaterialBottomTab.Screen name="Screen A" component={ScreenA} />
        <MaterialBottomTab.Screen name="Screen B" component={ScreenB} />
      </MaterialBottomTab.Navigator> */}

      {/* MATERIAL TOP TABS */}

      <MaterialTopTabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen A') {
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );
            } else {
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );
            }
          },
        })}>
        <MaterialTopTabs.Screen name="Screen A" component={ScreenA} />
        <MaterialTopTabs.Screen
          name="Screen B"
          component={ScreenB}
          initialParams={{itemId: ''}}
        />
      </MaterialTopTabs.Navigator>

      {/* DRAWER NAVIGATION */}

      {/* <DrawerNavigation.Navigator>
        <DrawerNavigation.Screen name="Screen A" component={ScreenA} />
        <DrawerNavigation.Screen name="Screen B" component={ScreenB} />
      </DrawerNavigation.Navigator> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    // margin: 10,
    fontSize: 30,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    width: 300,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
