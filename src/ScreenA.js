import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function ScreenA({navigation}) {
  const navigateHandler = e => {
    navigation.navigate('Screen B', {
      itemId: '86',
      otherParam: 'anything you want here',
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Screen A</Text>
      <Pressable style={styles.button}>
        <Text style={{color: 'white'}} onPress={navigateHandler}>
          Go To Screen B
        </Text>
      </Pressable>
    </View>
  );
}

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
