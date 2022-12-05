import React from 'react'
 
const API_KEY = '7c347514e880f8d8c7653f6133a0688b';
 
//bring in icons from API
const makeIconURL = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;
 
//function to get the weather data from API
const getWeatherData = async (city, units = 'imperial') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
   
 
    //returns data from a city search
    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
 
 
    //Organize the data and parse for relevent information
    const {
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure,
            humidity },
        wind: {speed},
        sys: { country },
        name,
 
    } = data;
   
 
    const { description, icon } = weather[0];
 
    return {
        description, iconURL: makeIconURL(icon), temp, feels_like, temp_min, temp_max,
        pressure, humidity, speed, country, name,
    };
};
 
export { getWeatherData };
