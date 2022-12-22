import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Home.styles';

import {useNavigation} from '@react-navigation/native';
import RenderRegion from '../../components/RenderRegion';
import Data from '../../mobileCaseData.json';

const Home = () => {
  const {navigate} = useNavigation();

  const {regions, routes} = Data;

  const renderItem = ({item}) => (
    <RenderRegion
      name={item.name}
      onPress={() =>
        navigate('Detail', {region: item, regions: regions, routes: routes})
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlistContentStyle}
        scrollEnabled={false}
        data={regions}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Home;
