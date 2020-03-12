import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Style';

const ListItem = ({mission_name, navigation, flight_number}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('Details', {flightNumber: flight_number})
      }>
      <Text style={styles.title}>{mission_name}</Text>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  mission_name: PropTypes.string,
  flight_number: PropTypes.number,
};

export default ListItem;
