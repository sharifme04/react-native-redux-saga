import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {detailsLaunchesRequest} from '../../redux/actions/launches';
import styles from './Style';

const DetailsScreen = ({route}) => {
  const {flightNumber} = route.params;
  const dispatch = useDispatch();
  const launch = useSelector(state => state.launches?.launch);

  useEffect(() => {
    dispatch(detailsLaunchesRequest(flightNumber));
  }, [flightNumber, dispatch]);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <Image
            style={styles.image}
            source={{uri: launch?.links?.mission_patch_small}}
          />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              Mission Name: {launch?.mission_name}
            </Text>
            <Text style={styles.sectionDescription}>
              Flight Number: {launch?.flight_number}
            </Text>
            <Text style={styles.sectionDescription}>
              Launch Year: {launch?.launch_year}
            </Text>
            <Text style={styles.sectionDescription}>
              Launch Success: {launch?.launch_success ? 'Success' : 'Fail'}
            </Text>
            <Text style={styles.sectionDescription}>
              Rocket Name: {launch?.rocket?.rocket_name}
            </Text>
            <Text style={styles.sectionDescription}>
              Rocket Type: {launch?.rocket?.rocket_type}
            </Text>
            <Text style={styles.sectionDescription}>
              Launch Site: {launch?.launch_site?.site_name}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
