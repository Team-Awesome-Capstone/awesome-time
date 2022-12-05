import hotDay from './assets/hotDay.jpg';
import coldDay from './assets/coldDay.jpg';
import Descriptions from './components/weather/Descriptions';
import { useEffect, useState } from 'react';
import { getWeatherData } from './components/weather/WeatherService';
 
//get current weather for specific city
function WeatherShell() {
 
  //create state
  const [city, setCity] = useState('Cleveland');
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');
  const [defaultBackground, setDefaultBackground] = useState(hotDay)
 
useEffect(() => {
  const fetchWeatherData = async () => {
    const data  = await getWeatherData(city, units)
   
    setWeather(data);
 
    //dynamic background - sets minimum temp for cold background otherwise use hot
    const threshold = units === 'imperial' ? 60 : 20;
    if (data.temp <= threshold) setDefaultBackground(coldDay);
    else setDefaultBackground(hotDay);
  };
 
  fetchWeatherData();
 
}, [units, city]);
 
//listen for button click event and fetch the input
const handleUnitsClick = (e) => {
  const button = e.currentTarget;
  const currentUnit = button.innerText.slice(1);
 
  //if it's celsius change to farenheit
  const isCelsius = currentUnit === 'C';
  button.innerText = isCelsius ? '°F' : '°C';
  setUnits(isCelsius ? 'metric' : 'imperial');
};
 
const enterKeyPressed = (e) => {
  if (e.keyCode === 13) { //13 is the key code for enter
    setCity(e.currentTarget.value);
    e.currentTarget.blur(); //removes focus from search box upon enter
  }
};
 
  //set component structure
  return (
    <div className="app" style={{backgroundImage: `url(${defaultBackground})`}}>
      <div className="overlay">
 
        {/* render only if weather is not null */}
 
        {
          weather && (
            <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter city..." />
            <button onClick={(e) => handleUnitsClick(e)}>&deg;F</button>
          </div>
 
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img
              src={weather.iconURL}
              alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h2>{`${weather.temp.toFixed()}°${units === 'imperial' ? 'F' : 'C'}`}</h2>
            </div>
          </div>
 
 
          {/* description */}
 
          <Descriptions weather={weather} units={units} />
 
        </div>
          )}
       
      </div>
    </div>
  );
}
 
export default WeatherShell;