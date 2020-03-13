import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import {name as appName} from './app.json';

import rootSaga from './src/app/redux/sagas/rootSaga';
import rootReducer from './src/app/redux/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
);
sagaMiddleware.run(rootSaga);
const Appcomponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Appcomponent);
