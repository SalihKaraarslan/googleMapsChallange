import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './Home.styles';

import {useNavigation} from '@react-navigation/native';

import Data from '../../mobileCaseData.json';

const Home = () => {
  const {navigate} = useNavigation();

  const {regions, routes} = Data;

  const renderItem = ({item}) => <Text>{item.name}</Text>;

  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        scrollEnabled={false}
        data={regions}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Home;
