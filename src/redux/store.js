import { applyMiddleware, createStore } from "redux";
import weatherReducer from "./weather/WeatherReducer";
import { thunk } from "redux-thunk";

const store = createStore(
    weatherReducer,
    (applyMiddleware(thunk))
);

export default store;
