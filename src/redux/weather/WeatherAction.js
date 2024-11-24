import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./WeatherType";
import axios from "axios";

export const sendWeatherRequest = (query) => {
    return {
        type: SEND_WEATHER_REQUEST,
        payload: query
    };
};

export const receiveWeatherResponse = (data) => {
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    };
};

export const receiveWeatherError = (data) => {
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload: data
    };
};

// const getWeatherInfo = (query = 'tehran') => {
//     dispatch(sendWeatherRequest());
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=a1496c1b55417d9accfd35f003b7720c&units=metric&lang=fa`)
//         .then(res => {
//             dispatch(receiveWeatherResponse(res.data));
//         })
//         .catch(error => {
//             dispatch(receiveWeatherError(error));
//         });
// };

// export default getWeatherInfo;
