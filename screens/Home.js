import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GlobalStyle from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setAge, getPosts} from '../src/redux/action';

// PUSH NOTIFICATIONS
import PushNotification from 'react-native-push-notification';

const cities = [
  {name: 'pune', lat: 18.5204, lon: 73.8567},
  {name: 'Nagpur', lat: 21.1458, lon: 79.0882},
  {name: 'Mumbai', lat: 19.076, lon: 72.8777},
  {name: 'Delhi', lat: 28.7041, lon: 77.1025},
  {name: 'Hyderabad', lat: 17.385, lon: 78.4867},
];

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {name, age} = useSelector(state => state.user);

  useEffect(() => {
    getData();
    dispatch(getPosts());
  }, []);

  const getData = async () => {
    try {
      await AsyncStorage.getItem('UserData').then(value => {
        if (value !== null) {
          let userData = JSON.parse(value);
          dispatch(setName(userData.name));
          dispatch(setAge(userData.age));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cityHanlder = (city, index) => {
    navigation.navigate('Map', {
      cityName: city.name,
      lat: city.lat,
      lon: city.lon,
    });

    // alert(city);

    // PushNotification.cancelAllLocalNotifications();

    // PushNotification.localNotification({
    //   channelId: 'test-channel',
    //   title: `Yoy clicked on ${city}`,
    //   message: city,
    //   bigText: `${city} is one of the largest city`,
    //   color: 'red',
    //   id: index,
    // });

    // PushNotification.localNotificationSchedule({
    //   channelId: 'test-channel',
    //   title: `Alarm`,
    //   message: `you clicked on ${city} 20 seconds ago`,
    //   date: new Date(Date.now() + 20 * 1000),
    //   allowWhileIdle: true,
    // });
  };

  const cameraHandler = () => {
    navigation.navigate('Camera');
  };

  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <TextInput
        placeholder="Please Enter Your Name"
        style={styles.input}
        value={name}
        onChangeText={value => dispatch(setName(value))}></TextInput> */}

      <Text style={styles.text}>Welcome {name}</Text>

      <Button
        onPress={cameraHandler}
        style={styles.button}
        title="Open camera"></Button>

      <View style={{marginTop: 30}}>
        <Text style={styles.text}> Your Cities List </Text>
      </View>

      {cities.map((city, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => cityHanlder(city, index)}>
            <View style={styles.citySection}>
              <Text style={styles.text}> {city.name} </Text>
            </View>
          </TouchableOpacity>
        );
      })}

      {/* </Pressable> */}
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

  citySection: {
    borderWidth: 1,
    width: 300,
    alignItems: 'center',
    marginTop: 20,
  },

  text: {
    color: 'black',
    margin: 10,
    fontSize: 30,
  },
  // input: {
  //   marginTop: 20,
  //   borderWidth: 1,
  // },
  button: {
    width: 300,
    backgroundColor: 'blue',
    marginTop: 10,
  },
  // input: {
  //   width: 300,
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   borderColor: '#555',
  //   backgroundColor: '#ffffff',
  //   // marginTop: 130,
  //   marginBottom: 20,
  //   textAlign: 'center',
  //   fontSize: 20,
  // },
});
