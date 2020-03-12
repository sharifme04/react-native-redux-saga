import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, SafeAreaView} from 'react-native';
import {launchesRequest} from '../../redux/actions/launches';
import ListItem from './ListItem';

const LaunchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const launches = useSelector(state => state.launches);

  useEffect(() => {
    dispatch(launchesRequest());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <FlatList
        data={launches?.launches}
        renderItem={({item}) => (
          <ListItem
            navigation={navigation}
            mission_name={item.mission_name}
            flight_number={item.flight_number}
          />
        )}
        keyExtractor={item => item.launch_date_unix.toString()}
      />
    </SafeAreaView>
  );
};

export default LaunchScreen;
