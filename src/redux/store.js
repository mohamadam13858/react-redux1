import { createStoreHook } from "react-redux";
import userReducer from "./user/userReducer";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";



const store = createStore(userReducer , applyMiddleware(logger , thunk))


export default store;