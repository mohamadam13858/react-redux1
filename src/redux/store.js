import { applyMiddleware, createStore } from "redux";
import fruitReducer from "./fruit/fruitReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
const store = createStore(rootReducer , applyMiddleware(logger))
export default store;