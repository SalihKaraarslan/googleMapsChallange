import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './CloseButton.styles';

const CloseButton = ({goBack}) => {
  return (
    <View style={styles.closeButtonContainer}>
      <TouchableOpacity onPress={() => goBack()}>
        <Image
          style={styles.image}
          source={require('../../assets/images/close-icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CloseButton;
