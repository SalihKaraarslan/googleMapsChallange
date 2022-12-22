import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './Detail.styles';

import {useNavigation} from '@react-navigation/native';
import CloseButton from '../../components/CloseButton/CloseButton';
import BottomBar from '../../components/BottomBar';
import Map from '../../components/Map';
import {decode} from '@googlemaps/polyline-codec';

const Detail = ({route}) => {
  const mapRef = useRef(null);
  const {goBack} = useNavigation();
  const [selectedRegion, setSelectedRegion] = useState(route?.params?.region);

  const regions = route?.params?.regions;

  const filterRoute = route?.params?.routes.filter(
    r => r.regionId === selectedRegion._id,
  );

  const decodedRoute = decode(filterRoute[0].encodedPolyline);
  const polylineCoords = decodedRoute?.map(c => ({
    latitude: c[0],
    longitude: c[1],
  }));

  const polygonCoords = selectedRegion.polygon.coordinates[0]?.map(c => ({
    latitude: c[1],
    longitude: c[0],
  }));

  const centerLatitude = selectedRegion.center.coordinates[1];
  const centerLongitude = selectedRegion.center.coordinates[0];

  const startLatitude = polylineCoords[0].latitude;
  const startLongitude = polylineCoords[0].longitude;

  const finishLatitude = polylineCoords[polylineCoords.length - 1].latitude;
  const finishLongitude = polylineCoords[polylineCoords.length - 1].longitude;

  const leftArrowPress = id => {
    if (id === 'region1') {
      setSelectedRegion(regions[2]);
    } else if (id === 'region2') {
      setSelectedRegion(regions[0]);
    } else if (id === 'region3') {
      setSelectedRegion(regions[1]);
    }
  };

  const rightArrowPress = id => {
    if (id === 'region1') {
      setSelectedRegion(regions[1]);
    } else if (id === 'region2') {
      setSelectedRegion(regions[2]);
    } else if (id === 'region3') {
      setSelectedRegion(regions[0]);
    }
  };

  useEffect(() => {
    mapRef.current.fitToCoordinates(polylineCoords, {
      edgePadding: {top: 50, right: 100, bottom: 50, left: 100},
    });
  }, [polylineCoords]);

  return (
    <View style={styles.container}>
      <Map
        mapRef={mapRef}
        centerLatitude={centerLatitude}
        centerLongitude={centerLongitude}
        finishLatitude={finishLatitude}
        finishLongitude={finishLongitude}
        polygonCoords={polygonCoords}
        polylineCoords={polylineCoords}
        startLatitude={startLatitude}
        startLongitude={startLongitude}
      />
      <CloseButton goBack={goBack} />
      <BottomBar
        selectedRegionName={selectedRegion.name}
        leftArrowPress={() => leftArrowPress(selectedRegion._id)}
        rightArrowPress={() => rightArrowPress(selectedRegion._id)}
      />
    </View>
  );
};

export default Detail;
