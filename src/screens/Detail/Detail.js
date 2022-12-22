import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MapView, {Polygon, Polyline} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {decode} from '@googlemaps/polyline-codec';

const Detail = ({route}) => {
  const {goBack} = useNavigation();

  const filterRoute = route?.params?.routes.filter(
    r => r.regionId === route?.params?.region._id,
  );

  const decodedRoute = decode(filterRoute[0].encodedPolyline);

  const polylineCoords = decodedRoute?.map(c => ({
    latitude: c[0],
    longitude: c[1],
  }));

  const polygon = route.params.region.polygon.coordinates[0]?.map(c => ({
    latitude: c[1],
    longitude: c[0],
  }));

  const centerLatitude = route.params.region.center.coordinates[1];
  const centerLongitude = route.params.region.center.coordinates[0];

  return (
    <View
      style={{
        flex: 1,
      }}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: centerLatitude,
          longitude: centerLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Polygon
          coordinates={polygon}
          fillColor="rgba(96,96,96,0.5)"
          strokeColor="#696969"
          strokeWidth={2}
        />
        <Polyline
          coordinates={polylineCoords}
          strokeColor="#1E90FF"
          strokeWidth={2}
        />
      </MapView>
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
          {/* <Ionicons name="arrow-back" size={32} color={'black'} /> */}

          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-SemiBold',
            }}>
            {'detail'}
          </Text>
          {/* <Ionicons name="arrow-forward" size={32} color={'black'} /> */}
        </View>
      </View>
    </View>
  );
};

export default Detail;
