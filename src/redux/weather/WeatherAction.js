import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./WeatherType";
import axios from "axios";

const sendWeatherRequest = () => {
    return {
        type: SEND_WEATHER_REQUEST
    };
};

const receiveWeatherResponse = (data) => {
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    };
};

const receiveWeatherError = (error) => {
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload: error
    };
};

const getWeatherInfo = (query) => {
    return async (dispatch) => {
        dispatch(sendWeatherRequest());
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7ebcd0b29f8e07a508956a38313b3ce0`);
            dispatch(receiveWeatherResponse(response.data));
        } catch (error) {
            dispatch(receiveWeatherError(error.message));
        }
    };
};

export default getWeatherInfo;
