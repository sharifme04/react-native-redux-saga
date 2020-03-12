import {call, put, takeLatest} from 'redux-saga/effects';
import {
  FETCH_ALL_LAUNCHES_REQUESTED,
  FETCH_DETAILS_REQUESTED,
} from '../actionType/launchType';
import {
  launchesSuccess,
  launchesFail,
  detailsLaunchesSuccess,
  detailsLaunchesFail,
} from '../actions/launches';
import {api} from '../services/services';

function* fetchLaunches(action) {
  const {launches, error} = yield call(api.fetchData, action);
  if (launches) {
    yield put(launchesSuccess(launches));
  } else {
    yield put(launchesFail(error));
  }
}

function* fetchDetailsLaunches(action) {
  const {launch, error} = yield call(
    api.fetchDetailsData,
    action.flight_number,
  );
  if (launch) {
    yield put(detailsLaunchesSuccess(launch));
  } else {
    yield put(detailsLaunchesFail(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_ALL_LAUNCHES_REQUESTED, fetchLaunches);
}

export function* watchDetailsData() {
  yield takeLatest(FETCH_DETAILS_REQUESTED, fetchDetailsLaunches);
}
