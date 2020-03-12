import axios from 'axios';
import Config from 'react-native-config';

export const api = {
  fetchData() {
    return axios
      .get(`${Config.LAUNCHES_API}`)
      .then(response => ({launches: response.data}))
      .catch(error => ({error}));
  },
  fetchDetailsData(flight_number) {
    return axios
      .get(`${Config.LAUNCHES_API}/${flight_number}`)
      .then(response => ({launch: response.data}))
      .catch(error => ({error}));
  },
};
