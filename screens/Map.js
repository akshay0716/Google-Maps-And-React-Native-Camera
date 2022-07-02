import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function Map({route}) {
  const {cityName, lat, lon} = route.params;
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome {cityName} </Text>
      <MapView
        //    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    margin: 10,
    fontSize: 30,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
