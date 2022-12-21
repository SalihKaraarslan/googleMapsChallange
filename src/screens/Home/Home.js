import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './Home.styles';

import {useNavigation} from '@react-navigation/native';

import Data from '../../mobileCaseData.json';

const Home = () => {
  const {navigate} = useNavigation();

  const {regions, routes} = Data;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        height: 80,
        paddingLeft: 30,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
      }}
      onPress={() => navigate('Detail', {region: item})}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontFamily: 'Poppins-SemiBold',
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#edf3fb'}}>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          marginHorizontal: 20,
          marginBottom: 200,
        }}
        scrollEnabled={false}
        data={regions}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Home;
