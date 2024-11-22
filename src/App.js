import React from "react";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import store from "./redux/store";



const App = () => {

    return (
        <div>
            <Provider store={store}>
                <Weather />
            </Provider>
        </div>
    )



}


export default App;