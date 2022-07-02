import {StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setAge} from '../src/redux/action';

// PUSH NOTIFICATIONS
import PushNotification from 'react-native-push-notification';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {name, age} = useSelector(state => state.user);

  useEffect(() => {
    getData();
    createChannel();
  }, []);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  const getData = async () => {
    try {
      await AsyncStorage.getItem('UserData').then(value => {
        if (value !== null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHanlder = async () => {
    if (name.length == 0) {
      Alert.alert('Warning', 'Please enter your name');
    } else {
      try {
        dispatch(setName(name));
        dispatch(setAge(age));
        let userData = {
          name: name,
          age: age,
        };

        await AsyncStorage.setItem('UserData', JSON.stringify(userData));
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../assets/sqliteLogo.jpeg')}></Image>
      {/* <Text style={styles.text}>Async Storage</Text> */}
      <View style={styles.inputSection}>
        <TextInput
          placeholder="Please Enter Your Name"
          style={styles.input}
          value={name}
          onChangeText={value => dispatch(setName(value))}></TextInput>

        <TextInput
          keyboardType="decimal-pad"
          placeholder="Please Enter Your Age"
          style={styles.input}
          value={age}
          onChangeText={value => dispatch(setAge(value))}></TextInput>
      </View>

      <View style={{width: 200, color: '#ffffff'}}>
        <Button
          title="Login"
          color="#1eb900"
          onPress={onSubmitHanlder}></Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
  inputSection: {
    marginTop: 130,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#555',
    backgroundColor: '#ffffff',
    // marginTop: 130,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});
