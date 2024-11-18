import React from "react";
import UserComponents from "./components/UserComponents";
import { Provider } from "react-redux";
import store from "./redux/store";



const App = ()=>{

    return(
        <div>
            <Provider store={store}>
            <UserComponents/>
            </Provider>
        </div>
    )



}


export default App;