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
import Home from './screens/Home';
import Login from './screens/Login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Map from './screens/Map';
import CameraComponent from './screens/CameraComponent';

const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();
// const MaterialBottomTab = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();
// const DrawerNavigation = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* STACK NAVIGATION */}

        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Camera" component={CameraComponent} />
        </Stack.Navigator>

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

        {/* <MaterialTopTabs.Navigator
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
      </MaterialTopTabs.Navigator> */}

        {/* DRAWER NAVIGATION */}

        {/* <DrawerNavigation.Navigator>
        <DrawerNavigation.Screen name="Screen A" component={ScreenA} />
        <DrawerNavigation.Screen name="Screen B" component={ScreenB} />
      </DrawerNavigation.Navigator> */}
      </NavigationContainer>
    </Provider>
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
