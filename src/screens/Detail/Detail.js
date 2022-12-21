import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Detail = () => {
  const {goBack} = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Detail</Text>
      <Button title="Go to Detail" onPress={() => goBack()} />
    </View>
  );
};

export default Detail;
