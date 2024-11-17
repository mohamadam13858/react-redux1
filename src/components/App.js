import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Mystore from './MyStore';
import MyStore from './MyStore';
const App = ()=>{
    return (
        <Provider store={store}>
            <div>
                <MyStore/>
            </div>
        </Provider>
    ) 
}
export default App;