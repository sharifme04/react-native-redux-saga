import {all} from 'redux-saga/effects';
import {watchFetchData, watchDetailsData} from './launchesSaga';

export default function* rootSaga() {
  yield all([watchFetchData(), watchDetailsData()]);
}
