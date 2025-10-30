import React, { useEffect, useState } from 'react'
import {Typography, TextField} from '@mui/material'
import './weather.css'
import { idID } from '@mui/material/locale';

function WeatherApp() {
  const apiKey = "9effe9efbce8cac93228414c5c121915";
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);


  useEffect(
    () => {loadWeatherData("Karachi");

    }, []
)

  useEffect(
    ()=> {if (search) loadWeatherData(search)},
    [search]
  )

  async function loadWeatherData(cityName){
    try{
      var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
      var weatherData = await response.json();
      setData(weatherData)
      console.log(weatherData);
    } catch (error) {
      
    }
  }
  return (
    <>
      <div className="weather-container">
        <div className="weather-box">
        <h1>Current Weather</h1>
          <div className="search-bar">
            {/* <input type="text" name='' placeholder='Search City' value={city} onChange={(input) => {setCity(input.target.value)}} varient="outlined"/> */}
            <TextField
              id="text"
              label="Search City"
              value={city}
              onChange={(input)=> setCity(input.target.value)
              }
              
            />
            <button onClick={()=> {setSearch(city)}} class="btn btn-primary">Search</button>
          </div>

          {
            data == null
            ? <div><p>Loading...</p></div> : 
            <div className="weather-stats">
              <h1>{data.name}, {data.sys.country}</h1>

              <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="icon" />

              <p>{(data.main.temp - 273 ).toFixed(1)}</p>
              <p>{data.weather[0].main}</p>
              <p>Humidity : {data.main.humidity}%</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default WeatherApp