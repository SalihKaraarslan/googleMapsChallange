import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './RenderRegion.styles';

const RenderRegion = ({onPress, name}) => {
  return (
    <TouchableOpacity style={styles.renderItemWrapper} onPress={onPress}>
      <Text style={styles.renderItemTitle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default RenderRegion;
