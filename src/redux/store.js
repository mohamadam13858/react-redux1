import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { watcherSaga } from './weather/weatherSaga';
import weatherReducer from './weather/WeatherReducer';

// ایجاد middleware برای saga
const sagaMiddleware = createSagaMiddleware();

// ایجاد store با استفاده از reducer و middleware ها
const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
);

// اجرای watcherSaga
sagaMiddleware.run(watcherSaga);

export default store;
