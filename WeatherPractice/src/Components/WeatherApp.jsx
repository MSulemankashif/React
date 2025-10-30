import React, { useState } from 'react'
import {Typography, TextField} from '@mui/material'

function WeatherApp() {

    const apiKey = "9effe9efbce8cac93228414c5c121915";
    const [city, setCity] = useState("")
    const [data, setData] = useState(null)
    const [search, setSearch] = useState(null)

    async function loadWeatherData(cityName) {
        try{
            var response = await(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
            var weatherData = await(response.json);
            setData(weatherData)
            console.log(weatherData);
        }catch(error){
            console.log(error);
        }
    }

  return (
    <>
        <div className="weather-container">
            <div className="weather-box">
                <div className="searchbar">
                    <TextField
                      id="search"
                      label="Search Box"
                      value={city}
                      onChange={(input)=> {setCity(input.target.value)}}
                    />
                    <button onClick={()=> {setSearch(city)}}>Search</button>
                </div>

                {
                    data === null ? <div><p>Loading Weather...</p></div> : 
                    <div className="weather-stats">
                        <h1>{data.name}, {data.sys.country}</h1>
                            <img src={`https://openweathermap.org/img/w/${data.weather[0].icon.png}`} alt="icon" />

                            <p>{[data.main.temp - 273.15]}</p>
                            <p></p>
                            <p></p>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default WeatherApp