import {View, Text} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontFamily: 'Poppins-SemiBold',
        }}>
        asdasdasdasdsa
      </Text>

      {/* <MapView
        style={{
          flex: 1,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
      <Ionicons name="arrow-back" size={32} color={'black'} />
      <Ionicons name="arrow-forward" size={32} color={'black'} />
    </View>
  );
};

export default App;
