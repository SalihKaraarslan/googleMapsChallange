import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Detail = () => {
  const {goBack} = useNavigation();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={{position: 'absolute', top: '8%', right: '8%'}}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            style={{width: 40, height: 40, resizeMode: 'contain'}}
            source={require('../../assets/images/close-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8%',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 40,
            alignItems: 'center',
            marginBottom: '2%',
          }}>
          <Ionicons name="arrow-back" size={32} color={'black'} />

          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-SemiBold',
            }}>
            {'detail'}
          </Text>
          <Ionicons name="arrow-forward" size={32} color={'black'} />
        </View>
      </View>
    </View>
  );
};

export default Detail;
