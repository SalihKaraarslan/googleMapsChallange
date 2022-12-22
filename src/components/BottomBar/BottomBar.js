import {Text, View} from 'react-native';
import React from 'react';
import styles from './BottomBar.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

const BottomBar = ({selectedRegionName, leftArrowPress, rightArrowPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Ionicons
          onPress={leftArrowPress}
          name="arrow-back"
          size={32}
          color={'black'}
        />

        <Text style={styles.renderItemTitle}>{selectedRegionName}</Text>
        <Ionicons
          onPress={rightArrowPress}
          name="arrow-forward"
          size={32}
          color={'black'}
        />
      </View>
    </View>
  );
};

export default BottomBar;
