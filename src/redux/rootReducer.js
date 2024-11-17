import { combineReducers } from "redux";
import fruitReducer from "./fruit/fruitReducer";
import foodReduser from "./food/foodReducer";


const rootReducer = combineReducers({
    fruit: fruitReducer,
    food: foodReduser
})

export default rootReducer;