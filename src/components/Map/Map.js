import {Image} from 'react-native';
import React from 'react';
import styles from './Map.styles';
import MapView, {Marker, Polygon, Polyline} from 'react-native-maps';

const Map = props => {
  const {
    mapRef,
    centerLatitude,
    centerLongitude,
    finishLatitude,
    finishLongitude,
    polygonCoords,
    polylineCoords,
    startLatitude,
    startLongitude,
  } = props;

  return (
    <MapView
      provider="google"
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: centerLatitude,
        longitude: centerLongitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{
          latitude: finishLatitude,
          longitude: finishLongitude,
        }}>
        <Image
          style={styles.image}
          source={require('../../assets/images/home-marker.png')}
        />
      </Marker>
      <Polygon
        coordinates={polygonCoords}
        fillColor="rgba(96,96,96,0.5)"
        strokeColor="#696969"
        strokeWidth={2}
      />
      <Polyline
        coordinates={polylineCoords}
        strokeColor="#1E90FF"
        strokeWidth={2}
      />

      <Marker
        coordinate={{
          latitude: startLatitude,
          longitude: startLongitude,
        }}>
        <Image
          style={styles.image}
          source={require('../../assets/images/courier-marker.png')}
        />
      </Marker>
    </MapView>
  );
};

export default Map;
