import { createStore } from "redux";
import fruitReducer from "./fruit/fruitReducer";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer)
export default store;